/*
* Send user data to the send.php file
* */

export default function formSubmit() {
    const form = document.getElementById('form');
    const status = document.getElementById('status');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        let formData = new FormData(this);

        const response = await fetch('send.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.text();
            status.textContent = result;
        } else {
            const errorResponse = await response.json();
            const errorMessage = errorResponse.error;
            status.textContent = errorMessage;
        }

    });
}