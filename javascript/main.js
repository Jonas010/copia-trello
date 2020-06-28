var menu = document.querySelector('.menu');
var bmenu = document.getElementById('chec');

function check() {
	if (bmenu.checked==true) {
		menu.style.display="block";
	} else {
		menu.style.display="none";
	}
}



var button = document.createElement("button");
button.innerHTML = "add bloco...";

var list = document.querySelector('.list');
var idlist = document.getElementById("list");

button.addEventListener('click', function() {
	var nome = prompt("Nome para o novo bloco:");
	
	if (nome != "") {
		var div = document.createElement("div");
		div.classList.add("list-item");
		div.draggable="true";
		div.innerHTML=nome;
		idlist.appendChild(div);

		
	} else {
		alert ("Por favor,insira um nome para o bloco.");
	}
	const list_items = document.querySelectorAll('.list-item');
	const lists = document.querySelectorAll('.list');

	let draggedItem = null;

	for (let i = 0; i < list_items.length; i++) {
		const item = list_items[i];

		item.addEventListener('dragstart', function() {
			console.log('dragstart');
			draggedItem = item;
			setTimeout(function () {
				item.style.display = 'none';
			}, 0)
		});

		item.addEventListener('dragend', function () {
			console.log('dragend');
			setTimeout(function () {
				draggedItem.style.display = 'block';
				//item.style.display = 'block';
				//draggedItem = null;
			}, 0);
		})

		for (let j = 0; j < lists.length; j++) {
			const list = lists[j];

			list.addEventListener('dragover', function (e) {
				e.preventDefault();
			});
			list.addEventListener('dragenter', function (e) {
				e.preventDefault();
				this.style.backgroundColor = 'rgba(0,0,0,0.2)';
			});
			list.addEventListener('dragleave', function (e) {
				this.style.backgroundColor = 'rgba(0,0,0,0.1)';
			});
			list.addEventListener('drop', function () {
				this.append(draggedItem);
				//this.append(item);
				this.style.backgroundColor = 'rgba(0,0,0,0.1)';
			});
		} 
	}
});

list.appendChild(button);