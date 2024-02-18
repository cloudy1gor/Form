/*
* Phone validate
* */

export default function phoneValidate() {
    const phoneInput = document.getElementById('phone');
    const phoneStatus = document.getElementById('phone-status');
    const PHONE_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    function isPhoneValid(value) {
        return PHONE_REGEXP.test(value);
    }

    function onPhoneInput() {
        const phoneValue = phoneInput.value;

        if (!isPhoneValid(phoneValue)) {
            phoneInput.style.borderColor = '#BA5B5B';
            phoneStatus.innerText = "Invalid phone format";
        } else {
            phoneInput.style.borderColor = '#5B6C8C';
            phoneStatus.innerText = "";
        }
    }

    phoneInput.addEventListener('input', onPhoneInput);
}
