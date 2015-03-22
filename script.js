function addToList() {
	if(textbox.value != ''){
		var list = document.getElementById('list');
		item = document.createElement('li');
		item.innerHTML = '<input type= "checkbox" onClick = "removeFromList()"/>'+textbox.value;
		list.appendChild(item);
		document.getElementById("textbox").value= "";
	}
}

function removeFromList() {
	var list = document.getElementById('list'), items = Array.prototype.slice.call(list.childNodes), item;
	while (item = items.pop()) {
		if (item.firstChild && item.firstChild.checked) {
			var text = list.firstChild.innerText;
			var completedList = document.getElementById('completed');
			completedItem = document.createElement('li');
			item.innerHTML = '<input type= "checkbox" onClick = "addBack()" checked/>'+text;
			list.removeChild(item);
			completedList.appendChild(item);
		}
	}
}

function addBack() {
	var list = document.getElementById('completed'), items = Array.prototype.slice.call(list.childNodes), item;
	while (item = items.pop()) {
		if (item.firstChild && item.firstChild.checked == 0) {
			var text = list.firstChild.innerText;
			var completedList = document.getElementById('list');
			completedItem = document.createElement('li');
			item.innerHTML = '<input type= "checkbox" onClick = "removeFromList()" value = "0"/>'+text;
			list.removeChild(item);
			completedList.appendChild(item);
		}
	}
}

function wasEnter(key) {
    if (key.keyCode == 13) {
		addToList();
        return false;
    }
}
