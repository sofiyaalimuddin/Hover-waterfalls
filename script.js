// Function to show properties (like the alt text) of an element
function showProperties(element) {
    document.getElementById('message').innerHTML = element.alt;
}

// Select the message div and all images with the class 'preview'
const messageDiv = document.getElementById('message');
const previewImages = document.querySelectorAll('.preview');

// Add event listeners for mouseover, mouseout, and set tabindex for each image
previewImages.forEach((image, index) => {
    // Set tabindex so images can be focused using the keyboard
    image.tabIndex = index + 1;  // Adding tabindex in order (1, 2, 3, ...)

    image.addEventListener('mouseover', () => {
        messageDiv.style.backgroundImage = `url(${image.src})`;
        image.style.opacity = '1';  // Fully opaque
        messageDiv.textContent = image.alt;
    });

    image.addEventListener('mouseout', () => {
        image.style.opacity = '0.7';  // 70% opacity
        messageDiv.style.backgroundImage = '';  // Reset background image
        messageDiv.textContent = 'Hover over an image to display the alt text.';
    });

    // Optionally, handle keyboard focus on the images
    image.addEventListener('focus', () => {
        messageDiv.style.backgroundImage = `url(${image.src})`;
        image.style.opacity = '1';  // Fully opaque
        messageDiv.textContent = image.alt;
    });

    image.addEventListener('blur', () => {
        image.style.opacity = '0.7';  // 70% opacity
        messageDiv.style.backgroundImage = '';  // Reset background image
        messageDiv.textContent = 'Hover over an image to display the alt text.';
    });
});
