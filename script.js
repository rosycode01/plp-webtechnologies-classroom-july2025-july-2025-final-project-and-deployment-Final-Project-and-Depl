document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");

  showSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  });

  showLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });
  
});

function applyMentorship(program) {
  alert(`Thank you for your interest! You have applied for the ${program} program. We will contact you soon.`);
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent. We’ll reply to ${email} soon.`);
    document.getElementById("contactForm").reset(); // clear form
  } else {
    alert("Please fill in all fields.");
  }
});

// Set donation amount when user clicks a button
function setAmount(value) {
  document.getElementById("amount").value = value;
}

// Handle donation form submission
document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;

  if (name && email && amount > 0) {
    alert(`Thank you, ${name}! You have donated $${amount}. A receipt will be sent to ${email}.`);
    document.getElementById("donationForm").reset();
  } else {
    alert("Please fill in all fields and enter a valid donation amount.");
  }
});
