function App(){
    this.init();
    //this.test();  // вызывать в других файлах
}

App.prototype = Object.create(Helper.prototype);

App.prototype.init = function (){
    new MoveLink();
    //new Filter();
}

if (window.addEventListener) window.addEventListener("DOMContentLoaded", init);
else if (window.attachEvent) window.attachEvent("DOMContentLoaded", init);
function init() {
    new App();
};

