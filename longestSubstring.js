// Problem is find the longest substring within a string that doesnt have repeated characters

// My first solution (I had the right idea)
// Basically I have two pointers, one to keep track of the start of the subtring one to keep track of the end
// I keep the chars I have visited within an array
// If I see a character I have visted before I move up the start pointer until I'm past the position of the previous instance of that char
// else I keep increasing the end of the substring

// I had the right approach but there are more convenient ways to do it in js and I should have used a "hashmap"
// JS doesnt have an explicit hashmap but we can just create a simple object
var lengthOfLongestSubstring = function(s) {
    let used = [];
    let start = 0;
    let end = 0;
    
    let record = 0;
    let found = 0;
    
    while(end !== s.length){
        
        if(used.includes(s[end])){  
            while(!found){
                if(used.shift() === s[end]){
                    found = 1;
                }
                start++; 
            }
   
        }
        found = 0;
        used.push(s[end]);
        end++; 
        
        if(end - start > record){
            record = end - start;
        }
        console.log(used);
        console.log(s[end]);
        console.log(start,end);
    } 

    return record;
};

// Clean js solution

let LongestSubstringTwo  = function(s){
    let used = {};
    let start = 0;
    
    return s.split('').reduce((max, current, i) =>{
        start = used[current] >= start ? used[current] + 1: start;
        used[current] = i;
        return Math.max(max, i - start +1);
    },0);
}
