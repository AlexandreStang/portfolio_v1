document.addEventListener('DOMContentLoaded', function() {

    var currentLocation = window.location.href.split("#")[0];
    var currentSection = 1;

    createjs.Ticker.addEventListener("tick", verifySection);

    function verifySection(e) {

        if (currentSection == 4) {
            document.getElementById("down-arrow-container").style.transform = "rotate(180deg)";
            document.getElementById("down-arrow-container").style.transition = "all ease-in-out 0.3s";
        } else {
            document.getElementById("down-arrow-container").style.transform = "none";
        }

    }

    document.getElementById("show-menu").addEventListener("change", function () {

        if(this.checked) {

            TweenMax.from(document.getElementById("nav-mobile"), 0.25, {opacity:"0", display:"none"});
            TweenMax.to(document.getElementById("nav-mobile"), 0.25, {opacity:"1", display:"block", onComplete:function () {
                    TweenMax.from(document.getElementById("mobile-1"), 0.25, {delay:0.10, opacity:"0", x:-5});
                    TweenMax.to(document.getElementById("mobile-1"), 0.25, {delay:0.10, opacity:"1", x:+5});

                    TweenMax.from(document.getElementById("mobile-2"), 0.25, {delay:0.25, opacity:"0", x:-5});
                    TweenMax.to(document.getElementById("mobile-2"), 0.25, {delay:0.25, opacity:"1", x:0});

                    TweenMax.from(document.getElementById("mobile-3"), 0.25, {delay:0.40, opacity:"0", x:-5});
                    TweenMax.to(document.getElementById("mobile-3"), 0.25, {delay:0.40, opacity:"1", x:0});

                    TweenMax.from(document.getElementById("mobile-4"), 0.25, {delay:0.55, opacity:"0", x:-5});
                    TweenMax.to(document.getElementById("mobile-4"), 0.25, {delay:0.55, opacity:"1", x:0});
                }});

        } else {
            TweenMax.from(document.getElementById("nav-mobile"), 0.25, {opacity:"1", display:"block"});
            TweenMax.to(document.getElementById("nav-mobile"), 0.25, {opacity:"0", display:"none"});

            document.getElementById("mobile-1").style.opacity = "0";
            document.getElementById("mobile-2").style.opacity = "0";
            document.getElementById("mobile-3").style.opacity = "0";
            document.getElementById("mobile-4").style.opacity = "0";
        }

    });

    document.getElementById("mobile-1").addEventListener("click", function () {
        document.getElementById("nav-mobile").style.display = "none";
        currentSection = 1;
    });

    document.getElementById("mobile-2").addEventListener("click", function () {
        document.getElementById("nav-mobile").style.display = "none";
        currentSection = 2;
    });

    document.getElementById("mobile-3").addEventListener("click", function () {
        document.getElementById("nav-mobile").style.display = "none";
        currentSection = 3;
    });

    document.getElementById("mobile-4").addEventListener("click", function () {
        document.getElementById("nav-mobile").style.display = "none";
        currentSection = 4;
    });

    document.getElementById("desktop-1").addEventListener("click", function () {
        currentSection = 1;
    });

    document.getElementById("desktop-2").addEventListener("click", function () {
        currentSection = 2;
    });

    document.getElementById("desktop-3").addEventListener("click", function () {
        currentSection = 3;
    });

    document.getElementById("desktop-4").addEventListener("click", function () {
        currentSection = 4;
    });

    document.getElementById("down-arrow").addEventListener("click", function () {
        currentSection++;

        if(currentSection > 4) {
            currentSection = 1;
        }

        document.getElementById("down-arrow").href= "#" + currentSection;
    });

    document.addEventListener("wheel", function(e) {

        if (e.deltaY > 0) {
            currentSection++;

            if (currentSection > 4) {
                currentSection = 4;

            }
        } else {
            currentSection--;

            if (currentSection < 1) {
                currentSection =1;
            }

        }

        window.location.replace(currentLocation + "#" + currentSection);


    });

    window.addEventListener("resize", function(event) {
        TweenMax.to(document.getElementById("nav-mobile"), 0.25, {opacity:"0", display:"none"});
    });

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }


});