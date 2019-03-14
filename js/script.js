$(document).ready(function(){
	  var pull = $('#pull');
  menu = $('.menu');
    var open = $('.open');

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.toggleClass('top0');
    $(this).find('a').toggleClass("cross");
  });
	$(".js-btn-buy-link").click(function(){
		var o=$(this).attr("href"),
		n=$(o).offset().top,
		t=$(".js-main-logo-block").height();
		return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:n-t},1e3),!1
	});
	
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.header__menu_wrap').addClass("sticky");
$('.header__logo').addClass("sticky");
}
else{
$('.header__menu_wrap').removeClass("sticky");
$('.header__logo').removeClass("sticky");
}
});
		});


