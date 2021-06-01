// sidenav function
const hamburgerIcon = document.querySelector(".hamburger");
const sidePanel = document.querySelector(".sidenav");

hamburgerIcon.addEventListener("click", () => {
    sidePanel.classList.toggle("change");
});

// header appear/dissaper function
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
        document.querySelector(".header-img").style.top = "0";
        document.querySelector(".header-img").style.opacity =
            "1";
    } else {
        document.querySelector("header").style.top = "-210px";
        document.querySelector(".header-img").style.top = "-3em";
        document.querySelector(".header-img").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
};
// arrow function
var pointerLeft = document.querySelector(".arrow-left");
var pointerRight = document.querySelector(".arrow-right");
var imgGallery = document.querySelector(".gallery");

pointerLeft.addEventListener("click", function() {
    pointerLeft = imgGallery.scrollLeft -= 1627;
});

pointerRight.addEventListener("click", function() {
    pointerRight = imgGallery.scrollLeft += 1627;
});

// select elements
let galleryContent = document.querySelectorAll(".gallery-cell");
let getLastOpenImage;
let windowWidth = window.innerWidth;

galleryContent.forEach(function(image, index) {
    getLastOpenImage = index + 1;

    image.onclick = function() {
        // create new popup window
        let container = document.body; //select all elements in body
        let newImageWindow = document.createElement("div"); //create new window
        container.appendChild(newImageWindow);
        newImageWindow.setAttribute("class", "img-window");
        newImageWindow.setAttribute("onclick", "closeImg()");

        // create new div class named "popup-img" and id called "current-img"
        let newImg = image.firstElementChild.cloneNode();
        newImageWindow.appendChild(newImg);
        newImg.classList.remove("gallery-cell_img");
        newImg.classList.add("popup-img");
        newImg.setAttribute("id", "current-img");

        newImg.onload = function() {
            let newExitBtn = document.createElement("a");
            newExitBtn.innerHTML = '<i class="fas fa-times"></i>';
            container.appendChild(newExitBtn);
            newExitBtn.setAttribute("class", "img-btn-exit");
            newExitBtn.setAttribute("onclick", "closeImg()");
        };
    };
});

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-exit").remove();
};