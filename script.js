document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const messageDiv = document.createElement('div');
    messageDiv.id = 'submissionMessage';
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Perform form validation or data processing here
        
        form.reset(); // Clear the form fields

        // Display a submission confirmation message
        messageDiv.textContent = 'Form submitted successfully!';
        messageDiv.style.color = 'green';
    });
});
