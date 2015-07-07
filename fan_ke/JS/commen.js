//JS document
$(document).ready(function(){
	
	//顶部注册，登录
(function(){
	$('.zhu_ce').hover(function(){
		$(this).css('background','url(../images/zhu_ce.png) no-repeat 0px -35px');
	},function(){
		$(this).css('background','url(../images/zhu_ce.png) no-repeat');
	});
	$('.deng_lu').hover(function(){
		$(this).css('background','url(../images/deng_lu.png) no-repeat 0px -35px');
	},function(){
		$(this).css('background','url(../images/deng_lu.png) no-repeat');
	});
})();
	//有端弹出菜单
(function(){
	$('#right_F').hover(function(){
		$('.hide').show('slow');
	},function(){
		$('.hide').hide('slow');
	});
})();
	//middle 部分 hover 弹出 图片列表

(function(){
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(callback,thisArg) {
			var T, k;
			if(this==null) {
				throw new TypeError("This is null or not defined");
			}
			var o = Object(this);
			var len = o.length >>> 0;
			if({}.toString.call(callback) != "[object Function]") {
				throw new TypeError(callback + " is not a function");
			};
			if(thisArg) {
				T = thisArg;
			}
			k = 0;
			while (k<len) {
				var kValue;
				if(k in o) {
					kValue = o[k];
					callback.call(T,kValue,k,o);
				}
				k++;
			}
		};
	}
	$('.middle_hide, .tel_p, .link_box').hide();
	var arr1 = ['one','two','three'];
	var arr2 = ['middle_hide','tel_p','link_box'];
	arr1.forEach(function(val,index,arr1) {
		$('.'+val).hover(function(){
			$('.'+arr2[index]).stop().show(400);
		},function(){
			$('.'+arr2[index]).stop().hide(400);
		});
	});
})();


});