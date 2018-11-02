function square (x) {  
    return x * x;
}

function isSquareRootOf(x, n) {
    return square(x) == n;
}

return isSquareRootOf(2, 4);