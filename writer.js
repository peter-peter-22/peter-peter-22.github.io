document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".typing").forEach(el=>{
    const length = el.innerHTML.length;
    el.style.setProperty("width", length+"ch");
    el.style.setProperty("--steps", length);
});
});