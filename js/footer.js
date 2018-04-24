$(function(){
	if ($(window).width()>=768) {
		$('.footer,.copywrite').addClass('one');
		$(window).scroll(function(){
			$('.one').each(function(){
				if ($(this).offset().top-$(window).scrollTop()<$(window).height()) {
					$(this).addClass('two');
				}else {
					$('.footer,.copywrite').addClass('one').removeClass('two');
				}
			})
		});
	}
});