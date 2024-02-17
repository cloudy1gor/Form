/*
* Send user data to the send.php file and chek if user select the checkbox.
* */

export default function formSubmit() {
    const form =  document.getElementById('form');
    const status = document.getElementById('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let formData = new FormData(this);

        // Chek if user select the checkbox
        if (!formData.get('checkbox')) {
            status.textContent = "Not checked privacy policy";
            return;
        }

        this.submit();

        // Debug
        console.log([...formData.entries()]);
    });
}