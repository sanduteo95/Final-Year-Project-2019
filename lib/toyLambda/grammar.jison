%{
    function createDefinition(name, value, recursive){
      	return {
			type: 'Def',
			recursive: recursive,
			name: name,
			value: value
		};
    }

	function createTerm(type, value) {
		return {
			type: type,
			value: value
		}
	}

	function createIO(value) {
		return {
			type: 'Deref',
			value: createTerm('Identifier', value)
		};
	}

	function createAbstraction(binding, value) {
		return {
			type: 'Abstr',
			binding: binding,
			value: value
		};
	}

	function createApplication(lhs, rhs) {
		return {
			type: 'Apply',
			value: {
				lhs: lhs,
				rhs: rhs
			}
		};
	}

	function createOperation(op, lhs, rhs) {
		return {
			type: 'Op',
			op: op,
			lhs: lhs,
			rhs: rhs
		};
	}
%}

%right 'λ'
%left '@'
%left 'and' 'or'
%left 'eq' 'noteq'
%left 'leq' 'geq' 'less' 'greater'
%left 'plus' 'minus'
%left 'times' 'divide' 'modulus'
%right 'negate'

%%

code
	: lambda EOF
		{ 
			return $lambda;
		}
	;

lambda
	: 'let' var '=' term 'in' lambda
		%{
			var definedLambda = createDefinition($var.value, $term, false);
			var lambda = $lambda;
			lambda.unshift(definedLambda);
			$$ = lambda;
		%}
	| 'let' 'rec' var '=' term 'in' lambda
		%{
			var definedRecursiveLambda = createDefinition($var.value, $term, true);
			var lambda = $lambda;
			lambda.unshift(definedRecursiveLambda);
			$$ = lambda;
		%}
	| term
		{ $$ = [$term]; }
	;

term
	: var	
		%{
			$$ = createTerm('Deref', $var);
		%}
	| 'const'	
		{ 
			var value;
			if (yytext === 'true') {
				value = true;
			} else if (yytext === 'false') {
				value = false;
			} else {
				value = parseInt(yytext);
			}
			$$ = createTerm('Const', value); 
		}
	| operation	
		{ $$ = $operation; } 
	| abstraction	
		{ $$ = $abstraction; }
	| application	
		{ $$ = $application; }
	| 'read'	
		%{
			$$ = createIO('_read');
		%}
	| '(' term ')'	
		%{
			$$ = $term;
		%}
	;

abstraction	
	: 'λ' var '.' term
		%{
			$$ = createAbstraction($var.value, $term);
		%}
	;

var
	: 'id'
		%{
			$$ = createTerm('Identifier', yytext);
		%}
	;

application 
	: term '@' term
		%{
			$$ = createApplication($1, $3);
		%}
	| 'print' '@' term
		%{
			$$ = createApplication(createAbstraction('_print', createIO('_print')), $3);
		%}
	;

operation 
	: term 'plus' term
		%{
			$$ = createOperation('plus', $1, $3);
		%}
	| term 'minus' term
		%{
			$$ = createOperation('minus', $1, $3);
		%}
	| term 'times' term
		%{
			$$ = createOperation('times', $1, $3);
		%}
	| term 'divide' term
		%{
			$$ = createOperation('divide', $1, $3);
		%}
	| term 'modulus' term
		%{
			$$ = createOperation('modulus', $1, $3);
		%}
	| 'minus' term
		%{
			$$ = createOperation('minus', $2);
		%}
	| term 'leq' term
		%{
			$$ = createOperation('leq', $1, $3);
		%}
	| term 'less' term
		%{
			$$ = createOperation('less', $1, $3);
		%}
	| term 'geq' term
		%{
			$$ = createOperation('geq', $1, $3);
		%}
	| term 'greater' term
		%{
			$$ = createOperation('greater', $1, $3);
		%}
	| term 'eq' term
		%{
			$$ = createOperation('eq', $1, $3);
		%}
	| term 'noteq' term
		%{
			$$ = createOperation('noteq', $1, $3);
		%}
	| term 'and' term
		%{
			$$ = createOperation('and', $1, $3);
		%}
	| term 'or' term
		%{
			$$ = createOperation('or', $1, $3);
		%}
	| 'negate' term
		%{
			$$ = createOperation('negate', $2);
		%}
	;