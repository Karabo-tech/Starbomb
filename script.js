// Simulating basic form submissions
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Form submitted successfully!');
        });
    });
});

function requestEmergencySupport() {
    alert('Emergency support requested!');
}

function deliverMedication() {
    alert('Medication delivery scheduled!');
}

function setAppointment() {
    alert('Appointment scheduled!');
}

function consultPatient() {
    alert('Consultation started!');
}

function givePrescription() {
    alert('Prescription given!');
}

function followUpPatient() {
    alert('Follow-up scheduled!');
}
document.addEventListener('DOMContentLoaded', () => {
    // Handle registration form submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }

            // Simulating successful registration
            alert('Registration successful! You can now log in.');
            window.location.href = 'login.html';
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulating successful login
            if (email === 'test@example.com' && password === 'password') {
                alert('Login successful!');
                window.location.href = 'patient.html'; // Redirect to patient services page
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }
});
