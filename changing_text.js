document.addEventListener("DOMContentLoaded", function () {

    //shared constants
    const fade_in_time = 700;
    const stay_time = 1500;
    const fade_out_time = 500;
    const fade_in_name = "row_start";//must be the same as CSS
    const fade_out_name = "row_end";
    const letter_anim = "letter_movement";//the letter animation has the same duration as the fade_in animation
    const delay_per_letter = 30;
    const active_row_class = "active";

    //getting the movingtext elements
    //mupltiple moving texts are supported
    document.querySelectorAll(".moving_text").forEach(function (moving_text) {

        //getting all rows of the movingtext
        const rows = moving_text.querySelectorAll(".row");

        //adding values and events to the rows
        rows.forEach(row => {

            //adding the animation delay to each letter of the moving text rows
            const letters = row.querySelectorAll("*");
            for (n = 0; n < letters.length; n++) {
                const letter = letters[n];
                letter.style.animation = letter_anim + " " + fade_in_time + "ms ease-in-out";
                letter.style.animationDelay = n * delay_per_letter + "ms";
                //the animation of the letters is added like this to set them the same duration as the fade-in animation
            }

            //restarting the animation of each letter when the fade_in animation starts
            row.addEventListener("animationstart", function (event) {
                if (event.animationName == fade_in_name)
                    letters.forEach(letter => {
                        restart_animation(letter);
                    });
            });

        });



        //controlling the animations
        let current_step = 0;
        let selected_row_index = 0;
        let selected_row;
        function process_step() {
            switch (current_step) {
                case 0://the selected row starts the fade-in animation and forms the background
                    selected_row = rows[selected_row_index];
                    //making the selected row visible
                    selected_row.classList.add(active_row_class);
                    //forming the parent according to the style of the selected row
                    const style = getComputedStyle(selected_row);
                    moving_text.style.width = style.width;
                    moving_text.style.backgroundColor = style.borderColor;//the border color decides the background color of the div
                    //starting the animation
                    selected_row.style.animation = fade_in_name + " " + fade_in_time + "ms ease-in-out";
                    //the end of the animation must be checked with timeout instead of the event because the event dont works when the window is hidden
                    setTimeout(function () {
                        next_step();
                    }, fade_in_time);
                    break;

                case 1://when the selected row competed the fade-in animation, the selected row waits
                    setTimeout(function () {
                        next_step();
                    }, stay_time);
                    break;

                case 2://when the waiting is over, the selected row starts the fading out animation, and the next row starts appearing
                    selected_row.style.animation = fade_out_name + " " + fade_out_time + "ms ease-in-out forwards";
                    //when the fade-out animation is over, make the row invisible
                    const selected_row_memorized = selected_row;
                    setTimeout(function () {
                        selected_row_memorized.classList.remove(active_row_class);
                    }, fade_out_time);
                    //choosing the index of next row
                    selected_row_index++;
                    if (selected_row_index >= rows.length)
                        selected_row_index = 0;
                    //restarting the sequence
                    current_step = 0;
                    process_step();
                    break;
            }
        }
        process_step();//the first animation will not start itself

        function next_step() {//starting the next step of the animation sequence
            current_step++;
            process_step();
        }

    });

    function restart_animation(element) {
        element.style.animationName = "";
        void element.offsetWidth;
        element.style.animationName = letter_anim;
    }

});