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
});