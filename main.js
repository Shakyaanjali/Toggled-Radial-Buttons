const buttonsComponent = document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons__toggle');

buttonsToggle.addEventListener('click', toggleButtons);

function toggleButtons() {
	buttonsToggle.classList.toggle('buttons__toggle--active');
	buttonsComponent.classList.toggle('buttons--active');
	document.activeElement.blur();
}
