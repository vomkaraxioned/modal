$(document).ready(function() {
    $("li").click(function() {
        $(".fig").removeClass("active");
        $(this).addClass("active");
    });
});