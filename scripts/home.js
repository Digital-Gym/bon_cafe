/*

THIS FILE CONTAINS FUNCTIONALITY FOR index.html page (aka home page)
    - slider
    - background change
    - form handle
*/

// ============ Imports =============
import "./script.js";
import {change_overflow_on_load} from './script.js';
// =========== Background change ==============
document.addEventListener("DOMContentLoaded", function () {
    var backgrounds = ["url('../img/back_3.jpg')",
    "url('../img/back_4.jpg')",
    "url('../img/back_5.jpg')",
    "url('../img/back_6.jpg')"
  ];
    var index = 0;
    var backgroundElement = document.getElementById("branches");
  
    function changeBackground() {
      backgroundElement.style.backgroundImage = backgrounds[index];
      index = (index + 1) % backgrounds.length;
    }
  
    changeBackground();
    setInterval(changeBackground, 4500);
  });
  
  
// =========== HANDLE FORMS ==============
document.addEventListener("submit", function(event){
  event.preventDefault();

  // validate form using regular expr.
      // matches any digit or non world character (not in a-z)
  if (/[\d\W]/.test(document.getElementById("user_name").value)){
    window.alert("Your name can contain only letters (no spaces and special characters)");
    return;
  }

  // fade - in
  var alert = document.getElementById("thx_alert");
  alert.classList.add("show");

  // clear fields
  document.getElementById("user_name").value = "";
  document.getElementById("user_text").value = "";
  document.body.style.overflow = "hidden";
  // fade - out
  function delete_item(){
      alert.classList.add("hide");
      alert.addEventListener("transitionend", function(){
      alert.classList.remove("show");
      alert.classList.remove("hide");
      }, { once: true });
      change_overflow_on_load();
  }
  setTimeout(delete_item, 2500);
});

// =============== SLIDER ================ 
// slider variables
let isAutoPlay = true, timeoutId;
const wrapper = document.querySelector(".slider_container");
const slider = document.querySelector(".slider");
const firstCardWidth = slider.querySelector(".meal_type").offsetWidth;
const sliderChildrens = [...slider.children];

sliderChildrens.slice(-1).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin", card.outerHTML);
});
sliderChildrens.slice(0, 1).forEach(card => {
  slider.insertAdjacentHTML("beforeend", card.outerHTML);
});


//              functions of slider
// scroll function
function infiniteScroll(){
    // infinite simulation (left)
    if(slider.scrollLeft === 0) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
        slider.classList.remove("no-transition");
    }
    // infinite simulation (right)
    else if(Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove("no-transition");
    }
    // clear time-out
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
  }
  
  function autoPlay(){
    if(!isAutoPlay) return; // leave the func if no need to autoplay
    timeoutId = setTimeout(() => slider.scrollLeft += firstCardWidth, 3000);
  }

// execute slider
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
slider.addEventListener("scroll", infiniteScroll);
// start autoplay
autoPlay();