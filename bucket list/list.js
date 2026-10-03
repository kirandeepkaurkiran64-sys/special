// Get all checkboxes
const checkboxes = document.querySelectorAll('.bucket-item input[type="checkbox"]');

// Load saved checkbox states when the page opens
checkboxes.forEach((checkbox, index) => {
    const savedState = localStorage.getItem(`bucketItem${index}`);

    if (savedState === "true") {
        checkbox.checked = true;
    }

    // Save the state whenever the checkbox is clicked
    checkbox.addEventListener('change', function () {
        localStorage.setItem(`bucketItem${index}`, checkbox.checked);
    });
});