/*

THIS FILE CONTAINS FUNCTIONALITY FOR PRELOADER AND FADE-IN EFFECT ONLY

*/


// ============ Variables =============
var observer = new IntersectionObserver(IfSeen, {threshold: [0]});
var elements = document.querySelectorAll('.fade-in');

// ============ Functions =============
// smooth fade-in transition for .fade-in class elements
function IfSeen(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show'); // adds class show for the item that appeared on the screen (.fade-in class)
      }
      else{
        change.target.classList.remove("show"); // removes the show class if item exit the viewport
      }
    });
  }

export function change_overflow_on_load(){
  document.getElementById("preloader").style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "scroll";
}

// =========== Handlers and executions ===========
window.addEventListener("load", change_overflow_on_load);

// fade-in effect show each visible element
for (var elm of elements) {
  observer.observe(elm);
}