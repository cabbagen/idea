
$(document).ready(function(){
	$('img').overturn(60);
});


;(function($,window,document,undefined){
	$.fn.overturn = function(time){
		var timeer = time || 80;
		this.each(function(){
			// 图片翻转
			$(this).mouseover(function(){
				$(this).stop().animate({
					'height' : '0px',
					'top' : '35px'
				},timeer,function(){
					$(this).hide().next().show().animate({
						'height' : '70px',
						'line-height' : '70px',
						'top' : '0px'
					},timeer);
				});
			});
			// 文字层翻转
			var text = $(this).next();
			text.mouseout(function(){
				$(this).stop().animate({
					'height' : '0px',
					'top' : '25px'
				},timeer,function(){
			 		$(this).hide().prev().show().animate({
							'height' : '70px',
							'top' : '0px'
					},timeer);
				});
			});
		});
		return this;
	};
})(jQuery,window,document);












