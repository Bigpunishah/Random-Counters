document.addEventListener("DOMContentLoaded", function() {

    let clock_timer_h3 = document.getElementById("clock-timer-h3")
    

    function updateTimer() {
        // Current time
        let now = new Date();
        
        let pastDate = new Date(1889, 2, 31); // (months are 0-indexed)
    
        // Calculate the time difference in milliseconds
        let timeDifference = now - pastDate;
    
        // Calculate the time difference in different units
        let seconds = Math.floor(timeDifference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let months = Math.floor(days / 30);  // Approximate months (30 days per month)
        let years = Math.floor(months / 12);
    
        // Adjust the values for months and days
        months = months % 12;
        days = days % 30;
        hours = hours % 24;
        minutes = minutes % 60;
        seconds = seconds % 60;
    
        // Display the result
        clock_timer_h3.textContent = `${years} yrs ${months} mnths ${days} dys ${hours} hrs ${minutes} mins ${seconds} secs`;
    }
    
    // Update the timer every second
    setInterval(updateTimer, 1000);
    updateTimer();
    

});