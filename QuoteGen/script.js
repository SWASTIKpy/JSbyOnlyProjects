const qCon = document.querySelector("#quoteDisplay")
const btn = document.querySelector("#genQ")

btn.addEventListener('click', () => {
    fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random").then(res => {
        console.log(res)
    })
})