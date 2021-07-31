const icon = document.querySelector(".icon");
const input = document.getElementById("input");
const icon1 = document.querySelector(".icon1");
const container = document.querySelector(".container")

icon.addEventListener("click", (e)=>{
    if (!input.value == ""){
        disappear();
        window.location.href = "https://www.google.com/search?q=" + input.value;
    };
    container.classList.toggle("active");
    e.preventDefault();
})

icon1.addEventListener("click", ()=>{
    input.value = "";
})

function disappear(){
    container.remove();
}