const { setWorldConstructor, After } = require('cucumber');

// state and stateful utilities can be shared between steps using "World"
class World {
  constructor() {
    // hold a reference to a request throughout a scenario
    this.req = null;  
  }
}

setWorldConstructor(World);

After(function () {
  // clear the request after each scenario
  this.req = null;
});
