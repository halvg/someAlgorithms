
var fib = {};


fib.resolve = function(n) {
	if (n == 0 || n == 1) {
		return n;
	} else {
		return fib.resolve(n-2) + fib.resolve(n-1);
	}
}

fib.printFibonacciSerie = function(n) {
	var list = [];
	for (var i = 0; i <= n; i++) {
		var a = fib.resolve(i);
		list.push(a);
	}
	console.log(list);
}

module.exports = fib;