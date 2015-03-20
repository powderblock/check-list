function addToList() {
	var list = document.getElementById('list');
	item = document.createElement('li');
	item.innerHTML = '<input type= "checkbox" onClick = "removeFromList()"/>'+textbox.value;
	list.appendChild(item);
	document.getElementById("textbox").value= "";
}

function removeFromList() {
	var list = document.getElementById('list'),
		items = Array.prototype.slice.call(list.childNodes),
		item;
	while (item = items.pop()) {
		if (item.firstChild && item.firstChild.checked) {
			list.removeChild(item);
		}
	}
}