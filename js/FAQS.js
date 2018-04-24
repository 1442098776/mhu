$(function(){
	$('.panel-title').click(function(){
		var obj = $(this);

			// $('.panel-title').find('img').attr('src','images/WazorHomeFAQS_icon_more_normal.png');
			
			$(obj).parents('.panel').siblings().find('img').attr('src','images/WazorHomeFAQS_icon_more_normal.png');


		if($(obj).find('img').parents('div').next('div').hasClass('collapse in')){
			$(obj).find('img').attr("src","images/WazorHomeFAQS_icon_more_normal.png");
		}else{
			$(obj).find('img').attr("src","images/WazorHomeFAQS_icon_More_selected.png");
		}




	});
});