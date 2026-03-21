let slide = document.querySelectorAll(".slider img");
let idx = 0;
images = [
    "Images/img1.jpeg",
    "Images/img2.jpeg",
    "Images/img3.jpeg",
    "Images/img4.jpeg",
    "Images/img5.jpeg",
    "Images/img6.jpeg",
    "Images/img7.jpeg",
    "Images/img8.jpeg",
    "Images/img9.jpeg",
    "Images/img10.jpeg",
    "Images/img11.jpeg",
    "Images/img12.jpeg",
    "Images/img13.jpeg",
    "Images/img14.jpeg",
]
setInterval(() => {
        slide[0].src =  images[idx % images.length];
        slide[1].src =  images[(idx + 1) % images.length];
        slide[2].src =  images[(idx + 2) % images.length];
        idx++;
}, 3000);

function showNext(){
    idx++;
    slide[0].src =  images[idx % images.length];
    slide[1].src =  images[(idx + 1) % images.length];
    slide[2].src =  images[(idx + 2) % images.length];
    
}
function showPrev(){
    idx--;
    slide[0].src =  images[(idx - 2 + images.length) % images.length];
    slide[1].src =  images[(idx - 1 + images.length) % images.length];
    slide[2].src =  images[idx % images.length];
    
}

let slider = document.querySelector(".slider")

slider.addEventListener("dragstart", e => e.preventDefault());


let startX = 0;
let endX = 0;
let startY = 0;
let endY = 0;

slider.addEventListener("mousedown", (e) =>{
    startX = e.clientX;
    startY = e.clientY;
})

slider.addEventListener("mouseup", (e) =>{
    endX = e.clientX;
    endY = e.clientY;
    handelSwipe();
})

slider.addEventListener("touchstart", (e) =>{
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
})

slider.addEventListener("touchend", (e) =>{
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handelSwipe();
}
)


function handelSwipe(){
    let diffX = startX - endX;
    let diffY = startY - endY;
    if(Math.abs(diffX) > Math.abs(diffY)){
        if(diffX > 50){
            showNext();
        }
        else if(diffX < -50){
            showPrev();
        }
    }
}

