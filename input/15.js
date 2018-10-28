function f (x, y) {  
    if (x !== 0) {
        return x;
    } else {
        if (y !== 0) {
            return y;
        }
    }
    return 0;
}

return f(0, 2);