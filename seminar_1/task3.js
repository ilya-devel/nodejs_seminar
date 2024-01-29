function counter(n) {
    console.log(n);
    setTimeout(() => counter(n + 1), 0);
}


counter(0);


setTimeout(() => {
    console.log("Script completed");
    ProcessingInstruction.exit();
}, 1000);


// counter(n)
// counter(n).console.log()
// counter(n)
    // counter(n), setTimeout() -> eventLoop - callback
// counter(n)
//
    // setTimeout -> eventLoop - callBack 1000ms