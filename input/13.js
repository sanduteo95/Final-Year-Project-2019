function f() {
    throw new Error('error');
    return 1;
}

return f();