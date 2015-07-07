//javascript document-----------


jQuery.extend({
	showList : function() {
		jQuery('.Case_sub').each(function(index, element){
			jQuery(this).focus(function(){
				jQuery('#Case_sub'+ $(this).attr('name')).show();
			});
			jQuery(this).blur(function(){
				jQuery('#Case_sub'+ $(this).attr('name')).hide();
			});
		});
	}
});

//高亮插件
(function($){
	$.fn.extend({
		light : function(left,top,margin) {
			this.children('dt').css({
				'border':'2px solid #008cff',
				'margin':margin
			});
			this.children('dt').children('a').eq(1).show().css({
				'left':left,
				'top':top,
				'display':'block'
			});
		},
		cancelLight : function(margin) {
			this.children('dt').css({
				'border':'1px solid #cccccc',
				'margin':margin
			});
			this.children('dt').children('a').eq(1).hide();
		}
	});
})(jQuery);




















