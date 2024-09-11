window.addEventListener("load", function(){
document.querySelectorAll(".moving_background").forEach(function(moving_background){
   //getting the speed of the background scrolling from the dataset if possibble. 
   //1 = the background moves 1 vh per seconds
    let scroll_speed = 1;
    if(moving_background.hasAttribute("data-scroll_speed"))
     scroll_speed = parseFloat(moving_background.dataset.scroll_speed);

    function move_this(timeStamp)
    {
        moving_background.style.backgroundPositionY = (timeStamp / 1000.0  * scroll_speed)+"vh";
        window.requestAnimationFrame(move_this);
    }
   window.requestAnimationFrame(move_this);
});
});
