
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});



$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});

function startVideo() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("youTubeWrap").style.display = "block";
    var vid = document.getElementById("youTubeVideo");
    vid.src += ";autoplay=1";
    $(this).unbind("click");
}