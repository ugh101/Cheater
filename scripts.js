document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".toggle-image");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const image = this.nextElementSibling.nextElementSibling;
            if (image.classList.contains("hidden")) {
                image.classList.remove("hidden");
                this.textContent = "Hide Image";
            } else {
                image.classList.add("hidden");
                this.textContent = "Show Image";
            }
        });
    });
});
