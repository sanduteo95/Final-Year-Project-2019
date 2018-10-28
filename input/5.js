function f (z) {  
    var x = 2; 
    var y = x;
    x = x + 1;
    return x + y + z;
}

return f(5);