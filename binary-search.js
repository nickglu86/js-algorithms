//Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.

export const binarySearch = (array, target, start = 0, end = array.length - 1) => {
      // case - target value not in the array
     if(start > end) return -1;

     // defining the middle index of the array
     const middle = Math.floor((start + end) / 2);

     // case - target value is in the middle index of the array
     if(array[middle] === target) return middle;

     // case - target value is smaller than the middle value of the array
     if(array[middle] > target) return binarySearch(array, target, start, middle - 1);

     // case - target value is greater than the middle value of the array
     if(array[middle] < target) return binarySearch(array, target,  middle + 1, end);
}

// const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
// console.log(binarySearch(arr, 'x'));