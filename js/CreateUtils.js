/* To create the elements*/
var CreateUtils = {

	colors : ['red', 'blue', 'green', 'yellow', 'pink'],

	createDivWithDimensions : function (dimension){
		var element = document.createElement("div");
		element.style.height = dimension + "px";
		element.style.width = dimension + "px";
		return element;
	},
	
	createChildDivWithDimensions : function(id, dimension){
		var element = document.createElement("div");
		element.id = id;
		element.style.height = dimension + "px";
		element.style.width = dimension + "px";
		element.style.float = 'left';
		element.style.backgroundColor = this.colors[parseInt(this.colors.length * Math.random(), 10)];
		return element;
	}
	
}
