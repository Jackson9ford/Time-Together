// Update timer function
function updateTimer() {
    // Set the date and time you met: October 23, 2021, 2:00 PM Pacific Time
    const startDate = new Date('2021-10-23T21:00:00Z'); // 21:00 UTC is 2:00 PM PT
  
    const now = new Date();
    const diff = now - startDate;
  
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));  // Calculate years
    const daysInYear = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365.25);  // Remaining days
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);  // Remaining hours
    const minutes = Math.floor((diff / (1000 * 60)) % 60);  // Remaining minutes
    const seconds = Math.floor((diff / 1000) % 60);  // Remaining seconds
  
    document.getElementById('timer').innerHTML = `
      ${years} years, ${daysInYear} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds
    `;
  }
  
  // Set the timer to update every second
  setInterval(updateTimer, 1000);