
const nums = [9,1,8,2,7,3,6,4]
/*  
    Selection sort works by working through the
    given array as if it were two sub-arrays. 
    The first sub-array starts with a length of 0,
    and it represents the sorted values in the array.
    The second subarray starts with length array.length
    and represents the unsorted values in the array.
*/

function selectionSort(array) {
    // iterate through the entire array to begin the sort
      for(let i = 0; i < array.length; i++){
          // set the starting index of your SECOND subarray
          let start = 0;
          // continue this operation until start approaches the LAST array value's index
          while(start < array.length - 1){
              // declare min to determine which value is the smallest
              let min = start;
              // iterate through the array from start to the last value
              for(let i = start; i < array.length; i++){
                  // if the value approached is greater than the current, set min to the current index
                  if(array[min] > array[i]) min = i;
              }
              // see helper function below, swap the min val with starting val in unsorted subarray
              swap(start, min, array);
              // increment start to increase the size of the sorted array, and decrease the size of the unsorted subarray
              start++
          }
          return array
    }
  }

  /* 
    swap is a helper function written to swap the minimum
    value of the unsorted array with the starting value of the 
    unsorted subarray.
  */
  function swap(x, y, array){
      let temp = array[y];
      array[y] = array[x];
      array[x] = temp;
  }

  console.log(selectionSort(nums))

  
