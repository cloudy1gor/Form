// Show or hide password, when click on the eye icon.
import passwordShow from "./components/passwordShow";

// Sent form data to the send.php file
import formSubmit from "./components/formSubmit";

document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById('form').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     const formData = new FormData(this);
    //     this.submit();
    // });

    passwordShow();
    formSubmit();
});