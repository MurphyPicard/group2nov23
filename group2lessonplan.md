ES6 has introduced ARROW FUNCTIONS which have three main benefits. First, they have a concise syntax. Secondly, they have implicit returns, which allows us to write these nifty one-liners.

Thirdly, they don’t rebind the value of this when you use a arrow function inside of another function, which is really helpful for when you’re doing things like click handlers and whatnot.

















Given the following code:

var obj = {
  foo: function() {},
  bar: function() {}
};
You are now able to shorten this to:

var obj = {
  foo() {},
  bar() {}
};
Note : The shorthand syntax uses named function instead of anonymous functions (as in …foo: function() {}…). Named functions can be called from the function body (this is impossible for anonymous function as there is no identifier to refer to). For more details, see function.
