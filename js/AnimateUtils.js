var AnimateUtils = {
	startTime : 0,
	endTime : 0,
	timeOutVar : null,
	element : null,
	childMouseOver : function (event){
		var date = new Date();
		this.startTime = date.getTime();
		this.endTime = date.getTime();
		element = event.target.id;
		console.log('Started Hovering over '+element);
		this.timeOutVar = setTimeout(function(){document.getElementById(element).style.visibility = 'hidden';console.log('Hiding '+element);}, Constants.timeout);
	},
	
	childMouseOut : function (event){
		var date = new Date();
		this.endTime = date.getTime();
		if (this.endTime - this.startTime < Constants.timeout) {
			console.log('Cleared Hovering over '+element);				
			clearTimeout(this.timeOutVar);
		}
		this.startTime = 0;
		this.endTime = 0;
	}

}

