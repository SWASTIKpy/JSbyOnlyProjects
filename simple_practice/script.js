const btn = document.querySelector("#btn");
const heading = document.querySelector(".heading")

btn.addEventListener('click' , (e) => {
    heading.style.color = 'purple'
    heading.style.fontSize = "50px"
    console.log(e)});