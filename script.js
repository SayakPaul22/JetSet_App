// script.js

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const form = document.querySelector('form');

    // Handle tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.tab-button.active').classList.remove('active');
            button.classList.add('active');
        });
    });

    // Handle form submission
    form.addEventListener('submit', event => {
        event.preventDefault();

        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const departure = document.getElementById('departure').value;
        const returnDate = document.getElementById('return').value;
        const travellers = document.getElementById('travellers').value;
        const travelClass = document.getElementById('class').value;
        const specialFare = document.getElementById('special-fare').value;

        console.log('Form Submitted');
        console.log('From:', from);
        console.log('To:', to);
        console.log('Departure:', departure);
        console.log('Return:', returnDate);
        console.log('Travellers:', travellers);
        console.log('Class:', travelClass);
        console.log('Special Fare:', specialFare);

        // You can perform further actions like making an API request here
    });
});
