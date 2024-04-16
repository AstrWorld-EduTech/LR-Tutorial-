<!-- Back to Main Page Button -->
function checkAnswer() {
    var selectedOption = document.querySelector('input[name="LRUse"]:checked').value;
    if (selectedOption === "2") {
        alert("Congratulations! That's the right answer.");
    } else {
        alert("Oops! That's not quite right. Try again.");
    }
}
<!-- next-back button -->
function nextStep(currentStep) {
        var current = document.getElementById("step" + currentStep);
        var next = document.getElementById("step" + (currentStep + 1));
        if (next) {
            current.classList.remove("active");
            next.classList.add("active");
        }
    }

    function prevStep(currentStep) {
        var current = document.getElementById("step" + currentStep);
        var prev = document.getElementById("step" + (currentStep - 1));
        if (prev) {
            current.classList.remove("active");
            prev.classList.add("active");
        }
    }