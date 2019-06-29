var someDogs = document.querySelector('.some-dogs');

var dogNameInput = document.querySelector('.dog-name-input');

var dogNameButton = document.querySelector('.dog-name-button');

dogNameButton.addEventListener('click', changeName);

function changeName(event) {
	event.preventDefault();
	someDogs.innerHTML = dogNameInput.value;
}
