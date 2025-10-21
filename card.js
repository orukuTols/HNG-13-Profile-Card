

const eM =document.getElementById("em");


console.log(eM);

function updateTime() {
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1; // Months are zero-based
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

let sem = `  ${hours}:${minutes}:${seconds}:${milliseconds}`;

eM.textContent = sem;

}
    updateTime(); // Run immediately
    setInterval(updateTime, 1000);

   const navItems = document.querySelectorAll(".Nav nav a");
   const Switch = document.querySelectorAll(".Switch .tab")
    navItems.forEach(item => {
  
  item.addEventListener("click", () => {

    // Remove old classes from all nav items
    navItems.forEach(i => {
   i.classList.remove("active");});
  // Add 'active' to the clicked one
   Switch.forEach(tab => {
     tab.classList.remove("active-tab");
   });
   const targetTab = document.getElementById(item.dataset.target);
   targetTab.classList.add("active-tab");

    item.classList.add("active");
   
  });
});



// Get the form and the success message element
const form = document.getElementById('contact-form');
const successMessage = document.querySelector('[data-testid="test-contact-success"]');
const errorMessages = document.querySelectorAll('.error-message');


function handleSubmit(e) {

    e.preventDefault(); 

    successMessage.style.display = 'none';
    errorMessages.forEach(el => el.textContent = '');
    const formIsValid = form.checkValidity();

    if (formIsValid) {
        successMessage.style.display = 'block';
        successMessage.textContent = 'Thank you for reaching out! We have received your message and will get back to you shortly.';
        // 4. Clear the form for a clean user experience
        form.reset(); 

        // Important: Return false to reinforce that the form should NOT follow its default action.
        return false; 

    } else {
        // 🛑 VALIDATION FAILED 🛑
      
        form.reportValidity(); 
        return false;
    }
}


form.addEventListener('input', () => {
    successMessage.style.display = 'none';
});