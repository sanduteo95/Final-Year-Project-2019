function j (a, b, c) {  
    return a + b + c;
}
function g (a, b, c) {
    return a * b * c;
}
function h (a, b, c, d, e, f) {
    return j(a, b, c) - g(d, e, f);
}
function call(a, b, c) {
    var x = 1;
    x = x + 1;
    var y = 2;
    y = y * 3;
    var z = y - x;
    return h(a, x, b, y, c, z);
}

return call(5, 6, 7);