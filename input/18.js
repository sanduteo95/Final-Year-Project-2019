function f() {
    var x = []; 
    x['hey'] = 'test';
    x['there'] = 'text';
    return Object.keys(x);
}

return f();