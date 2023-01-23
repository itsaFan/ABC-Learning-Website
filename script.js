var navbar = document.getElementById("eznavbar")
var tesmenu = document.getElementById("tesmenu")

window.onscroll = function(){
if(window.pageYOffset >= menu.offsetTop){
    eznavbar.classList.add("sticky");
}
else {
    eznavbar.classList.remove("sticky");
}
}