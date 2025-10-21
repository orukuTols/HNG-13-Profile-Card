

// Get the form and the success message element
const form = document.getElementById('contact-form');
const successMessage = document.querySelector('[data-testid="test-contact-success"]');
const errorMessages = document.querySelectorAll('.error-message');
 successMessage.style.display = 'none';
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {

    e.preventDefault(); 
  
    const formIsValid = form.checkValidity();

    if (formIsValid) {
      
           successMessage.style.display = 'flex';
        form.reset(); 

        const displayTime = 3000; // 5000 milliseconds = 5 seconds
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        
        }, displayTime);
        


    } else {
        // 🛑 VALIDATION FAILED 🛑
        
      
        form.reportValidity(); 

    }
}


