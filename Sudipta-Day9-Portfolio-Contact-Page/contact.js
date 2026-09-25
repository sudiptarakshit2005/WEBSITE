let form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value;

    form.innerHTML = `
        <div class="about-box">
            <h3>Thanks, ${name}!</h3>
            <p>Your message has been received. I will reply soon.</p>
        </div>
    `;
});
