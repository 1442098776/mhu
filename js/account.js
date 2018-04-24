$(function(){
	function one(n){
		$(n).parent('label').siblings('label').css('display','none');
	}
	function two(v,i){
		$(v).parent('label').siblings('label').text(i).css({'display':'block','color':'red'});
	}
	$('.registration_form>form>div p').css({'margin-bottom':'10px','color':'#333','font-size':'16px','font-weight':'bold'});
	$('.firstName,.lastName,.pwd,.retypePwd').parent('label').siblings('label').css('display','none');
	$('.firstName,.lastName,.email,.pwd,.retypePwd,.email1,.pwd1').blur(function(){
		const i='Please retype, this item cannot be empty.';
		if ($(this).hasClass('firstName')) {
			if ($(this).val()==='') {
					two(this,i);
			}else {
				one(this);
			}
		}
		if ($(this).hasClass('lastName')) {
			if ($(this).val()==='') {
					two(this,i);
			}else {
				one(this);
			}
		}
		if ($(this).hasClass('email')) {
			if(/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test($(this).val())== false) {
				const i='The email address you entered is not correct. Please re-enter it.';
				two(this,i);
			}else {
				one(this);
			}
		}
		if ($(this).hasClass('pwd')) {
			if (/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($(this).val())==false) {
				const i='No Spaces, 6-16 characters long, must contain at least two letters, Numbers, and symbols.';
				two(this,i);
			}else {
				one(this);
			}
		}
		if ($(this).hasClass('retypePwd')) {
			if ($(this).val()!=$('.pwd').val()) {
				const i='The passwords are not consistent. Please retype them.';
				two(this,i);
			}else {
				one(this);
			}
		}
		if ($(this).hasClass('email1')) {
			if(/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test($(this).val())== false) {
				const i='The email address you entered is not correct. Please re-enter it.';
				two(this,i);
			}else {
				one(this);
			}
		}
		if ($(this).hasClass('pwd1')) {
			if (/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($(this).val())==false) {
				const i='No Spaces, 6-16 characters long, must contain at least two letters, Numbers, and symbols.';
				two(this,i);
			}else {
				one(this);
			}
		}
	}).focus(function(){
		if ($(this).hasClass('firstName')) {
			one(this);
		}
		if ($(this).hasClass('lastName')) {
			one(this);
		}
		if ($(this).hasClass('email')) {
			one(this);
		}
		if ($(this).hasClass('pwd')) {
			one(this);
		}
		if ($(this).hasClass('retypePwd')) {
			one(this);
		}
		if ($(this).hasClass('email1')) {
			one(this);
		}
		if ($(this).hasClass('pwd1')) {
			one(this);
		}
	});
	$('.forgotPwd').css({'display':'none'});
	$('.forget>a').click(function(){
		$('.forgotPwd').css('display','block');
		$('.email2').val('');
		$('.forgotPwd').click(function(ev){
			if (ev.target!=this) {
				return;
			}else {
				$(this).css('display','none');
			}
		});
		$('.forgotPwd>.form>span').click(function(){
			$(this).parents('.forgotPwd').css('display','none');
		});
	});
	if(/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test($('.email2').val())== true){
		$('.forgotPwd .submit').click(function(){
			$(this).parents('.forgotPwd').css('display','none');
		});
	}else {
		$('.email2').blur();
	}

	$('.submit').click(function(event){
		if (event.target!=this) {
			return;
		}else {
			if(/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test($('.email2').val())== true){
				$('.forgotPwd').css('display','none');
			}else {
				$('.email2').blur();
			}
		}
	});
});