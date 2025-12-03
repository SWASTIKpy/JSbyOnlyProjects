const qCon = document.querySelector("#quoteDisplay")
const btn = document.querySelector("#genQ")

// btn.addEventListener('click', () => {
//     // can use promise then chaining or use await dont use both it can be bad will use promise as woh samjh nhi aaya abhi
//     fetch("https://dummyjson.com/quotes/random") // fetch quotes
//     // .json convert response object to apna use wala object for js unpacking basically
//     .then(res => res.json()) // convert it to json 
//     .then(data => {
//         const p = document.createElement('p')
//         p.classList.add("quote-para")
//         p.textContent = `${data.quote} - ${data.author}`
//         qCon.appendChild(p)
// })
// .catch(err => console.error("tu quote dekhta hoga laadle ham toh error dikhate:",err))

// })

btn.addEventListener('click', async () => {
        try{
            const res = await fetch("https://dummyjson.com/quotes/random") // fetch quotes
    // .json convert response object to apna use wala object for js unpacking basically
    
    const data = await res.json();
    const p = document.createElement('p')
    p.classList.add("quote-para")
    p.textContent = `${data.quote} - ${data.author}`
    qCon.appendChild(p)
} catch(err) {
    console.log("error to dekhte jaao:" , err)
}
}) //.catch(err => console.log("error to dekhte jaao:" , err)) this wont work evelistener doesnt return a promise