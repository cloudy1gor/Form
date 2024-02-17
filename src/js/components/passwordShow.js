/*
Show or hide password, when clicked on the eye icon.
 */

export default function passwordShow () {
    const password = document.getElementById('password');
    const icon = document.getElementById("icon");

    icon.onclick = function () {
        if ( password.type == "password" ) {
            password.type = "text";
            icon.src = "images/eye-close.png";
        } else {
            password.type = "password";
            icon.src = "images/eye-open.png";
        }
    }
}
