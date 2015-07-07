//-----------------

window.onload = function() {
	function createRect(elementParent,num) {
		var rect = document.createElement('div');
		rect.style.width = rect.style.height = num + 'px';
		rect.id = 'rect';
		elementParent.appendChild(rect);
		return rect;
	};
	var list = document.getElementsByTagName('ul')[0].getElementsByTagName('img'),
		pic = document.getElementById('picShow').getElementsByTagName('img')[0],
		bigShow = document.getElementById('bigShow'),
		picShow = document.getElementById('picShow'),
		rect = createRect(picShow,100),
		index;
	for(var i=0, len=list.length; i<len; i++) {
		list[i].index = i;
		list[i].onclick = function() {
			pic.src = list[this.index].src; 
		};
	}
	pic.onmouseover = function(e) {
		bigShow.style.background = 'url(' + this.src + ') no-repeat';
		rect.style.display = 'block';
		rect.style.left = e.clientX - 50 + 'px';
		rect.style.top = e.clientY - 50 + 'px';
	};
	rect.onmousemove = function(e) {
		if(e.clientX < 480 && e.clientY < 274) { 
			this.style.left = e.clientX - 50 + 'px';
			this.style.top = e.clientY - 50 + 'px';
			bigShow.style.backgroundPosition = -(e.clientX - 50)*2 + 'px ' + -(e.clientY - 50)*2 + 'px';
		} else {
			rect.style.display = 'none';
			bigShow.style.background = '';
		}
	};
	
};

	
	












	








