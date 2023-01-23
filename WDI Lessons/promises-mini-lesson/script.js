//we could also return an object containing a function-expression defining a method named 'then'
function someFunction(value) {
  return {
    then: callback => {
      return callback(value);
    }
  };
}

//and invoke it in the following way:
someFunction(14).then(value => {
  console.log(`${value} was passed in as an arg to callback`);
})

class Promise {
  constructor(fn){
    this.state = 'pending';
    this.value = null;
    this.deferred = null;
    (fn)? fn(this.resolve): ()=>{console.log("shit")};
  }

  resolve(newValue) {
    value = newValue;
    state = 'resolved';
    if(deferred) {
      this.handle(deferred);
    }
  }

  handle(onResolved) {
    if(this.state === 'pending') {
      this.deferred = onResolved;
      return;
    }
    onResolved(value);
  }

  then(onResolved) {
    handle(onResolved);
  }
}

let tony = new Promise(()=>{})
