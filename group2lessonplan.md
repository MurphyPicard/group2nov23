ES6 has introduced ARROW FUNCTIONS which have three main benefits. First, they have a concise syntax. Secondly, they have implicit returns, which allows us to write these nifty one-liners.

Thirdly, they don’t rebind the value of this when you use a arrow function inside of another function, which is really helpful for when you’re doing things like click handlers and whatnot.

















The new property value shorthand lets us abbreviate the initialization of a property within an object literal, provided that the property key matches an existing variable name. This was the first part of the ES6 code above;

function getCar(make, model, value) {
	return {
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable
		// name
		make,
		model,
		value
	};
}
The ES3/ES5 equivalent would be:

function getCar(make, model, value) {
	return {
		make: make,
		model: model,
		value: value
	};
}
As you can see, the ES6 syntax is a bit more succinct by being less repetitive with the removal of the colon (:) and the matching variable. Declaring an object literal with keys that match variables is actual quite common, so you should find this feature quite useful. You may also notice that this property value shorthand looks remarkably like the object literal destructure pattern shorthand when we discussed object destructuring.

With this shorthand syntax, the JS engine looks in the containing scope for a variable with the same name. If it is found, that variable’s value is assigned to the property. If it is not found, a ReferenceError is thrown. It’s worth noting that the transpilers will not throw an error at compile time if the variable is not found, but instead will declare an object with the name of the not-found variable. However, when the code runs you will still get the ReferenceError since the variable does not exist.
