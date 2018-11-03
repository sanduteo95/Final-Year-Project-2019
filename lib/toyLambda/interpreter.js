module.exports = function (program) {
    let emptyAddress = 0;
    let stackAddress = emptyAddress;
    let stack = [];

    let result = undefined;
    const address = interpretLambda(program, []);

    // if the address points somewhere on the stack then store it
    if (address !== emptyAddress) {
        result = stack[address];
    }
    
    return result;

    function interpretLambda (lambda, boundVariables) {
        // check first if there are any global variables
        if (lambda[0] === 'Def') {
            // point the defined lambda to the stack at a new address
            stackAddress = stackAddress + 1;
            stack[stackAddress] = lambda[2];
            boundVariables[lambda[1]] = stackAddress;
            return interpretLambda(lambda[3], boundVariables);
        } else {
            // interpret the lambda term
            return interpretTerm(lambda, boundVariables, []);
        }
    }

    function interpretTerm (term, boundVariables, variablesToBound, isApplication) {
        // an expression can only be a function application, variable dereference, operator or constant
        switch(term[0]) {
            case 'Deref':
                return interpretDereference(term[1], boundVariables);
            case 'Const':
                return interpretConstant(term[1]);  
            case 'Op':
                return interpretOperator(term[1], boundVariables, variablesToBound, isApplication);
            case 'Abstr':
                return interpretAbstraction(term[1], boundVariables, variablesToBound, isApplication);
            case 'Apply':
                return interpretApplication(term[1], boundVariables, variablesToBound, isApplication);
            default:
                throw new Error('Failed to interpret term for ' + term[0]);
        }
    }

    function interpretAbstraction(abstraction, boundVariables, variablesToBound, isApplication) {
        // bind variable if there is anything to bind
        if (variablesToBound.length > 0) {
            const address1 = variablesToBound.pop();
            boundVariables[abstraction[0]] = address1;
        }
        let address2 = emptyAddress;
        // interpret the inner term (if it fails, it should only be allowed if the abstracted variable is not defined)
        try {
            address2 = interpretTerm(abstraction[1], boundVariables, variablesToBound);
        } catch (err) {
            // check if the error is because abstract variable is not defined
            if (isApplication && err.message === 'Variable or named lambda ' + abstraction[0] + ' has not been defined') {
                stackAddress = stackAddress + 1;
                stack[stackAddress] = ['Abstr', abstraction];
                address2 = stackAddress;
            } else {
                throw new Error(err.message);
            }
        }
        return address2;
    }

    function interpretApplication(application, boundVariables, variablesToBound, isApplication) {
        // interpret the RHS termand add it to the variablesToBound array 
        // send an empty array of variables to bind because it's a different scope
        let address1 = interpretTerm(application[1], boundVariables, [], true);
        variablesToBound.push(address1);
        // check if the LHS is a normal abstraction or a variable
        let term = undefined;
        switch(application[0][0]) {
            case 'Abstr': case 'Apply':
                term = application[0];
                break;
            case 'Deref':
                const termAddress = interpretTerm(application[0], boundVariables, variablesToBound, isApplication);
                term = stack[termAddress];
                if (term[0] !== 'Abstr' ) {
                    throw new Error('Failed to interpret application for named lambda ' + application[0][1][1] + ' which stores a ' + term[0]);
                }
                break;
            default:
                throw new Error('Failed to interpret application for ' + application[0][0]);
        }
        const address2 = interpretTerm(term, boundVariables, variablesToBound, isApplication);
        // clean up stack
        if (address1 !== address2) {
            stack[address1] = stack[address2];
        }
        stackAddress = address1;
        return address1;
    }

    function interpretIdentifier (identifier, boundVariables) {
        // just get the address on the stack pointed at by the identifier
        const address = boundVariables[identifier];
        if(!address) {
            throw new Error('Variable or named lambda ' + identifier + ' has not been defined');
        }
        return address;
    }

    function interpretDereference (dereference, boundVariables) {
        let idAddress = emptyAddress;
        if (dereference[0] !== 'Identifier') {
            throw new Error('Failed to interpreter dereference for ' + dereference[0]);
        }
        // get address of the identifier on the stack
        idAddress = interpretIdentifier(dereference[1], boundVariables);
        // increase the stack address and store the value of the identifier there
        stackAddress = stackAddress + 1;
        stack[stackAddress] = stack[idAddress];
        return stackAddress;
    }

    function interpretConstant (constant) {
        // just increment the address on the stack and assign it the constant value
        stackAddress = stackAddress + 1;
        stack[stackAddress] = constant;
        return stackAddress;
    }

    function interpretOperator (operator, boundVariables, variablesToBound, isApplication) {
        let address1 = emptyAddress;
        let address2 = emptyAddress;
        address1 = interpretTerm(operator[1], boundVariables, variablesToBound, isApplication);
        if (operator[0] !== 'Negate' && operator[0] !== 'Negative') {
            // don't interpret stuff if not needed to
            if ((operator[0] === 'Or' && stack[address1]) || 
                (operator[0] === 'And' && !stack[address1])) {
                // clean up stack
                stackAddress = address1;
                return address1;
            }
            address2 = interpretTerm(operator[2], boundVariables, variablesToBound, isApplication);
        }
        
        switch(operator[0]) {
            case 'Plus':   
                stack[address1] = stack[address1] + stack[address2];
                break;
            case 'Minus':
                stack[address1] = stack[address1] - stack[address2];
                break;
            case 'Times':
                stack[address1] = stack[address1] * stack[address2];
                break;
            case 'Divide':
                stack[address1] = stack[address1] / stack[address2];
                break;
            case 'Modulus':
                stack[address1] = stack[address1] % stack[address2];
                break;
            case 'Eq':
                stack[address1] = stack[address1] == stack[address2];
                break;
            case 'Noteq':
                stack[address1] = stack[address1] != stack[address2];
                break;
            case 'Leq':
                stack[address1] = stack[address1] <= stack[address2];
                break;
            case 'Less':
                stack[address1] = stack[address1] < stack[address2];
                break;
            case 'Geq':
                stack[address1] = stack[address1] >= stack[address2];
                break;
            case 'Greater':
                stack[address1] = stack[address1] > stack[address2];
                break;
            case 'And':
                stack[address1] = stack[address1] && stack[address2];
                break;
            case 'Or':
                stack[address1] = stack[address1] || stack[address2];
                break;
            case 'Negate':
                stack[address1] = !stack[address1];
                break;
            case 'Negative':
                stack[address1] = - stack[address1];
                break;
            default:
                throw new Error('Failed to interpret operator for ' + operator[0]);
        }
        // clean up stack
        stackAddress = address1;
        return address1;
    }
}