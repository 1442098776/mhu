$(function(){
	// var h=$('.centerRight').height(),
	// 	    h1=$('.centerRight1').height(),
	// 	    h2=$('.centerRight2').height(),
	// 	    h3=$('.centerRight4').height(),
	// 	    h4=$('.centerRight6').height(),
	// 	    h5=$('.centerRight8').outerHeight();
	// 点击>图片时的跳转
	function hide(n){
		$(n).parents('.centerRight').fadeOut(0);
	}
	$('.srcImg,.srcImg1,.srcImg2').click(function(){
		if ($(this).hasClass('srcImg')) {
			hide(this);
	    	// $('.centerLeft').css("height",h2);
	    	$('.centerLeft>ul>li:eq(2)').css('color','#333');
	    	$('.centerRight2').fadeIn('slow');
		}
		if ($(this).hasClass('srcImg1')) {
			hide(this);
			// $('.centerLeft').css("height",h4);
			$('.centerLeft>ul>li:eq(4)').css('color','#333');
	    	$('.centerRight6').fadeIn('slow');
		}
		if ($(this).hasClass('srcImg2')) {
			hide(this);
			// $('.centerLeft').css("height",h5);
			$('.centerLeft>ul>li:eq(5)').css('color','#333');
	    	$('.centerRight8').fadeIn('slow');
		}
	});

	// 以下是点击Personal Details这项右边显示的表单
	function input(n){
		$(n).css('border','1px solid red');
	}
	function input1(n){
		$(n).css('border','').siblings('p').fadeOut('slow');
	}
	$('.firstName,.lastName,.emailAddress,.comfirmEmail,.date,.currentPwd,.pwd,.confirmPwd').blur(function(){
		var regular=/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{3,16}$/.test($(this).val())== false,
		    regular1=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test($(this).val())== false,
		    regular2=/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($(this).val())== false;
		if ($(this).hasClass('firstName')) {
			if (regular) {
				input(this);
				$(this).siblings('p').text('No Spaces, 3-16 characters long, must contain at least two letters, Numbers, and symbols.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('lastName')) {
			if (regular || $(this).val()===$('.firstName').val()) {
				input(this);
				$(this).siblings('p').text('Your input is illegal.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('emailAddress')) {
			if (regular1) {
				input(this);
				$(this).siblings('p').text('The email address you entered is not legal.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('comfirmEmail')) {
			if ($(this).val()!=$('.emailAddress').val()) {
				input(this);
				$(this).siblings('p').text('Email inconsistency').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('date')) {
			if ($(this).val()==='') {
				input(this);
				$(this).siblings('p').text('Please select date.').fadeIn('slow');
			}else {
				input1(this);
			}
		}
		// 判断当前密码
		if ($(this).hasClass('currentPwd')) {
			if (regular2) {
				input(this);
				$(this).siblings('p').text('Please enter the current password.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('pwd')) {
			if (regular2) {
				input(this);
				$(this).siblings('p').text('No Spaces, 6-16 characters long, must contain at least two letters, Numbers, and symbols.').fadeIn('slow');
			}else {
				input1(this);
			}
		}

		if ($(this).hasClass('confirmPwd')) {
			if ($(this).val()!=$('#pwd2').val() || regular2) {
				input(this);
				$(this).siblings('p').text('No Spaces, 6-16 characters long, must contain at least two letters, Numbers, and symbols.').fadeIn('slow');
			}else {
				input1(this);
			}
		} 
	});
	    
	// 点击删除产品
	$('.remove,.remove1,.remove2,.remove3').click(function(){
		if ($(this).hasClass('remove')) {
			$(this).parents('.product').remove();
		}
		if ($(this).hasClass('remove1')) {
			$(this).parents('.addressBook').remove();
		}
		if ($(this).hasClass('remove2')) {
			$(this).parents('.secure').remove();
		}
		if ($(this).hasClass('remove3')) {
			$(this).parents('.wishList').remove();
		}
	});
	// $('.remove').click(function(){
	// 	$(this).parents('.product').remove();
	// });
	// $('.remove1').click(function(){
	// 	$(this).parents('.addressBook').remove();
	// });

	// 点击增加ip地址
	// 
	function fun(){
		$('.remove1').on('click',function(){
			$(this).parents('.addressBook').remove();
		});
	}
	function fun1(){
		$('.remove3').on('click',function(){
			$(this).parents('.wishList').remove();
		});
	}
	var address='<div class="addressBook">'+
					'<p>PAN JINTAO</p>'+
					'<p><span>209 W 118TH St,Apt 2G</span><span>Edit</span><span class="remove1">Remove</span></p>'+
					'<p>New York,United States,10026-1712</p>'+
				'</div>';
	// $('.add').click(function(){
	// 	$(this).before(address);
	// 	fun();
	// });
	// $('.add1').click(function(){
	// 	$(this).before(address).siblings('.p2').remove();
	// 	fun();
	// });

	// 点击Wish List这项右边显示的 增加入商品的
	var wishList='<div class="wishList">'+
	                '<span class="glyphicon glyphicon-remove remove3"></span>'+
					'<div class="media">'+
					    '<div class="media-left">'+
					        '<a href="javascript:void(0)">'+
					            '<img src="images/member/img_chanpin.png">'+
					        '</a>'+
					    '</div>'+
					    '<div class="media-body">'+
		                    '<p class="mediap1">Wazor</p>'+
		        	        '<p class="mediap2">Professional hair dryers</p>'+
		        	        '<p class="mediap3">$999</p>'+
		        	        '<p class="mediap2">Lown in stock</p>'+
					    '</div>'+
					'</div>'
					'<a href="javascript:void(0)" class="text-center">Learn More</a>'+
				'</div>';
	$('.add,.add1,.add2').click(function(){
		if ($(this).hasClass('add')) {
			$(this).before(address);
			fun();
		}
		if ($(this).hasClass('add1')) {
			$(this).before(address).siblings('.p2').remove();
			fun();
		}
		if ($(this).hasClass('add2')) {
			// $(this).siblings('.a').before(wishList);
			$(wishList).appendTo('.wish');
			fun1();
		}
	});
	// $('.add2').click(function(){
	// 	$(wishList).appendTo('.a');
	// });


	// 以下是点击加减按扭时，数量的自加自减
	$('.media-body .text').val('1');
	$('.minus,.plus').click(function(){
		if($(this).hasClass('minus')){
			if ($(this).siblings('.text').val()<=1) {
				$(this).css({'disabled':'disabled','border':'1px solid #cccccc','color':'#cccccc'});
			}else if($(this).siblings('.text').val()>1) {
				var text=$(this).siblings('.text').val();
				$(this).css({'disabled':'enabled','border':'1px solid #666666','color':'#000000'});
				 $(this).siblings('.text').val(--text);
			}
		}
		if($(this).hasClass('plus')){
			var text=$(this).siblings('.text').val();
			 $(this).siblings('.text').val(++text);
			 $(this).siblings('.minus').css({'border':'1px solid #666666','color':'#000000'});
		}
	});


    // 以下是点击.centerLeft下li后右边显示相对应的内容
			

	    // if($('div').hasClass('centerRight')){
	    // 	$('.centerLeft').css("height",h);
	    // }
	    // if($('div').hasClass('centerRight1')){

	    // 	$('.centerLeft').attr("height",h1);
	    // }
	    // if($('div').hasClass('centerRight2')){
	    // 	$('.centerLeft').attr("height",h2);
	    // }
	    $('.centerLeft ul li').not('.centerLeft ul li:first-child').click(function(){
	    	$(this).css('color','#333').siblings('li').css('color','');
	    });
	    $('.centerLeft ul li:nth-child(2)').click(function(){
	    	$(this).parents('.centerLeft').siblings('div').not('.centerRight1').fadeOut(0);
	    	// $('.centerLeft').css("height",h1);
	    	$('.centerRight1').fadeIn('slow');
	    });
	    $('.centerLeft ul li:nth-child(3)').click(function(){
	    	$(this).parents('.centerLeft').siblings('div').not('.centerRight2').fadeOut(0);
	    	// $('.centerLeft').css("height",h2);
	    	$('.centerRight2').fadeIn('slow');
	    });
	    $('.centerLeft ul li:nth-child(4)').click(function(){
	    	$(this).parents('.centerLeft').siblings('div').not('.centerRight4').fadeOut(0);
	    	// $('.centerLeft').css("height",h3);
	    	$('.centerRight4').fadeIn('slow');
	    });
	     $('.centerLeft ul li:nth-child(5)').click(function(){
	     	$(this).parents('.centerLeft').siblings('div').not('.centerRight6').fadeOut(0);
	     	// $('.centerLeft').css("height",h4);
	    	$('.centerRight6').fadeIn('slow');
	    });
	    $('.centerLeft ul li:nth-child(6)').click(function(){
	     	$(this).parents('.centerLeft').siblings('div').not('.centerRight8').fadeOut(0);
	     	// $('.centerLeft').css("height",h5);
	    	$('.centerRight8').fadeIn('slow');
	    });
	     $('.centerLeft ul li:last-child').click(function(){
	     	$(this).parents('.centerLeft').siblings('div').not('.centerRight10').fadeOut(0);
	    	$('.centerRight10').fadeIn('slow');
	    });
	    









	    var array=['English'];
	    $.each(array,function(index,i){
	    	$('#select').get(0).selectedIndex=0;
	    	$('#select').append('<option value='+i+'>'+i+'</option>');
	    });
});
