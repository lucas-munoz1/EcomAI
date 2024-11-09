document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data using updated name attributes
    var name = e.target.elements['name'].value;
    var email = e.target.elements['email'].value;
    var business_type = e.target.elements['businessType'].value;
    var website_link = e.target.elements['websiteLink'].value || '';
    var inquiry = e.target.elements['inquiry'].value;

    // Create data object
    var data = {
        name: name,
        email: email,
        business_type: business_type,
        website_link: website_link,
        inquiry: inquiry
    };
    console.log(data)
    // Send data to Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbzuAq4OtWTawmdUXFuU3zx4hxAYT0QoDF29j-Glu49pH4R6eL9NdYCinRk8y2Isuxy7Og/exec', {
        method: 'POST',
        mode: 'no-cors', // 'no-cors' to prevent CORS errors
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function() {
        // Optionally display a success message to the user
        alert('Inquiry successfully submitted');

        // Clear the form
        e.target.reset();
    })
    .catch(function(error) {
        // Handle errors
        console.error('Error!', error.message);
    });
});
