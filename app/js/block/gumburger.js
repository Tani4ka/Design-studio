function Gumburger(){
    this.menu = document.querySelector('.menu-wrap-sm');
    this.menuButton = document.querySelector('.button-icon');
    console.log(this.menu);
    console.log(this.menuButton);
    this.menuButton.addEventListener("click", this.handler.bind(this));
}

Gumburger.prototype = Object.create(App.prototype);

Gumburger.prototype.handler = function() {
    console.log("done");
    this.menu.style.display = "block";
}



