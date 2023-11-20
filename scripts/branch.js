import "./script.js";
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function (item) {
    const header = item.querySelector('.accordion-header');
    // var isRotated = false;

    header.addEventListener('click', function () {
    // Close on open 
    
        accordionItems.forEach(function (otherItem) {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');

                otherItem.children[1].children[1].style.transform = "rotate(0)";
            }
        });

        var arrow = item.children[1].children[1];
        // rotate arrow
        if (item.classList.contains('active')){
            arrow.style.transform = "rotate(0)";
        }
        else{
            arrow.style.transform = "rotate(180deg)";
            arrow.style.transition = ".2s ease";
        }
        
        // open
        item.classList.toggle('active');
    });
});

document.getElementById('back_btn').addEventListener('click', function() {
    window.history.back();
  });

  