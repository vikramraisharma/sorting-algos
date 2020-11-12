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

function insertionSort(array) {
    // Write your code here.
      // iterate through the array
      for(let i = 1; i < array.length; i++){
          // set j to the current starting index (i)
          let j = i;
          // use swap func to ensure that array[j] is the lower value
          while (j > 0 && array[j] < array[j-1]){
              swap(j, j-1, array)
              // this normalizes the difference between i and j
              j -= 1;
          }
      }
      return array
  }
  
  // swapping the values directly in the array instead of just swapping the indeces
  function swap(i, j, array){
      const temp = array[j]
      array[j] = array[i]
      array[i] = temp
  }
  
 
 os.remove(text.name)
