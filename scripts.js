/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button');
    const message = document.querySelector('.message');
    
    submitButton.type = 'button'; // Prevents page reload on submit button click

    submitButton.addEventListener('click', function() {
        const emailInput = document.querySelector('input');
        const email = emailInput.value.trim();
        
        if (email.includes('@') && email.includes('.')) {
            message.innerHTML = `Thank you! Your email ${email} has been added to our mailing list!`;
        } else {
            message.innerHTML = 'Error: Please enter a valid email address.';
        }
    });
});
