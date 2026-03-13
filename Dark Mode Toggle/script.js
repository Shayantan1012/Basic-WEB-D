function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
    let btn = document.getElementById("toggleButton");
    if(document.body.classList.contains("dark-mode")){
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
}