//This problem entails moving a number to the beginning or end of an array
// Bascially you want to iterate through the array once picking up all the zeros along the way
// As you iterate through you note the size of the # of zeros
// You then swap a non-zero number with the size of your snowball essentially

let moveZeroes = function(nums) {
    
    let snowBallSize = 0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            snowBallSize++;
        }else{
            let t = nums[i];
            if(snowBallSize > 0){
                nums[i-snowBallSize] = t;
                nums[i] = 0;
            }
        }
    }
};