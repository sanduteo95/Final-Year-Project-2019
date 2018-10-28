function f() {
    var x = [];
    x[0] = [];
    x[0][1] = 1;
    x[1] = [];
    x[1][0] = 2;
    return x[1].length;
}

return f();