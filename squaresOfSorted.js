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