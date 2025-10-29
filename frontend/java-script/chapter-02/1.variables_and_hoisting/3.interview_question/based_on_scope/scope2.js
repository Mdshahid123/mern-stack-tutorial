function bar() {
    let b = 10;
    if (true) {
        let b = 20;
        console.log(b);
    }
    console.log(b);
}
bar();