////1
function findMaxDifference(arr) {
    if (arr.length < 2) {
        return 0;
    }
    
    let maxDiff = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let diff = Math.abs(arr[i] - arr[j]);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }
    
    return maxDiff;
}

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

function filterByIsDone(arr) {
    return arr.filter(obj => obj.isDone);
}

const objects = [
    {id: 1, isDone: true},
    {id: 2, isDone: false},
    {id: 3, isDone: true}
];

console.log(findMaxDifference([1, 4, 6, 3, 2]));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
console.log(filterByIsDone(objects));


///2
function findElementsGreaterThan(arr, num) {
    return arr.filter(element => element > num);
}

function flattenMultiDimensionalArray(arr) {
    return arr.flat(Infinity);
}

console.log(findElementsGreaterThan([1, 4, 6, 3, 2], 2));
console.log(flattenMultiDimensionalArray([1, 4, [34, 1, 20], [6, [6, 12, 8], 6]]));


//3
function countZeroSumPairs(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                count++;
            }
        }
    }
    
    return count;
}

function countZeroSumTriples(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
}