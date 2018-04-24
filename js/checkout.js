	$(function(){
		var $cart_header = $('.cart-header'),
			$checkoutP = $('.checkoutP'),
			$close1 = $('.close1'),
			$fenye = $('#fenye'),
			$length = null

		if ($cart_header.length<=0) {
			$checkoutP.css('display','block')
			$fenye.css('display','none')
		}
		$close1.click(function() {
			$length++
			// $(this).parents('.cart-header').fadeOut('slow');
			$cart_header.eq($(this).index('.close1')).hide()
			if ($length>=$cart_header.length) {
				$checkoutP.css('display','block')
				$fenye.css('display','none')

			}
			// consoel
		});


			$('.cart-header .text').val("1")
		    $('.button1').css({'disabled': 'disabled', 'border':'1px solid #cccccc','color':'#cccccc'});
		    $(".button1,.button2").click(function () {
		         if ($(this).hasClass("button1")) {
		             if ($(this).siblings('.text').val() <= 1) {  
		                 $(this).css({'disabled': 'disabled', 'border':'1px solid #cccccc','color':'#cccccc'});
		             } else if ($(this).siblings('.text').val() > 1) {
		                 var text = $(this).siblings('.text').val();
		                 $(this).css({'disabled': 'enabled', 'border': '1px solid black', 'color': 'black'});
		                 $(this).siblings('.text').val(--text);
		             }
		         }
		         if ($(this).hasClass("button2")) {
		             var text = $(this).siblings('.text').val();
		             $(this).siblings('.text').val(++text);
		             $(this).siblings('.button1').css({
		                 'disabled': 'enabled', 'border': '1px solid black', 'color': 'black', 'text-align': 'center'
		             })
		         }

		            });

	})