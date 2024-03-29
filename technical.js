document.addEventListener("DOMContentLoaded", function () {


    //setting the z-index of the rows to reverse order to make the drop shadow on each other

    const shadows = document.querySelectorAll(".technical .shadow");
    const length = shadows.length;
    for (n = 0; n < length; n++) {
        shadows[n].style.zIndex = length - n;
    }


    //making the sections visible or invisible when they are above or below a certain part of the screen

    const visible_from = 70;//the sections become visible when their top is at "visible_from"vh distance from the top of the window
    const visible_from_bottom = 100;
    
    const sections = document.querySelectorAll(".scroll_animation");  

    function change_visibility() {
        sections.forEach(section => {
            const bottom = section.classList.contains("bottom");
          if(!bottom&& px_to_vh(section.getBoundingClientRect().top) < visible_from || bottom && px_to_vh(section.getBoundingClientRect().bottom) < visible_from_bottom)
          section.classList.add("visible");
          else
          section.classList.remove("visible");
        });
    }

    function px_to_vh(px)
    {
       return 100 * px / window.innerHeight ;
    }

    window.addEventListener("scroll", function () {
        window.requestAnimationFrame(change_visibility);
    });

});