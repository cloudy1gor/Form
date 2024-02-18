/*
* Name validate
* */

export default function nameValidate() {
    const nameInput = document.getElementById('name');
    const nameStatus = document.getElementById('name-status');
    const NAME_REGEXP = /^[a-zA-Zа-яА-Я\s]+$/;

    function isNameValid(value) {
        return NAME_REGEXP.test(value);
    }

    function onNameInput() {
        let nameValue = nameInput.value;
        if (!isNameValid(nameValue)) {
            nameInput.style.borderColor = '#BA5B5B';
            nameStatus.innerText = "Invalid name format";
        } else {
            nameInput.style.borderColor = '#5B6C8C';
            nameStatus.innerText = "";
        }
    }

    nameInput.addEventListener('input', onNameInput);
}