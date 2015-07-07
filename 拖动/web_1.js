//javascript document



window.onload = function() {
	var drag =  document.getElementById('drag'),
		flag = false,
		diffX = 0,
		diffY = 0;
	drag.addEventListener('mousedown',function(event){
		if(event.which == 1 && flag == false) {
			diffX = event.clientX - event.target.offsetLeft;
			diffY = event.clientY - event.target.offsetTop;
			flag = true;
		}
	},false);
	drag.addEventListener('mouseup',function(){
		flag = false;
	},false);
	
	drag.addEventListener('mousemove',function(event){
		if(flag == true) {
			this.style.left = (event.clientX - diffX) + 'px';
			this.style.top = (event.clientY - diffY) + 'px';
		}
	},false);
	
	
};







