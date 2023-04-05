// guac no salsa :: Samantha Hua, Vansh Saboo
// SoftDev pd7
// K27 -- Basic functions in JavaScript
// 2023-04-04t
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.


// fact func

function fact(x) {
    if (x < 2) {
        return 1 // base case
    }
    return x*fact(x-1)
}

// fib func

function fib(x) {
    if (x < 2) {
        return x // base case
    }
    return fib(x-1)+fib(x-2)
}
