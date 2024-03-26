document.addEventListener("DOMContentLoaded", function () {


    //adjusting the style of the images wid the class "keep_in_box" to keep them in the box of their parent element
    const keep_in_boxes = document.querySelectorAll(".keep_in_box");
    function keep_images_in_boxes() {

        keep_in_boxes.forEach(keep_in_box => {

            const my_width_in_percent = keep_in_box.clientWidth / keep_in_box.parentElement.clientWidth * 100.0;
            if (my_width_in_percent > 100) {
                keep_in_box.style.width = "100%";
                keep_in_box.style.height = "auto";

            }

            const my_height_in_percent = keep_in_box.clientHeight / keep_in_box.parentElement.clientHeight * 100.0;
            if (my_height_in_percent > 100) {
                keep_in_box.style.width = "auto";
                keep_in_box.style.height = "100%";
            }
        });

    }
    window.addEventListener("resize", keep_images_in_boxes);
    keep_images_in_boxes();//this and the other void dont gets called on load in the VS preview



    //copying the size of the root_image to the copy_image_size within each container.
    //this is necessary because html elements cannot be placed at images
    //these functions are often executed in bad order, or not executed at all in the VS preview
    document.querySelectorAll(".portfolio .container").forEach(container => {
        const my_root_image = container.querySelector(".root_image");
        const my_copy_image_size = container.querySelector(".copy_image_size");

        function copy_size() {
            const style = getComputedStyle(my_root_image);
            my_copy_image_size.style.width = style.width;
            my_copy_image_size.style.height = style.height;
        }
        //this function delays the copy_size by one frame
        //this is necessary because copy_size must be executed after keep_images_in_boxes and they are on the same events
        function copy_size_delayed() {
            window.requestAnimationFrame(copy_size);
        }
        window.addEventListener("resize", copy_size_delayed);
        copy_size_delayed();
    });


    //handling the scrolling animations of the sticky_divs
    const distance_per_step = 70; //the next animation step will be activated after this much scrolling in vh
    const sticky_divs = document.querySelectorAll(".portfolio .sticky");

    sticky_divs.forEach(sticky_div => {
        //getting the number of the animation keyframes from the custom data "animation_steps"
        const my_steps = parseInt(sticky_div.dataset.animation_steps);
        sticky_div.parentElement.style.height = distance_per_step * my_steps + "vh";

        function update_animations() {
            const style = getComputedStyle(sticky_div);
            //if the sticky div is on the top, my_progress is 0
            //if it is on the bottom, my_progress is 1
            const my_top = (parseFloat(sticky_div.offsetTop) - parseFloat(sticky_div.parentElement.offsetTop));
            const movement_interval = parseFloat(sticky_div.parentElement.clientHeight) - parseFloat(style.height);
            const my_progress = my_top / movement_interval;
            let my_step = Math.floor(my_progress * my_steps);
            if (my_step >= my_steps)
                my_step = my_steps - 1;
            sticky_div.dataset.step = my_step;
            //adding a dataset variable to each keyframe to make the css selectors simpler
            //if my_step is 2, then step0, step1 and step2 custom data will be true, the others are false
            for (n = 0; n < my_steps; n++)
                sticky_div.setAttribute("data-step" + n, my_step >= n);

            //the menu buttons are visible or not
            sticky_div.setAttribute("data-active", my_progress > 0 && my_progress < 1);
        }
        window.addEventListener("scroll", update_animations);
        update_animations();
    });


    //automatically scrolling the selected elements based on their "scroll_target" custom css value 
    //this isn't real scrolling, this function adjusts the bottom value of the element
    //position:relative is necessary to work
    const targets = document.querySelectorAll(".auto_scroll");
    function update_scrolling() {
        targets.forEach(target => {
            //0 = scroll to the top, 1 = scroll to the bottom
            const scroll_target = parseFloat(getComputedStyle(target).getPropertyValue("--scroll_target"));
            //the scrolling is instant and must be handled by css transitions
            const movement_interval = parseFloat(target.clientHeight) - parseFloat(target.parentElement.clientHeight);
            target.style.bottom = movement_interval * scroll_target + "px";
        });
        window.requestAnimationFrame(update_scrolling);
    }
    update_scrolling();

});

