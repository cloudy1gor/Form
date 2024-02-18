// Validate name.
import nameValidate from "./components/nameValidate";

// Validate phone.
import phoneValidate from "./components/phoneValidate";

// Validate email.
import emailValidate from "./components/emailValidate";

// Show or hide password, when click on the eye icon.
import passwordShow from "./components/passwordShow";

// Sent form data to the send.php file
import formSubmit from "./components/formSubmit";

document.addEventListener("DOMContentLoaded", () => {
    nameValidate();
    phoneValidate();
    emailValidate();
    passwordShow();
    formSubmit();
});