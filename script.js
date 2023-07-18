

window.addEventListener("scroll", function(){
    let navbar = document.getElementById("stic");
    if(this.window.pageYOffset >= 84){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
})