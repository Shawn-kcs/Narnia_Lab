// Self-invoking function to avoid polluting the global scope
(function() {
    'use strict';

    // Wait for the DOM to be fully loaded
    window.addEventListener('load', function() {
        // Get the form element
        var form = document.getElementById('reservationForm');
        if (!form) {
            return;
        }

        // Add a submit event listener to the form
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            event.stopPropagation();

            // Check if the form is valid
            if (form.checkValidity() === false) {
                // If not valid, add the 'was-validated' class to show feedback
                form.classList.add('was-validated');
            } else {
                // If valid, hide the form and show the success message
                form.classList.add('d-none'); // Hide form
                
                var successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.classList.remove('d-none'); // Show success message
                }

                // Optional: You can reset the form after a delay
                setTimeout(function() {
                    form.classList.remove('was-validated');
                    form.reset();
                    // If you want to show the form again after reset
                    // form.classList.remove('d-none');
                    // successMessage.classList.add('d-none');
                }, 5000); // Reset after 5 seconds
            }
        }, false);
    });
})();
