/*
* Name validate
* */

export default function nameValidate() {
    const nameInput = document.getElementById('name');
    const nameStatus = document.getElementById('name-status');
    const NAME_REGEXP = /^[a-zA-Zа-яА-Я]+$/;

    function isNameValid(value) {
        return NAME_REGEXP.test(value);
    }

    function onNameInput() {
        const nameValue = nameInput.value.trim();
        if (!isNameValid(nameValue)) {
            nameInput.style.borderColor = '#BA5B5B';
            nameStatus.innerText = "Invalid name format";
        }
    }

    nameInput.addEventListener('input', onNameInput);
}