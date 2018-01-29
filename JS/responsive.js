
function responsive() {
        var viewportWidth = $(window).width();
        if (viewportWidth < 700) {
            $(".nav").removeClass("sidenav").addClass("topnav");
        } else {
            $(".nav").removeClass("topnav").addClass("sidenav");
        }
}
