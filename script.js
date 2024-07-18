document.getElementById('waitlistForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Hide the form
    document.querySelector('.waitlist-form').style.display = 'none';
    
    // Show the thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
});
