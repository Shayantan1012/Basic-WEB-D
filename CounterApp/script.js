let count = 0; 
function increment(){
    count++;
    document.getElementById("counter").innerText = "Count:" + count;
}
function decrement(){
    count--;
    if(count < 0){
        count = 0;
    }
    document.getElementById("counter").innerText = "Count:" + count;

}
function reset(){
    count = 0;
    document.getElementById("counter").innerText = "Count:" + count;
}

