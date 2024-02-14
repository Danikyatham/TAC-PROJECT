// Retrieve filtered train data from session storage
const filteredTrains = JSON.parse(sessionStorage.getItem('filteredTrains'));

// Display filtered train data
const availabilityResultsDiv = document.getElementById('availabilityResults');
if (filteredTrains && filteredTrains.length > 0) {
    filteredTrains.forEach(train => {
        const trainInfo = `
            <p class="yup"> Tickets Available✅<br><br>
                🚂Train No: ${train.trainNumber}<br> <br>🔸${train.fromStation} to ${train.toStation}<br><br>
                🚦Departure: ${train.departureTime}<br> <br>💺 Available Seats: ${train.availableSeats}
            </p>
        `;
        availabilityResultsDiv.insertAdjacentHTML('beforeend', trainInfo);
    });

    // Show "Make Booking" button
    document.getElementById('makeBookingBtn').classList.remove('hidden');

    // Add event listener to "Make Booking" button
    document.getElementById('makeBookingBtn').addEventListener('click', () => {
        // Perform booking process here (e.g., send request to server, update database, etc.)
        
        // Display "Booking Confirmed" message
        const bookingConfirmationMsg = document.createElement('p');
        bookingConfirmationMsg.textContent = 'Booking Confirmed!';
        bookingConfirmationMsg.classList.add('booking-confirmed'); // Add class for styling
        availabilityResultsDiv.appendChild(bookingConfirmationMsg);
    });
} else {
    // Display message when no trains are available
    availabilityResultsDiv.innerHTML = '<p class="nope">🚫No trains available for the selected route🚫</p>';
    // Hide the "Make Booking" button
    document.getElementById('makeBookingBtn').style.display = 'none';
}

// Function to redirect to user page
function redirectTouserPage() {
    window.location.href = 'user.html'; 
}
