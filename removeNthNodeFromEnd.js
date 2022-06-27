// A problem where you remove the nth node from the back of a singly linked list
// Solution I found was to have 2 nodes to calculate the distance from end
// 3rd node lagging behind the 2nd to connect


let removeNthNode = function(head, n){
    let p1 = head;
    let p2 = null;
    let p3 = null;
    let counter = 0;

    while(p1){
        p1 = p1.next;
        counter++;

        if(p2){
            p2 = p2.next;
        }

        if(p3){
            p3 = p3.next;
        }

        if(counter === n){
            p2 = head;
        }
        
        if(counter === n+1){
            p3 = head;
        }
    }

    if(p2 === head){
        head = head.next;
    }else{
        p3.next = p2.next;
    }



}