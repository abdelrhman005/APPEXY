
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.onsubmit = function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            message.innerText = "please fill all the fields";
            message.classList.remove("text-green-600");
            message.classList.add("text-red-600");
            return;
        }
    }

    message.innerText = "your message has been sent successfully!";
    message.classList.remove("text-red-600");
    message.classList.add("text-green-600");

    form.reset();
};

