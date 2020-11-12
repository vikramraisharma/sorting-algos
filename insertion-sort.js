const nums = [1,9,2,8,3,7,4,6]
/*
    Insertion sort is similar to selection sort in the way
    that it theoretically begins by separating the array nums
    into two subarrays. The first is of length 1 and it represents
    the sorted array. The second is of length nums.length -1 and
    it represents the unsorted values. The sort works by iterating
    through the unsorted array, inserting a value into the sorted subarray,
    and ensuring it is in the right numerical order.
*/

function insertionSort(array){
    // iterate through nums
      for(let i = 1; i < array.length; i++){
          // set j to previous index, used to compare values
          let j = i - 1;
          // iterate through the subarray for each value
          // determine if the previous values are > the current
          while(j >= 0 && array[j] > array[i]){
              // use j to order the values in the sorted subarray
              array[j + 1] = array[j];
              j = j -1;
          }
          // put the value in its new place in the sorted subarray
          array[j + 1] = array[i]
      }
      return array
  }
  /*
    No swap function is needed here, because we can work with j
    which is an index placeholder that changes based on its order
    in the sorted subarray.
  */
  console.log(insertionSort(nums));