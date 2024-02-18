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
        const phoneValue = phoneInput.value.trim();

        if (!isPhoneValid(phoneValue)) {
            phoneInput.style.borderColor = '#BA5B5B';
            phoneStatus.innerText = "Invalid phone format";
        }
    }

    phoneInput.addEventListener('input', onPhoneInput);
}
