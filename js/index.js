$(function(){
	if ($(window).width()>=768) {
		$('.btm-sec,.offers').addClass('one1');
		$(window).scroll(function(){
			$('.one1').each(function(){
				if ($(this).offset().top-$(window).scrollTop()<=$(window).height()/2) {
					$(this).addClass('two1').removeClass('one1');
				}
			});
		});
	}
});