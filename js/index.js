hamburger = document.querySelector(".hamburger")
c_page = document.querySelector(".current-page").textContent;

function togglenav(){
    document.querySelector(".nav-links").classList.toggle("hidden");
}

if (hamburger){
    hamburger.addEventListener("click",togglenav);
}

if (c_page){
    document.querySelector(".navigation-header-text").textContent = c_page;
}

nav_links = document.querySelector(".nav-links").classList.add("hidden")


document.getElementById("content").addEventListener("click",e=>{
    if (!document.querySelector(".nav-links").classList.contains("hidden")){
        togglenav()
    }
})



