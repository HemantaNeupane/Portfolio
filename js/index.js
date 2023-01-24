hamburger = document.querySelector(".hamburger")
if (hamburger){
    hamburger.addEventListener("click",((e)=>{
        document.querySelector(".nav-links").classList.toggle("hidden");
    }));
}