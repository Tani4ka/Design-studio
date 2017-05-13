function Gumburger(){
    this.menuWrap = document.querySelector('.menu-wrap');
    this.menuButton = document.querySelector('.button-icon');
    this.nav = document.querySelector('.naving');
    console.log(this.nav);
    this.menuButton.addEventListener("click", this.handler.bind(this));
}

Gumburger.prototype = Object.create(App.prototype);

Gumburger.prototype.handler = function() {
    console.log(window.getComputedStyle(this.nav).paddingBottom);
    //if(window.getComputedStyle(this.menuWrap).display == "none"){
    if(window.getComputedStyle(this.nav).paddingBottom == "0px"){
        this.nav.classList.add("js-naving");
    }
    else{
        this.nav.classList.remove("js-naving");
    }
}



