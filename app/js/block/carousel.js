function Carousel(){
    this.wrapper = document.querySelector('.carousel__wrapper');
    this.left = document.getElementById('carousel__left');
    this.right = document.getElementById('carousel__right');
    this.node = document.querySelector('.carousel__slide_active');
    this.carouselSlide = document.querySelectorAll('.carousel__slide');
    this.slidefirst = this.wrapper.firstElementChild;
    this.widthCarouselSlide = -(parseInt(getComputedStyle(this.slidefirst).width));   // 323
    this.count = this.wrapper.children.length;                                        // 5
    this.limit = -(this.widthCarouselSlide * (this.count - 1));                       // 1292
    this.limitPrev = parseInt(getComputedStyle(this.slidefirst).left);                // 0

    //this.widthWrapper = this.wrapper.clientWidth;
    //console.log(this.widthWrapper);
    //this.wrapper.style.cssText = "transform: translate3d("+(this.widthWrapper/3)+"px, 0px, 0px)";

    //var getBoundingClientRectWrapper = this.wrapper.getBoundingClientRect();
    //var wrapperWidth = getBoundingClientRectWrapper.width;

    this.translateX = 150;
    this.translateZ = 100;
    this.rotateY = 10;

    for (var i = 0; i < this.carouselSlide.length; i++){
        this.carouselSlide[i].style.cssText = "background-image: url(img/third.jpg); " +
            "transform: translate3d("+(i * -this.translateX)+"px, 0px, "+(i * -this.translateZ)+"px) rotateX(0deg) " +
            "rotateY("+(i * -this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        this.carouselSlide[i].classList.add("carousel__slide_next");
    }

    this.left.addEventListener("click", this.handlerLeft.bind(this));
    this.right.addEventListener("click", this.handlerRight.bind(this));
}

Carousel.prototype = Object.create(App.prototype);

Carousel.prototype.handlerLeft = function() {
    this.node = document.querySelector('.carousel__slide_active');
    this.node.classList.remove("carousel__slide_next");
    var prevPrev = document.querySelectorAll('.carousel__slide_prev');
    var nextNext = document.querySelectorAll('.carousel__slide_next');
    //console.log(prevPrev);

    this.wrapperleft = isNaN(parseInt(this.wrapper.style.left)) ? 0 : parseInt(this.wrapper.style.left);
    //console.log(this.wrapperleft);
    if(this.wrapperleft <= -this.limit){
    } else {
        this.wrapper.style.cssText += "left:" + (this.wrapperleft + this.widthCarouselSlide) + "px";
        this.node.classList.remove("carousel__slide_active");
        this.node = this.node.nextElementSibling;

        this.node.classList.add("carousel__slide_active");
        this.node.previousElementSibling.classList.add("carousel__slide_prev");

        if(this.node.nextElementSibling){
            this.node.nextElementSibling.classList.add("carousel__slide_next");
        }


        for (var i = 0; i < nextNext.length; i++){
            //console.log(nextNext.length);
            nextNext[i].style.cssText = "background-image: url(img/third.jpg); " +
                "transform: translate3d("+(i * -this.translateX)+"px, 0px, "+(i * -this.translateZ)+"px) rotateX(0deg) " +
                "rotateY("+(i * -this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        }

        for (var i = 0; i < prevPrev.length; i++){
            console.log(prevPrev[i]);
            prevPrev[i].style.cssText = "background-image: url(img/third.jpg); " +
                "transform: translate3d("+((i+2) * this.translateX)+"px, 0px, "+((i+2) * -this.translateZ)+"px) rotateX(0deg) " +
                "rotateY("+((i+2) * this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        }
        if(this.node.nextElementSibling) {
            this.node.nextElementSibling.style.cssText = "background-image: url(img/third.jpg); " +
                "transform: translate3d(" + (-this.translateX) + "px, 0px, " + (-this.translateZ) + "px) rotateX(0deg) " +
                "rotateY(" + (-this.rotateY) + "deg); z-index: 1; transition-duration: 0ms;"
        }

        this.node.previousElementSibling.style.cssText = "background-image: url(img/third.jpg); " +
            "transform: translate3d("+this.translateX+"px, 0px, "+(-this.translateZ)+"px) rotateX(0deg) " +
            "rotateY("+this.rotateY+"deg); z-index: 1; transition-duration: 0ms;"

    }
}

Carousel.prototype.handlerRight = function() {
    this.node = document.querySelector('.carousel__slide_active');
    this.node.classList.remove("carousel__slide_next");
    var prevPrev = document.querySelectorAll('.carousel__slide_prev');
    var nextNext = document.querySelectorAll('.carousel__slide_next');

    this.wrapperleft = isNaN(parseInt(this.wrapper.style.left)) ? 0 : parseInt(this.wrapper.style.left);
    //console.log(this.wrapperleft);
    if(this.wrapperleft >= this.limitPrev){

    } else if(this.wrapperleft >= -this.limit) {
        this.wrapper.style.cssText += "left:" + (this.wrapperleft + (-this.widthCarouselSlide)) + "px";
        this.node.classList.remove("carousel__slide_active");
        this.node = this.node.previousElementSibling;
        this.node.classList.add("carousel__slide_active");

        if(this.node.previousElementSibling) {
            this.node.previousElementSibling.classList.add("carousel__slide_prev");
        }
        this.node.nextElementSibling.classList.add("carousel__slide_next");


        for (var i = 0; i < nextNext.length; i++){
            //console.log(nextNextt.length);
            nextNext[i].style.cssText = "background-image: url(img/third.jpg); " +
                "transform: translate3d("+((i+2) * -this.translateX)+"px, 0px, "+((i+2) * -this.translateZ)+"px) rotateX(0deg) " +
                "rotateY("+((i+2) * -this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        }

        for (var i = 0; i < prevPrev.length; i++){
            //console.log(prevPrev[i]);
            prevPrev[i].style.cssText = "background-image: url(img/third.jpg); " +
                "transform: translate3d("+((i+2) * this.translateX)+"px, 0px, "+((i+2) * -this.translateZ)+"px) rotateX(0deg) " +
                "rotateY("+((i+2) * this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"
        }

        this.node.nextElementSibling.style.cssText = "background-image: url(img/third.jpg); " +
            "transform: translate3d("+(-this.translateX)+"px, 0px, "+(-this.translateZ)+"px) rotateX(0deg) " +
            "rotateY("+(-this.rotateY)+"deg); z-index: 1; transition-duration: 0ms;"

        if(this.node.previousElementSibling) {
            this.node.previousElementSibling.style.cssText = "background-image: url(img/third.jpg); " +
                "transform: translate3d(" + this.translateX + "px, 0px, " + (-this.translateZ) + "px) rotateX(0deg) " +
                "rotateY(" + this.rotateY + "deg); z-index: 1; transition-duration: 0ms;"
        }
    }
}

