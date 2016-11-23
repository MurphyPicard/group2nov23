# Arrow Functions

ES6 has introduced ARROW FUNCTIONS which have three main benefits. First, they have a concise syntax. Secondly, they have implicit returns, which allows us to write these nifty one-liners.

Thirdly, they don’t rebind the value of this when you use a arrow function inside of another function, which is really helpful for when you’re doing things like click handlers and whatnot.


# H1 Default Parameters

Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed.

ES5 way to check if one of checking if the variable b has been passed or is undefined

```javascript
function multiply(a, b) {
  var b = (typeof b !== 'undefined') ?  b : 1;

  return a*b;
}
multiply(5); // 5
```

With default parameters in ES6, the check in the function body is no longer necessary. Now, you can simply put 10 as the default value for b in the function head:

```javascript
let unDef;
function addEm(a, b = 10) {
  return a+b;
}
addEm(5); // 15
addEm(5,unDef); //15
```





# Shortening

Given the following code:
```javascript
 var obj = {
   foo: function() {},
   bar: function() {}
 };
```
 You are now able to shorten this to:

```javascript
 var obj = {
   foo() {},
   bar() {}
 };
```
 Note : The shorthand syntax uses named function instead of anonymous functions (as in …foo: function() {}…). Named functions can be called from the function body (this is impossible for anonymous function as there is no identifier to refer to). For more details, see function.
