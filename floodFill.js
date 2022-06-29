
// My BFS solution
let floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] === color){
        return image;
    }
    
    let oldColor = image[sr][sc];
    let queue = [];
    queue.push([sr,sc]);
    let r = 0;
    let c = 0;
    while(queue.length !== 0){
        
        image[queue[0][0]][queue[0][1]] = color;
        r = queue[0][0];
        c = queue[0][1];
        
        for(let  i = -1; i <= 1; i++ ){
            if(r + i < 0 ||r + i> image.length -1 || i === 0){
                continue;
            }else{
                if(image[r+i][c] === oldColor ){
                    queue.push([r+i,c]);
                }
            }
        }
        for(let  i = -1; i <= 1; i++ ){
            if(c+i < 0 || c+i > image[0].length -1 || i === 0){
                continue;
            }else{
                if(image[r][c+i] === oldColor ){
                    queue.push([r,c+i]);
                }
            }
        }
        queue.shift();
    }
    return image;
};

//DFS solution
let floodFilldfs = function(image, sr, sc, color){
    if(image[sr][sc] === color){
        return image;
    }

    fill(image, sr, sc, color);
    return image;
}

function fill(image, r, c, color){
    if(r < 0 || r > image.length -1 || c < 0 || c > image[0].length -1 || image[r][c] != color){
        return;
    }

    image[r][c] = color;
    fill(image, r-1, c, color);
    fill(image, r+1, c, color);
    fill(image, r, c-1, color);
    fill(image, r, c+1, color);
}

