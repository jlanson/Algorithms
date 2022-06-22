//Basic binary search
// While the 2 pointers dont touch keep halving the array till you find the number
// Edge case: when theres 2 numbers left in the array, since Im taking the ceil when dividing by 2
//          check if the left number in the array is the target valuee


let search = function(nums, target) {
    let start = 0;
    let end = nums.length;
    let mid;
    
    while(start + 1 < end){
        mid = Math.ceil((start + end) /2);
        
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] >= target ){
            end = mid;
        }else{
            start = mid;
        }
        
    }
    
    if(nums[start] === target){
        return start;
    }
    
    return -1;
};