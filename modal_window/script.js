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


close.addEventListener("click" , _ => {
    // removing .show-popup from overlay and model--
    overlay.classList.remove("show-popup");
    model.classList.remove("show-popup");
});