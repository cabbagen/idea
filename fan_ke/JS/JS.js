//javascript document


$(function(){
	//----------------------------------index------------------------------------
	//图片滚动
(function(){
	function scroll_1(num) {
		var index = 0;
		$('#prev').click(function(){
			if(index < num-1) {
				$('.pic_show a').eq(index).animate({'left':'-100%'},400);
				index++;
				$('.pic_show a').eq(index).animate({'left':'0px'},400);
			} 
		});
		$('#next').click(function(){
			if(index > 0) {
				$('.pic_show a').eq(index).animate({'left':'100%'},400);
				index--;
				$('.pic_show a').eq(index).animate({'left':'0'},400);
			} 
		});
	};
	scroll_1(4);
})();
	//content 部分 图片墙
(function(){
	var imgList = $('.pic_wall').children('div').children('img');
	imgList.each(function(){
		$(this).mouseover(function(){
			$(this).prev('div').css('zIndex',20);
		});
		$(this).prev('div').mouseout(function(){
			$(this).css('zIndex',-1);
		});
		$(this).prev('div').children('*').mouseover(function(){
			$(this).parent('div').css('zIndex',20);
		});
	});
	//照片墙轮换
	$('.change_R').on('mouseover',function(){
		$(this).addClass('H3_hover_R');
		$('.change_L').removeClass('H3_hover_L');
		imgList.each(function(index){
			var imgURL = $(this).attr('src');
			var newURL;
			if(imgURL.length == 25) {
				if(index < 2) {
					var changeURL = imgURL.split('L')[1].split('.')[0] + '_2.';
					newURL = '../images/by_wall_L' + changeURL + 'png';
				} else {
					var changeURL = imgURL.split('R')[1].split('.')[0] + '_2.';
					newURL = '../images/by_wall_R' + changeURL + 'png';
				}
				$(this).attr('src',newURL);
			} else {
				$(this).attr('src',imgURL);
			}
		});
	});
	$('.change_L').on('mouseover',function(){
		$(this).addClass('H3_hover_L');
		$('.change_R').removeClass('H3_hover_R');
		imgList.each(function(index){
			var imgURL = $(this).attr('src');
			var newURL;
			if(imgURL.length == 27) {
				if(index < 2) {
					var changeURL = imgURL.split('L')[1].split('.')[0].slice(0,2);
					newURL = '../images/by_wall_L' + changeURL + '.png';
				} else {
					var changeURL = imgURL.split('R')[1].split('.')[0].slice(0,2);
					newURL = '../images/by_wall_R' + changeURL + '.png';
				}
				$(this).attr('src',newURL);
			} else {
				$(this).attr('src',imgURL);
			}
		});
	});
})();
	//尝试用JS控制背景图片移动
(function(){
	$('.con_box').each(function(){
		var classStr = $(this).children('div').attr('class').split('_')[2];
		var classNum = (parseInt(classStr)-1)*(-64) + 'px' + ' 0';
		$(this).children('div').css('backgroundPosition',classNum);
		$(this).hover(function(){
			$(this).css({'backgroundColor':'#fafafa'},{'cursor':'pointer'}); 
		},function(){
			$(this).css({'backgroundColor':'#ffffff'});
		});
		$(this).click(function(){
			window.open('#','_self');
		});
	});
})();
	//模拟输入框中 placeholder 效果
(function(){
	var text = $('#myForm').children('input');
	text.val('请输入您想要搜索的内容');
	text.focus(function(){
		$(this).val('');
	});
	text.blur(function(){
		$(this).val('请输入您想要搜索的内容');
	});
})();
	//信息墙轮换
(function(){
	$('.show_div').hide();
	$('.show_div').eq(0).show();
	var index_1 = 1;
	function wall() {
		if(index_1 < 8) {
			$('.show_div').eq(index_1-1).hide();
			$('.show_div').eq(index_1).show();
			index_1++;
		} else {
			$('.show_div').eq(7).hide();
			$('.show_div').eq(0).show();
			index_1 = 0;
		}
	};
	var stopPic = window.setInterval(wall,3500);
	$('.show_div').each(function(){
		$(this).hover(function(){
			window.clearInterval(stopPic);
			window.clearInterval(stopLi);
		},function(){
			stopPic = window.setInterval(wall,3500);
			stopLi = window.setInterval(function(){
				liMove(8,4);
			},3000);
		});
	});

	// 列表框移动                                                                //-------------------------所需功能尚需完善-----------------------------
	var index_2 = 1,index_3 = 1;
	function liMove(toteNum,colNum) {
		var lineNum = toteNum/colNum;
		var moveLong = (index_2 * 250) + 'px';
		var moveHeight = (index_3 * 58) + 'px';
		$('.li_box').animate({'left': moveLong },1200);
		index_2++;
		if(index_2 == colNum) {
			if(toteNum == colNum) {
				$('.li_box').animate({'left': '0px'},1200);
				index_2 = 1;
			} else {
				if(index_3 < lineNum) {
					$('.li_box').animate({'left': '0px','top':moveHeight },1200);
					index_2 = 1;
					index_3++;
				} else {
					$('.li_box').animate({'left': '0px','top': '0px'},1200);
					index_2 = 1;
					index_3 = 1;
				}
			}
		}
	};
	var stopLi = window.setInterval(function(){
		liMove(8,4);
	},3000);
	$('.li_box').hover(function(){
		window.clearInterval(stopLi);
		window.clearInterval(stopPic);
	},function(){
		stopLi = window.setInterval(function(){
			liMove(8,4);
		},3000);
		stopPic = window.setInterval(wall,3500);
	});
})();
	//footer部分背景平铺
(function(){
	var list1 = $('.L').find('a');
	list1.each(function(index){
		var moveLong = (index) * (-70) + 'px' + ' 0px';
		$(this).css({'backgroundPosition': moveLong});
	});
	var list2 = $('.R').find('a');
	list2.each(function(index) {
		var moveTop = ' -40px';
		var moveLong = (index) * (-67) + 'px' + moveTop; 
		$(this).css({'backgroundPosition': moveLong});
	});
})();


	//-----------------------------case_page----------------------------------
	
	//表单提示弹出框-------------

	jQuery.showList();  //--------------jQuery全局插件

	//搜索部分
(function(){
	$('.Case_search').focus(function(){
		$(this).attr('value',' ');
	});
	$('.Case_search').blur(function(){
		$(this).attr('value','搜索');
	});
})();
	//图片边框高亮      //--------------jQuery对象插件
(function(){
	$('.case_product').each(function(index,ele){
		$(this).hover(function(){
			$(this).light('130px','130px','-1px -1px 6px -1px');
		},function(){
			$(this).cancelLight('0px 0px 7px 0px');
		});
	});
})();
	
/*--------------------------tem_page--------------------------*/

//--------------------主体头部弹出小列表
(function(){
	$('.innerUl').each(function(){
		$(this).hide();
	});
	$('.tem_con_top_list').each(function(){
		$(this).children('li').hover(function(){
			$(this).children('.innerUl').show();
		},function(){
			$(this).children('.innerUl').hide();
		});
	});
})();

//--------------------高亮边框

$('.tem_con_mid').eq(0).children('dl').each(function() {
	$(this).hover(function(){
		$(this).light('145px','190px','-1px');
	},function(){
		$(this).cancelLight('0px 0px 0px 0px');
	});
});
	
/*------------helppage--------------*/
	//左侧滑动列表
(function(){
	$('.explore').children('a').click(function(event){
		event.preventDefault();
		$(this).parent('li').css({
			"background":"url('../images/help_list_img02.png') no-repeat 0 12px"
		});
		$(this).next('ul').slideDown();
		$(this).parent('li').siblings('.explore').find('ul').slideUp().parent('li').css({
			"background":"url('../images/help_list_img01.png') no-repeat 0 12px"
		});;
	});
})();
	
	//help 页面切换
(function(){
	var $span_1 = $('.help_con_page').children('span').eq(0);
	var $span_2 = $('.help_con_page').children('span').eq(1);
	var $btn_1 = $('.help_con_page').children('button').eq(0);
	var $btn_2 = $('.help_con_page').children('button').eq(1);
	$span_2.addClass('.helpNum');
	$btn_2.click(function(){
		$(this).removeClass('helpNext').addClass('helpNext_change');
		$btn_1.removeClass('helpPrev').addClass('helpPrev_change');
		$span_1.addClass('helpNum');
		$span_2.removeClass('helpNum');
	});
	$span_2.click(function(){
		$btn_2.removeClass('helpNext').addClass('helpNext_change');
		$btn_1.removeClass('helpPrev').addClass('helpPrev_change');
		$span_1.addClass('helpNum');
		$(this).removeClass('helpNum');
	});
	$btn_1.click(function(){
		$(this).removeClass('helpPrev_change').addClass('helpPrev');
		$btn_2.removeClass('helpNext_change').addClass('helpNext');
		$span_2.addClass('helpNum');
		$span_1.removeClass('helpNum');
	});
	$span_1.click(function(){
		$btn_1.removeClass('helpPrev_change').addClass('helpPrev');
		$btn_2.removeClass('helpNext_change').addClass('helpNext');
		$span_2.addClass('helpNum');
		$(this).removeClass('helpNum');
	});
	//alert('');
})();	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});