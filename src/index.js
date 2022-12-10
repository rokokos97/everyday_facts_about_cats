import CardImage from "./cardImage";

const apiKey = "live_l3Oib3ZjeCo58hJbvdsa88gn3JwFLCn9ARg8rSAz8dQnaUcw5D1XVDFZ8PxrvHKh";
const apiUrl = "https://api.thecatapi.com/v1/images/search?"
const param = new URLSearchParams()
param.append("api_key",apiKey)
param.append("has_breeds","1")

const requestUrl = `${apiUrl}?${param}`

const btn = document.querySelector(".btn")
const sendRequest = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => data[0])
        .then((obj) => {
            CardImage(obj.url)
            console.log(obj);
        })
}
document.addEventListener("DOMContentLoaded", ()=>{
    sendRequest(requestUrl)
    btn.addEventListener("click", ()=>{
        sendRequest(requestUrl)
    })
})




