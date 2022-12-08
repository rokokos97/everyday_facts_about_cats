const apiKey = "live_l3Oib3ZjeCo58hJbvdsa88gn3JwFLCn9ARg8rSAz8dQnaUcw5D1XVDFZ8PxrvHKh";
const apiUrl = "https://api.thecatapi.com/v1/images/search?"
const param = new URLSearchParams()
param.append("api_key",apiKey)
param.append("has_breeds","1")
const requestUrl = `${apiUrl}?${param}`

document.addEventListener("DOMContentLoaded", sendRequestImg)
function sendRequestImg(){
    const request = fetch(`${requestUrl}`)
    request
        .then((response=>response.json()))
        .then((data)=> {
            if(data){
                sendRequestCatInfo(data)
                return showCatImage(data)
            }
        })
}
function showCatImage(obj) {
    console.log(obj[0].id);
    catImgContainer.innerHTML =`<img src="${obj[0].url}" class="img" alt="cats image">`
}
function sendRequestCatInfo(obj) {
    const catObj = fetch(`https://api.thecatapi.com/v1/images/${obj[0].id}`)
    catObj
        .then((response)=>response.json())
        .then((data)=> {
            showCatInfo(data)
        })
}
function showCatInfo(obj) {
    const catsInfo = obj.breeds[0]
    cardTitleHeader.innerHTML=`${catsInfo.name}`
    cardTitleDescription.innerHTML=`${catsInfo.description}`
    cardCharacteristics.innerHTML=`
         <p class="card-characteristics-item">Alternative Name: ${catsInfo.alt_names}</p>
         <p class="card-characteristics-item">Originally from: ${catsInfo.origin}</p>
         <p class="card-characteristics-item">Temperament: ${catsInfo.temperament}</p>
         <p class="card-characteristics-item">Weight: ${catsInfo.weight.metric} kg</p>
         <p class="card-characteristics-item">Life span: ${catsInfo.life_span} year</p>
`
}



const cardTitleHeader = document.querySelector(".card-title-header")
const cardTitleDescription = document.querySelector(".card-title-description")
const catImgContainer = document.querySelector(".card-img")
const btn = document.querySelector(".btn")
const cardCharacteristics=document.querySelector(".card-characteristics")


btn.addEventListener("click", sendRequestImg)


