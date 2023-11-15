const arr = [1, 2, 3, 4, 0, 2, 2];

const divide = (arr, n) => {

	let result = [];
	let subarray = [];
	let sum = 0;
	
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];

        if(sum == n) {
			result.push(subarray);
			sum = 0;
			subarray = [];
		}
		else if(sum > n) {
			sum = arr[i];
			result.push(subarray);
			subarray = [arr[i]];			
		}
		else {
			subarray.push(arr[i]);
		}
	}
    if(subarray.length != 0){
        result.push(subarray);
        subarray = [];
    }
	return result;
};

const n = prompt("Enter n: ");

alert(JSON.stringify(divide(arr, n)));
