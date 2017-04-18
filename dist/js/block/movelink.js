function MoveLink(){
    this.underlined = document.querySelector('.header__menu-underlined-item');
    this.list = document.querySelector('.menu');
    this.list.addEventListener("click", this.handlerClick.bind(this));
    this.list.addEventListener("mouseover", this.handlerMouseOver.bind(this));
    this.list.addEventListener("mouseout", this.handlerMouseOut.bind(this));

    //this.underlined.style.transition = "0.3s left linear";
    this.underlined.style.transition = "0.3s transform linear";
}

MoveLink.prototype = Object.create(App.prototype);

MoveLink.prototype.handlerClick = function(e) {
    var target = e && e.target || e.srcElement;

    if(target.innerHTML == "Filter"){
        //this.underlined.style.left = "67px";
        this.underlined.style.transform = "translate(68px)";   // translate не перерисовывает страницу, а left перерисовывает
    }
    else if(target.innerHTML == "Boxes"){
        //this.underlined.style.left = "5px";
        this.underlined.style.transform = "translate(5px)";
    }
}

MoveLink.prototype.handlerMouseOver = function(e) {
    var target = e && e.target || e.srcElement;

    if(target.innerHTML == "Filter"){
        this.underlined.style.transform = "translate(68px)";
    }
    else if(target.innerHTML == "Boxes"){
        this.underlined.style.transform = "translate(5px)";
    }
}

MoveLink.prototype.handlerMouseOut = function(e) {
    var target = e && e.target || e.srcElement;

    if(target.innerHTML == "Filter"){
        this.underlined.style.transform = "translate(68px)";
    }
    else if(target.innerHTML == "Boxes"){
        this.underlined.style.transform = "translate(5px)";
    }
}

