const box = document.querySelector(".box");
function drag(e){
   x= e.clientX;
    y= e.clientY;
    box.style.width = x + "px";
    box.style.height = y + "px";
}
box.addEventListener("mousedown", () => {
  box.addEventListener("mousemove", drag);
});
