var onLoadCallback = function(containerSize, childSize, numberOfChildren) {
	console.log(containerSize);
	console.log(childSize);
	console.log(numberOfChildren);
	
	if (TestUtils.validate(containerSize) === -1) return;
	if (TestUtils.validate(childSize) === -1) return;
	if (TestUtils.validate(numberOfChildren) === -1) return;

	if (TestUtils.validateSizeConstraint(containerSize, childSize, numberOfChildren) === -1) return;
	
	
	var container = CreateUtils.createDivWithDimensions(containerSize);
	var childIndex = 0;
	for (childIndex = 0; childIndex < numberOfChildren; childIndex++){
		var childElement = CreateUtils.createChildDivWithDimensions('childIndex'+childIndex, childSize);
		
		childElement.addEventListener('mouseover', AnimateUtils.childMouseOver);
		childElement.addEventListener('mouseout', AnimateUtils.childMouseOut);
		container.appendChild(childElement);
	}
	
	document.body.appendChild(container);
}