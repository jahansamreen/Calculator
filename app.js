const query = document.querySelector(".query")
const result = document.querySelector(".result")
const keys = document.querySelectorAll("button")

keys.forEach(key => {
    key.addEventListener("click",calculate)
})

function calculate(){
    let buttonText = this.innerText;
    // console.log(buttonText);
    if (buttonText == "AC") {
        query.innerHTML = "";
        result.innerHTML = 0;
        result.style.animation = ""
        query.style.animation = ""
        return;
    }
    if (buttonText == "DEL") {
        query.textContent = query.textContent.substr(0, query.textContent.length - 1);
        return;
    }
    if (buttonText == "=") {
        result.innerText = eval(query.innerText);
        result.style.animation = "big 0.5s ease-in-out"
        query.style.animation = "small 0.5s ease-in-out"
        result.style.animationFillMode = "forwards"
        query.style.animationFillMode = "forwards"
    }
    else {
        query.textContent += buttonText;
        return;
    }
    
}