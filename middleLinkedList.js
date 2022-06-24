// Algorithm to find the middle of a linkelist


//Basically the strategy is to have one pointer that goes twice the speed of the other
// If the faster pointer becomes null or the next one is null then youve reached the end 
let middleLinkedList = function(head){
    let p1 = head;
    let p2 = head;


    while(p1 && p1.next){
        p1 = p1.next.next;
        p2 = p2.next;
    }

    return p2;
}