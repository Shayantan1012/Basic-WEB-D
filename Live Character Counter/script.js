function countCharacters(){
    let text = document.getElementById("inputText").value;
    document.getElementById("charCount").innerText = "Characters typed: " + text.length ;
}