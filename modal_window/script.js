"use strict";


// get elements-----------
const openModelBtns = document.querySelectorAll("nav ul li"),
overlay = document.querySelector(".overlay"),
model = document.querySelector(".model-box"),
modelTitle = document.querySelector(".model-box h2"),
close = document.querySelector(".close");




openModelBtns.forEach(btn => {
    // assign click event to btns
    btn.addEventListener("click" , () => {
        // adding .show-popup to overlay and model--
        overlay.classList.add("show-popup");
        model.classList.add("show-popup");

        // set the modelTitle----
        modelTitle.textContent = `i'm a modal window (${btn.dataset.id})`;
    });
});



// close the model with overlay----
const hideModel = () => {
    // removing .show-popup from overlay and model--
    overlay.classList.remove("show-popup");
    model.classList.remove("show-popup");
}

// when click on the close icon
close.addEventListener("click" , _ => hideModel());
// when click out side model
overlay.addEventListener("click" , () => hideModel());


// when click on esc key---
document.addEventListener("keydown" , event => {
    if (event.key === "Escape") hideModel();
});
