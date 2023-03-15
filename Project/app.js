var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
    console.log('I am done')
})