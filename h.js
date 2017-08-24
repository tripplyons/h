h = function(tagName, props, children) {
	var element = document.createElement(tagName);

	Object.keys(props || {}).forEach(function(prop) {
		element[prop] = props[prop];
	});

	if (children)
		if (children.match) element.appendChild(document.createTextNode(children));
		else if (children[0])
			children.forEach(function(child) {
				element.appendChild(child);
			});
		else element.appendChild(children);

	return element;
};

app = function(rootId, startState, renderFunction) {
	var div = document.getElementById(rootId)
	function render(nextState, rerender) {
		div.innerHTML = ''
		div.appendChild(renderFunction(nextState, rerender))
	}
	
	function rerender(nextState) {
		setTimeout(function() {
			render(nextState, rerender)
		})
	}
	
	render(startState, rerender)
}
