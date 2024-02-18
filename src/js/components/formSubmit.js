/*
* Send user data to the send.php file
* */

export default function formSubmit() {
    const form = document.getElementById('form');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        let formData = new FormData(this);

        const response = await fetch('send.php', {
            method: 'POST',
            body: formData
        });
    });
}