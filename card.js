

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

eM.textContent = sem

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
