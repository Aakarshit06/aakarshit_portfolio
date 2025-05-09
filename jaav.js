// Function to change color scheme
function changeColorScheme(scheme) {
    if (scheme === 'blue') {
        document.documentElement.style.setProperty('--primary-color', '#007BFF');  // Blue
        document.documentElement.style.setProperty('--background-color', '#002f6c'); // Dark Blue
        document.documentElement.style.setProperty('--text-color', '#ffffff');  // White Text
        document.documentElement.style.setProperty('--button-bg-color', '#002f6c');  // Blue Button
        document.documentElement.style.setProperty('--button-border-color', '#007BFF');
        document.documentElement.style.setProperty('--link-color', '#007BFF');  // Blue Links
        document.documentElement.style.setProperty('--hover-link-color', '#ffffff');
    } else if (scheme === 'pink') {
        document.documentElement.style.setProperty('--primary-color', '#FF66B2');  // Lighter Pink
        document.documentElement.style.setProperty('--background-color', '#FFB3D9');  // Light Pink Background
        document.documentElement.style.setProperty('--text-color', '#4B0082');  // Darker Text (Indigo)
        document.documentElement.style.setProperty('--button-bg-color', '#FFB3D9');  // Light Pink Button
        document.documentElement.style.setProperty('--button-border-color', '#FF66B2');  // Lighter Pink Border
        document.documentElement.style.setProperty('--link-color', '#FF66B2');  // Lighter Pink Links
        document.documentElement.style.setProperty('--hover-link-color', '#ffffff');  // White on hover
    } else if (scheme === 'green') {
        document.documentElement.style.setProperty('--primary-color', '#28a745');  // Green
        document.documentElement.style.setProperty('--background-color', '#003d0e');  // Dark Green
        document.documentElement.style.setProperty('--text-color', '#ffffff');  // White Text
        document.documentElement.style.setProperty('--button-bg-color', '#003d0e');  // Dark Green Button
        document.documentElement.style.setProperty('--button-border-color', '#28a745');
        document.documentElement.style.setProperty('--link-color', '#28a745');  // Green Links
        document.documentElement.style.setProperty('--hover-link-color', '#ffffff');
    } else {
        // Default colors (Green theme)
        document.documentElement.style.setProperty('--primary-color', '#26bd00');  // Default Green
        document.documentElement.style.setProperty('--background-color', '#000000');  // Black Background
        document.documentElement.style.setProperty('--text-color', '#ffffff');  // White Text (Fixed for contrast)
        document.documentElement.style.setProperty('--button-bg-color', '#000');  // Black Button
        document.documentElement.style.setProperty('--button-border-color', '#26bd00');
        document.documentElement.style.setProperty('--link-color', '#26bd00');  // Default Green Links
        document.documentElement.style.setProperty('--hover-link-color', '#000000');
    }
}

// Function to generate a random color scheme
function getRandomColor() {
    const colors = [
        { primary: '#007BFF', background: '#002f6c', text: '#ffffff', buttonBg: '#002f6c', buttonBorder: '#007BFF', link: '#007BFF', hoverLink: '#ffffff' },  // Blue
        { primary: '#FF66B2', background: '#FFB3D9', text: '#4B0082', buttonBg: '#FFB3D9', buttonBorder: '#FF66B2', link: '#FF66B2', hoverLink: '#ffffff' },  // Lighter Pink
        { primary: '#28a745', background: '#003d0e', text: '#ffffff', buttonBg: '#003d0e', buttonBorder: '#28a745', link: '#28a745', hoverLink: '#ffffff' },  // Green
        { primary: '#ff6347', background: '#ffcccb', text: '#333333', buttonBg: '#ffcccb', buttonBorder: '#ff6347', link: '#ff6347', hoverLink: '#ffffff' },  // Tomato Red
        { primary: '#FF4500', background: '#FF7F50', text: '#ffffff', buttonBg: '#FF7F50', buttonBorder: '#FF4500', link: '#FF4500', hoverLink: '#ffffff' },  // Orange Red
        { primary: '#FFD700', background: '#FF8C00', text: '#333333', buttonBg: '#FF8C00', buttonBorder: '#FFD700', link: '#FFD700', hoverLink: '#ffffff' },  // Gold
        { primary: '#DC143C', background: '#FFB6C1', text: '#333333', buttonBg: '#FFB6C1', buttonBorder: '#DC143C', link: '#DC143C', hoverLink: '#ffffff' },  // Crimson
        { primary: '#00FFFF', background: '#20B2AA', text: '#ffffff', buttonBg: '#20B2AA', buttonBorder: '#00FFFF', link: '#00FFFF', hoverLink: '#ffffff' },  // Cyan
        { primary: '#ff0000', background: '#000000', text: '#ffffff', buttonBg: '#000000', buttonBorder: '#ff0000', link: '#ff0000', hoverLink: '#ffffff' },  // Red Text and Black Background
        { primary: '#26bd00', background: '#000000', text: '#ffffff', buttonBg: '#000000', buttonBorder: '#26bd00', link: '#26bd00', hoverLink: '#ffffff' },  // Default Green
        { primary: '#FF6347', background: '#FFFFFF', text: '#333333', buttonBg: '#FFFFFF', buttonBorder: '#FF6347', link: '#FF6347', hoverLink: '#ffffff' }, // Tomato Red (white background)
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Add event listener to the Random Color button
document.getElementById('randomColorBtn').addEventListener('click', function () {
    const randomColor = getRandomColor();
    document.documentElement.style.setProperty('--primary-color', randomColor.primary);
    document.documentElement.style.setProperty('--background-color', randomColor.background);
    document.documentElement.style.setProperty('--text-color', randomColor.text);
    document.documentElement.style.setProperty('--button-bg-color', randomColor.buttonBg);
    document.documentElement.style.setProperty('--button-border-color', randomColor.buttonBorder);
    document.documentElement.style.setProperty('--link-color', randomColor.link);
    document.documentElement.style.setProperty('--hover-link-color', randomColor.hoverLink);
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to add the animation class when the element is in the viewport
function handleScroll() {
    const mainSection = document.querySelector('.main-section'); // Main section you want to animate

    if (isInViewport(mainSection) && !mainSection.classList.contains('animate-left')) {
        mainSection.classList.add('animate-left'); // Add the animation class when the section is in the viewport
    }
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check in case the section is already in view when the page loads
handleScroll();
