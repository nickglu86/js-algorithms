//Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.

//Solution 1 - with reduce
const cumulativeSumWithReduce = array => array.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);

//Solution 2 - without reduce 
export const cumulativeSum = array => {
      let sum = 0;
      for(let i = 0; i < array.length; i++){
            sum += array[i];
      }
      return sum;
}

//  console.log('sum wtih "cumulativeSumWithReduce": ', cumulativeSumWithReduce([1,3,5,7]));
//  console.log('sum wtih "cumulativeSum": ', cumulativeSum([1,3,5,7]));