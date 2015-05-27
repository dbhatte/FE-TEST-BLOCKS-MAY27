/* Utilities for validating inputs*/
var TestUtils = {
	validate : function(data) {
		if (data === undefined || data < 0) {
			console.log("Error");
			return -1;
		}	
		return 0;
	},

	validateSizeConstraint : function (containerSize, childSize, numberOfChildren){
		var totalArea = containerSize * containerSize;
		var childArea = numberOfChildren * childSize * childSize;
		if (childArea > totalArea) {
			console.log("Children cannot fit in Container");
			return -1;
		}
		return 0;
	}			

}

