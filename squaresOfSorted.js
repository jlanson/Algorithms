// A two pointer algorithm problem 
// Basically you take advantage of the fact that an order array squared will be order such that
// Highest -> lowest -> highest
// In this case we can use 2 opposite direction pointers to place stuff in the resultant array


// There is also a js unique solution here where you can use .sort in order to sort the squared array
// by inputting the function a-b, it will order the array in ascending order 

let sortedSquares = function(nums){
    let arr = [];

    nums.forEach(a => arr.push(a**2));
    return arr.sort((a,b) => a-b);
}

let twoPointerSortedSquares = function(nums){
    let start = 0;
    let end = nums.length -1;
    let pointer = end;
    let arr = [];

    while(start < end ){
        if(nums[start]**2  > nums[end] ** 2){
            arr[pointer] = nums[start]**2;
            pointer--;
            start++;
        }else{
            arr[pointer] = nums[end]**2;
            pointer--;
            end--;
        }
    }
    return arr;
}