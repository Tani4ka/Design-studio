function Filter(){
    this.main = document.querySelector('.js-main');
    this.category01 = document.querySelector('.js-category01');
    this.category02 = document.querySelector('.js-category02');
    this.filter01 = document.querySelector('.filter_first');
    this.filter02 = document.querySelector('.filter_second');
    //console.log(this.main);

    this.category01.addEventListener("click", this.handler01.bind(this));
    this.category02.addEventListener("click", this.handler02.bind(this));

    //this.filterHeight = this.filter01.clientHeight;
    //this.filterHeightt = this.filter01.getBoundingClientRect();
    //console.log(this.filterHeight);
    //this.filter02.style.cssText = "height: "+this.filterHeight+"px;"
    //console.log(this.filter02.clientHeight);
}

Filter.prototype = Object.create(App.prototype);

Filter.prototype.handler01 = function() {
    this.category02.classList.remove("js-button_active");
    this.category01.classList.add("js-button_active");

    this.filter02.style.zIndex = "1";
    this.filter01.style.zIndex = "2";

    this.filter01.classList.add("js-filter_padding1");
    this.main.classList.remove("js-filter_padding2");
}

Filter.prototype.handler02 = function() {
    this.category01.classList.remove("js-button_active");
    this.category02.classList.add("js-button_active");

    this.filter01.style.zIndex = "1";
    this.filter02.style.zIndex = "2";

    this.filter01.classList.remove("js-filter_padding1");
    this.main.classList.add("js-filter_padding2");
}

