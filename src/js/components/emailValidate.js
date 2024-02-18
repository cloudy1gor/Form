/*
* Validate email
* */

export default function emailValidate() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const input = document.getElementById('email');
    const status = document.getElementById('email-status');

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function onInput() {
        if (!isEmailValid(input.value)) {
            input.style.borderColor = '#BA5B5B';
            status.innerText = "Invalid email format";
        } else {
            input.style.borderColor = '#5B6C8C';
            status.innerText = "";
        }
    }

    input.addEventListener('input', onInput);
}