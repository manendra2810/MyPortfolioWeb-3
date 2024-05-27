const activeButton = document.querySelector(".header_main-ham-menu");
const closeButton = document.querySelector(".header_main-ham-menu-cross");
const navItem = document.querySelector(".header_sm-menu");

activeButton.addEventListener("click", ()=>{
    activeButton.classList.add("close-pannel");
    activeButton.classList.remove("active-pannel");
    closeButton.classList.add("active-pannel");
    closeButton.classList.remove("close-pannel");

    navItem.classList.add("active-pannel");
    navItem.classList.remove("close-pannel");

});

closeButton.addEventListener("click", ()=>{
    closeButton.classList.add("close-pannel");
    closeButton.classList.remove("active-pannel");
    activeButton.classList.add("active-pannel"); 
    activeButton.classList.remove("close-pannel");

    navItem.classList.add("close-pannel");
    navItem.classList.remove("active-pannel");
});

