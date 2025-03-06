document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const text = "Jhonarc Portfolio";
    let index = 0;
    function typeEffect() {
        document.querySelector("header h1").textContent = text.slice(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Scroll to Top on Reload
    window.scrollTo(0, 0);
	

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
	
	// Back to top button
	const backToTop = document.getElementById("backToTop");

	window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
	});

	backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
	});

    // Form Validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");

            nameError.style.display = "none";
            emailError.style.display = "none";
            messageError.style.display = "none";

            if (name.value.trim() === "") {
                nameError.textContent = "Name is required.";
                nameError.style.display = "block";
                isValid = false;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.value.match(emailPattern)) {
                emailError.textContent = "Enter a valid email address.";
                emailError.style.display = "block";
                isValid = false;
            }

            if (message.value.trim() === "") {
                messageError.textContent = "Message cannot be empty.";
                messageError.style.display = "block";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
	
});

	
