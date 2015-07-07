//javascript document


//=========================================
//===========事件处理
var handleEvent = {
	addEventListener : function(element,type,func){
		if(typeof addEventListener != 'undefined') {
			element.addEventListener(type,func,false);
		} else {
			element.attachEvent('on'+type,func);
		}
	},
	removeEventListener : function(element,type,func) {
		if(typeof addEventListener != 'undefined') {
			element.removeEventListener(type,func,false);
		} else {
			element.detachEvent('on'+type,func);
		}
	},
	getEvent : function(event) {
		return event = event || window.event;
	},
	getTarget : function(event) {
		return event.target ? event.target : event.srcElement;
	},
	getGraph : function(event) {
		return event.clientX + ' , ' + event.clientY;
	},
	getKeyCode : function(event) {
		return event.keyCode;
	},
	stopPropagation : function(event) {
		if(typeof preventDefault != 'undefined') {
			event.stopPropagation();
		} else {
			event.cancelBubble = true; 
		}
	},
	preventDefault : function(event) {
		if(typeof preventDefault != 'undefined') {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
	
};

//============处理样式
var handleStyle = {
	getStyle : function(element,styleName) {
		if(typeof getComputedStyle != 'undefined') {
			return getComputedStyle(element,null)[styleName];
		} else {
			return element.currentStyle[styleName];
		}
	},
	setStyle : function(element,setStyleObject) {
		if(setStyleObject instanceof Object) {
			for(var styleProperty in setStyleObject) {
				element.style[styleProperty] = setStyleObject[styleProperty];
			}
		} else {
			throw new Error('请传入一个设置样式的对象');
		}
	},
	addClass : function(element,setClassName) {
		var classText = element.className,
			reg = /setClassName/;
		if(classText.length == 0) {
			element.className = setClassName;
		} else if(reg.test(classText)) {
			return;
		} else {
			element.className += ' ' + setClassName;
		}
	},
	removeClass : function(element,setClassName) {
		var classText = element.className,
			reg = new RegExp(setClassName);
		if(reg.test(classText)) {
			classText = classText.replace(reg,'');
			element.className = classText.replace(/\s*$/,'').replace(/^\s*/,'');
		} else {
			return;
		}
	},
	toggleClass : function(element,changeClassName) {
		var classText = element.className,
			reg = new RegExp(changeClassName);
		if(reg.test(classText)) {
			this.removeClass(element,changeClassName);
		} else {
			this.addClass(element,changeClassName);
		}
	}
};

//===========处理绘图
var handleDraw = {
	getCanvas : function(canvasElement) {
		var array = [];
		array[0] = parseInt( handleStyle.getStyle(canvasElement,'width') );
		array[1] = parseInt( handleStyle.getStyle(canvasElement,'height') );
		return array;
	},
	drawCircle : function(context,objParameter) {
		var defaultParameter = {
			centerX : 100,
			centerY : 100,
			radius : 50,
			color : 'yellow'
		};
		if(typeof objParameter != 'undefined') {
			for(var name in objParameter) {
				defaultParameter[name] = objParameter[name];
			}
		}
		context.beginPath();
		context.arc(defaultParameter.centerX, defaultParameter.centerY, defaultParameter.radius, 0, 2 * Math.PI, true);
		context.closePath();
		context.fillStyle = defaultParameter.color;
		context.fill();
		
		return [defaultParameter.centerX,defaultParameter.centerY];
	},
	clearCanvas : function(context,canvasElement) {
		context.clearRect( 0, 0, this.getCanvas(canvasElement)[0], this.getCanvas(canvasElement)[1] );
	}
};


//=========================================
window.onload = function() {
	
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		btn = document.getElementById('btn');
		
	var test = handleDraw.drawCircle(context,{
		centerX : 30,
		centerY : 30,
		radius : 30,
		color : 'yellow'
	});
	
	
	btn.onclick = function() {
		window.location = "JS.html";
	};
	
	/*
	 //小动画
	 
	setInterval(function() {
		handleDraw.clearCanvas(context,canvas);
		handleDraw.drawCircle(context,{
			centerX : test[0]+=10,
			centerY : 30,
			radius : 30,
			color : 'yellow'
		});
		
	},20);
	*/
	
	handleEvent.addEventListener(document,'keydown',function(event) {
		event = handleEvent.getEvent(event);
		var keyCodeNum = handleEvent.getKeyCode(event);
		if(test[0] >= 30 && test[0] <= handleDraw.getCanvas(canvas)[0]-30 && test[1] >= 30 && test[1] <= handleDraw.getCanvas(canvas)[1]-30) {
			switch(keyCodeNum) {
				case 37 : 
					(function(){
						handleDraw.clearCanvas(context,canvas);
						handleDraw.drawCircle(context,{
							centerX : test[0]-=10,
							centerY : test[1],
							radius : 30,
							color : 'yellow'
						});
					})();
				break;
					
				case 38 : 
					(function(){
						handleDraw.clearCanvas(context,canvas);
						handleDraw.drawCircle(context,{
							centerX : test[0],
							centerY : test[1]-=10,
							radius : 30,
							color : 'yellow'
						});
					})();
				break;
					
				case 39 : 
					(function(){
						handleDraw.clearCanvas(context,canvas);
						handleDraw.drawCircle(context,{
							centerX : test[0]+=10,
							centerY : test[1],
							radius : 30,
							color : 'yellow'
						});
					})();
				break;
					
				case 40 : 
					(function(){
						handleDraw.clearCanvas(context,canvas);
						handleDraw.drawCircle(context,{
							centerX : test[0],
							centerY : test[1]+=10,
							radius : 30,
							color : 'yellow'
						});
					})();
				break;
			}
		} else {
			alert("嘿嘿！挂了吧。");
		}
	});
};	














