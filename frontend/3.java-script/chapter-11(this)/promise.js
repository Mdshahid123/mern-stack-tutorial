class MyPromise {
  constructor(executor) {
    this.state = "pending"; 
    this.value = undefined;
    this.handlers = [];  // to store then callbacks

    const resolve = (value) => {
      if (this.state !== "pending") return;

      this.state = "fulfilled";
      this.value = value;

      queueMicrotask(() => {
        this.handlers.forEach(h => h(this.value));
      });
    };

    const reject = (reason) => {
      if (this.state !== "pending") return;

      this.state = "rejected";
      this.value = reason;

      queueMicrotask(() => {
        this.handlers.forEach(h => h(this.value));
      });
    };

    try {
      executor(resolve, reject); // run executor immediately
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled) {
    return new MyPromise((resolve) => {
      const handler = (value) => {
        const result = onFulfilled(value);
        resolve(result);
      };

      if (this.state === "pending") {
        this.handlers.push(handler);
      } else {
        queueMicrotask(() => handler(this.value));
      }
    });
  }
}

let p = new MyPromise((resolve, reject) => {
  setTimeout(() =>{
    resolve(200)
  }, 1000);
});

p.then((data) => {
  console.log("got:", data);
});


