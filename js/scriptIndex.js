
const like = document.querySelectorAll(".bi-heart");
var liked = false


like.forEach( elemento => {
    elemento.addEventListener('click',()=>{
        if (!liked) {
            elemento.classList.remove("bi-heart");
            elemento.classList.add("bi-heart-fill");
            liked = !liked;
        } else {
            elemento.classList.remove("bi-heart-fill");
            elemento.classList.add("bi-heart");
            liked = !liked;
        }
    })
})
