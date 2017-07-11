
var sorting = {};

sorting.testList = [7, 5, 2, 3, 9, 3, 5, 1, 4, 8, 9, 5, 6, 3, 2, 7, 2];


sorting.bubbleSort = function(list) {
	for (var i = list.length-1; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (list[j] > list[j+1]) {
				swap(j, j+1);
			}
		}
	}
	
	function swap(i, j) {
		var temp = list[i];
		list[i] = list[j];
		list[j] = temp;
	}
}


sorting.insertionSort = function(list) {
	for (var i = 0; i < list.length-1; i++) {
		var j = i;
		while ( (list[j] < list[j-1]) && j > 0 ) {
			swap(j, j-1);
			j--;
		}
	}
	
	function swap(i, j) {
		var temp = list[i];
		list[i] = list[j];
		list[j] = temp;
	}	
}


sorting.quickSort = function(list) {
	recursiveQSort(list, 0, list.length-1);
	
	function recursiveQSort(list, lowl, highl) {
		if (lowl >= highl) { //si el fragmento de lista a ordenar es de un elemento o menos, ya está ordenada
			return;
		}
		var pivotePos = Math.trunc( (lowl+highl)/ 2 );
		var pivote = list[pivotePos];
		
		var i = lowl;
		var j = highl;
		while (i <= j) {
			while (list[i] < pivote) {
				i++;
			}
			while (list[j] > pivote) {
				j--;
			}
			
			if (i <= j) {
				swap(i, j);
				i++;
				j--;
			}
		}
		
		// llamamos recursivamente a recursiveQSort con las particiones que tenemos
		recursiveQSort(list, lowl, j);
		recursiveQSort(list, i, highl);
	}
	
	function swap(i, j) {
		var temp = list[i];
		list[i] = list[j];
		list[j] = temp;
	}	
}



sorting.mergeSort = function(list) {
	recursiveMSort(list, 0, list.length-1);
	
	function recursiveMSort(list, lowl, highl) {
		if (lowl < highl) {
			var center = Math.trunc( (lowl+highl)/2 );
			recursiveMSort(list, lowl, center);
			recursiveMSort(list, center+1, highl);
			merge(list, lowl, center, center+1, highl);
		}
	}
	
	function merge(list, aStart, aEnd, bStart, bEnd) {
		var tmpList = [];
		
		var aIndex = aStart;
		var bIndex = bStart;
		while ( (aIndex <= aEnd) && (bIndex <= bEnd) ) {
			if (list[aIndex] <= list[bIndex]) {
				tmpList.push(list[aIndex]);
				aIndex++;
			} else {
				tmpList.push(list[bIndex]);
				bIndex++;
			}
		}
		while (aIndex <= aEnd) {
			tmpList.push(list[aIndex]);
			aIndex++;
		}
		while (bIndex <= bEnd) {
			tmpList.push(list[bIndex]);
			bIndex++;
		}
		// metemos la lista temporal, ahora mergeada, en la lista original
		for (var i = bEnd; i >= aStart; i--) {
			list[i] = tmpList.pop();
		}		
	}
}



module.exports = sorting;