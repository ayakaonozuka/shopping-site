$(window).load(function(){
    $(".list-img img").click(function(){
    var img_src = $(this).attr("src");
        $(".img-click img").attr("src", img_src);
        });
    });

$(document).ready(function(){
    $(".sp-navi-item-toggle").click(function(){
        $(".p-menu-toggle").slideToggle();
    });
});