function changeColor(color){
    let body = document.body;
    body.classList.remove("body_red", "body_blue", "body_green");
    if(color==="red"){
        body.classList.toggle("body_red")
    }
    else if(color==="blue"){
        body.classList.toggle("body_blue")
    }
    else if(color==="green"){
        body.classList.toggle("body_green")
    }
}