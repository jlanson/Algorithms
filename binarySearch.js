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