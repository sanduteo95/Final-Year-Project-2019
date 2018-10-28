function f(x) {
    console.log(x);
    return x == 10 || f(x+1);
}

return f(1);