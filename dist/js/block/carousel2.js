function Carousel2(){
    this.wrapper = document.querySelector('.carousel2__wrapper');
    this.left = document.getElementById('carousel2__left');
    this.right = document.getElementById('carousel2__right');
    this.node = document.querySelector('.carousel2__slide_active');
    this.carouselSlide = document.querySelectorAll('.carousel2__slide');
    this.slidefirst = this.wrapper.firstElementChild;
    this.widthCarouselSlide = -(parseInt(getComputedStyle(this.slidefirst).width));   // 323
    this.count = this.wrapper.children.length;                                        // 5
    this.limit = -(this.widthCarouselSlide * (this.count - 2));                       // 1292
    this.limitPrev = parseInt(getComputedStyle(this.slidefirst).left) + (-this.widthCarouselSlide); // 0
    this.translateX = 150;
    this.translateZ = 100;
    this.rotateY = 10;

    if(this.node.nextElementSibling) {
        this.node.nextElementSibling.style.cssText = "background-image: url(img/proalltech2.png); " +
            "transform: translate3d(" + (-this.translateX) + "px, 0px, " + (-this.translateZ) + "px) rotateX(0deg) " +
            "rotateY(" + (-this.rotateY) + "deg); z-index: 1; transition-duration: 0ms;"
    }

    if(this.node.previousElementSibling) {
        this.node.previousElementSibling.style.cssText = "background-image: url(img/fought2.png); " +
            "transform: translate3d(" + this.translateX + "px, 0px, " + (-this.translateZ) + "px) rotateX(0deg) " +
            "rotateY(" + this.rotateY + "deg); z-index: 1; transition-duration: 0ms;"
    }

    this.left.addEventListener("click", this.handlerLeft.bind(this));
    this.right.addEventListener("click", this.handlerRight.bind(this));
}

Carousel2.prototype = Object.create(App.prototype);

Carousel2.prototype.handlerLeft = function() {
    this.node = document.querySelector('.carousel2__slide_active');

    this.wrapperleft = isNaN(parseInt(this.wrapper.style.left)) ? 0 : parseInt(this.wrapper.style.left);
    //console.log(this.wrapperleft);
    if(this.wrapperleft <= -this.limit){
    } else {
        this.wrapper.style.cssText += "left:" + (this.wrapperleft + this.widthCarouselSlide) + "px";
        this.node.classList.remove("carousel2__slide_active");
        this.node = this.node.nextElementSibling;
        this.node.classList.add("carousel2__slide_active");

        if(this.node.previousElementSibling) {
            this.node.previousElementSibling.classList.add("carousel2__slide_prev");
        }
        var prevPrev = document.querySelectorAll('.carousel2__slide_prev');

        for (var i = 0; i < prevPrev.length; i++){
            prevPrev[i].style.cssText = "background-image: url(img/fought2.png); " +
                "transform: translate3d("+((i+2) * this.translateX)+"px, 0px, "+((i+2) * -this.translateZ)+"px) rotateX(0deg) " +
                "rotateY("+((i+2) * this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        }

        if(this.node.nextElementSibling) {
            this.node.nextElementSibling.style.cssText = "background-image: url(img/proalltech2.png); " +
                "transform: translate3d(" + (-this.translateX) + "px, 0px, " + (-this.translateZ) + "px) rotateX(0deg) " +
                "rotateY(" + (-this.rotateY) + "deg); z-index: 1; transition-duration: 0ms;"
        }

        this.node.previousElementSibling.style.cssText = "background-image: url(img/third.jpg); " +
            "transform: translate3d("+this.translateX+"px, 0px, "+(-this.translateZ)+"px) rotateX(0deg) " +
            "rotateY("+this.rotateY+"deg); z-index: 1; transition-duration: 0ms;"
    }
}

Carousel2.prototype.handlerRight = function() {
    this.node = document.querySelector('.carousel2__slide_active');

    this.wrapperleft = isNaN(parseInt(this.wrapper.style.left)) ? 0 : parseInt(this.wrapper.style.left);
    //console.log(this.wrapperleft);
    if(this.wrapperleft >= this.limitPrev){

    } else if(this.wrapperleft >= -this.limit) {
        this.wrapper.style.cssText += "left:" + (this.wrapperleft + (-this.widthCarouselSlide)) + "px";
        this.node.classList.remove("carousel2__slide_active");
        this.node = this.node.previousElementSibling;
        this.node.classList.add("carousel2__slide_active");

        if (this.node.nextElementSibling) {
            this.node.nextElementSibling.classList.add("carousel2__slide_next");
        }
        var nextNext = document.querySelectorAll('.carousel2__slide_next');

        var nextNextLast = document.querySelector('.carousel2__slide3');
        var style1 = window.getComputedStyle(nextNextLast).backgroundImage;
        var pr1 = nextNextLast.getAttribute("style");

        var prevPrevLast = document.querySelector('.carousel2__slide2');
        var pr = prevPrevLast.getAttribute("style");
        var style = window.getComputedStyle(prevPrevLast).backgroundImage;
        //console.log(pr);

        for (var i = 0; i < nextNext.length; i++) {
            //console.log(nextNext.length);
            nextNext[i].style.cssText = "background-image: url(img/proalltech2.png); " +
            "transform: translate3d(" + ((i + 1) * -this.translateX) + "px, 0px, " + ((i + 1) * -this.translateZ) + "px) rotateX(0deg) " +
            "rotateY(" + ((i + 1) * -this.rotateY) + "deg); z-index: 1; transition-duration: 0ms;"
        }

        //if(pr == "background-image:url(img/third.jpg)") {
        //    console.log("done");
        //    console.log(prevPrevLast.getAttribute("style"));
            this.node.nextElementSibling.style.cssText = "background-image: url(img/third.jpg); " +
            "transform: translate3d("+(-this.translateX)+"px, 0px, "+(-this.translateZ)+"px) rotateX(0deg) " +
            "rotateY("+(-this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        //}
        //else if(pr == "background-image:url(img/fought2.png"){
        //    console.log("done1");
        //    this.node.nextElementSibling.style.cssText = "background-image: url(img/fought2.png); " +
        //        "transform: translate3d("+(-this.translateX)+"px, 0px, "+(-this.translateZ)+"px) rotateX(0deg) " +
        //        "rotateY("+(-this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        //}
        //else {
        //    console.log("done2");
        //    this.node.nextElementSibling.style.cssText = "background-image: url(img/proalltech2.png); " +
        //    "transform: translate3d("+(-this.translateX)+"px, 0px, "+(-this.translateZ)+"px) rotateX(0deg) " +
        //    "rotateY("+(-this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        //}

        if(this.node.previousElementSibling) {
            //if(pr1 == "background-image:url(img/proalltech2.png)") {
                console.log("done3");
                console.log(nextNextLast.getAttribute("style"));
                this.node.previousElementSibling.style.cssText = "background-image: url(img/fought2.png); " +
                    "transform: translate3d(" + this.translateX + "px, 0px, " + (-this.translateZ) + "px) rotateX(0deg) " +
                    "rotateY(" + this.rotateY + "deg); z-index: 1; transition-duration: 0ms;"
            //}
            //
            //else {
            //    console.log("done4");
            //    this.node.previousElementSibling.style.cssText = "background-image: url(img/third.jpg); " +
            //        "transform: translate3d("+this.translateX+"px, 0px, "+(-this.translateZ)+"px) rotateX(0deg) " +
            //        "rotateY("+this.rotateY+"deg); z-index: 1; transition-duration: 0ms;"
            //}
        }
    }
}

