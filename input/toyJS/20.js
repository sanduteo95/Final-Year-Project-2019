function f(x) {
    switch(x) {
        case 1:
            x = x + 1;
        case 2:
            x = x + 2;
            break;
        default:
            x = x + 3;
    }
    return x;
}

return f(1);