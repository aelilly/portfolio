(function() {
    'use strict'
    const menu = document.getElementById("menu");
    const closeButton = document.querySelector("#close");
    const openButton = document.querySelector("h1");
    closeButton.addEventListener("click", () => menu.style.display = "none"); 
    openButton.addEventListener("click", () => menu.style.display = "block"); 

    console.log('main.js loaded');
    console.log(menu);

}())