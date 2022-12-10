function CardImage(url) {
    const cardImg = document.querySelector(".card-img")
    cardImg.innerHTML =`<img src="${url}" class="img" alt="cats image">`
}
export default CardImage