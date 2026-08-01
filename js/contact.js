const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        let enquiries = JSON.parse(localStorage.getItem("enquiries")) || [];

        enquiries.push({
            name,
            phone,
            email,
            message,
            date: new Date().toLocaleString()
        });

        localStorage.setItem("enquiries", JSON.stringify(enquiries));
        localStorage.setItem("contactCount", enquiries.length);

        alert("Thank you! Your enquiry has been submitted.");

        contactForm.reset();

    });

}
