
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("show");
}

function toggleFAQ(button) {
    const currentFAQ = button.parentElement;

    // Close other FAQ items
    document.querySelectorAll(".faq").forEach(function (faq) {
        if (faq !== currentFAQ) {
            faq.classList.remove("active");
            faq.querySelector("button span").textContent = "+";
        }
    });

    // Toggle the selected FAQ
    currentFAQ.classList.toggle("active");

    const icon = button.querySelector("span");

    icon.textContent = currentFAQ.classList.contains("active")
        ? "−"
        : "+";
}

function startTrial() {
    alert(
        "Thank you for your interest in NexaAI! " +
        "This is a demo landing page created for a web development project."
    );
}

// Close the mobile menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelector(".nav-links").classList.remove("show");
    });
});