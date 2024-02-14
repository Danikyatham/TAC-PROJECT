// Sample availability data (replace with your actual data)
const availabilityData = {
    trains: [
        {
            trainNumber: '12345',
            fromStation: 'karimnagar',
            toStation: 'hyderabad',
            departureTime: '08:00 AM',
            arrivalTime: '09:30 AM',
            availableSeats: 50,
        },
        {
            trainNumber: '67890',
            fromStation: 'hyderabad',
            toStation: 'karimnagar',
            departureTime: '05:30 PM',
            arrivalTime: '07:00 PM',
            availableSeats: 30,
        },
        {
            trainNumber: '88973',
            fromStation: 'delhi',
            toStation: 'karimnagar',
            departureTime: '05:30 PM',
            arrivalTime: '07:00 PM',
            availableSeats: 30,
        },
        {
            trainNumber: '65690',
            fromStation: 'karimnagar',
            toStation: 'delhi',
            departureTime: '05:30 PM',
            arrivalTime: '07:00 PM',
            availableSeats: 30,
        },
        {
            trainNumber: '67220',
            fromStation: 'college',
            toStation: 'hostel',
            departureTime: '02:30 PM',
            arrivalTime: '02:20 PM',
            availableSeats: 40,
        },
        {
            trainNumber: '65870',
            fromStation: 'hostel',
            toStation: 'college',
            departureTime: '05:30 PM',
            arrivalTime: '07:00 PM',
            availableSeats: 30,
        },
        {
            trainNumber: '12345',
            fromStation: 'ameerpet',
            toStation: 'punjagutta',
            departureTime: '09:15 AM',
            arrivalTime: '09:10 AM',
            availableSeats: 30,
        },
        {
            trainNumber: '12345',
            fromStation: 'punjagutta',
            toStation: 'ameerpet',
            departureTime: '09:15 AM',
            arrivalTime: '09:10 AM',
            availableSeats: 30,
        },
        // Add more train objects as needed
    ],
};

document.getElementById('availabilityForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const fromStation = document.getElementById('fromStation').value;
    const toStation = document.getElementById('toStation').value;

    // Filter trains based on user input
    const filteredTrains = availabilityData.trains.filter(train => {
        return (
            train.fromStation.toLowerCase() === fromStation.toLowerCase() &&
            train.toStation.toLowerCase() === toStation.toLowerCase()
        );
    });

    // Store filtered train data in session storage
    sessionStorage.setItem('filteredTrains', JSON.stringify(filteredTrains));

    // Redirect to the results page
    window.location.href = 'results.html';
});

// Function to book a ticket
function bookTicket(trainNumber) {
    const filteredTrains = JSON.parse(sessionStorage.getItem('filteredTrains'));
    const trainIndex = filteredTrains.findIndex(train => train.trainNumber === trainNumber);

    if (trainIndex !== -1 && filteredTrains[trainIndex].availableSeats > 0) {
        // Decrease available seats
        filteredTrains[trainIndex].availableSeats--;

        // Update session storage
        sessionStorage.setItem('filteredTrains', JSON.stringify(filteredTrains));

        // Display confirmation message
        document.getElementById('bookingConfirmation').textContent = 'Booking Confirmed!';
    } else {
        document.getElementById('bookingConfirmation').textContent = 'Booking Failed. No available seats.';
    }
}
