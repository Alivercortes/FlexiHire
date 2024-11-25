const proceedToPayment = document.getElementById('proceedToPayment');
const paymentModal = document.getElementById('paymentModal');
const cancelPayment = document.getElementById('cancelPayment');
const jobForm = document.getElementById('jobForm');

// Show payment modal on button click
proceedToPayment.addEventListener('click', () => {
    paymentModal.style.display = 'flex';
});

// Hide payment modal on cancel
cancelPayment.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Handle form submission
jobForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Job posted successfully!');
    paymentModal.style.display = 'none';
    // Redirect or clear form
    jobForm.reset();
});
