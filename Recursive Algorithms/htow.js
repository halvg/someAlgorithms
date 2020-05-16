
var htow = {};

htow.resolve = function(towerSize, from, temp, to) {
	if (towerSize == 0) {
		return;
	} else {
		htow.resolve(towerSize-1, from, to, temp);
		console.log("Move disc " + towerSize + " from " + from + " to " + to);
		htow.resolve(towerSize-1, temp, from, to);
	}
}


module.exports = htow;