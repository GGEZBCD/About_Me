//Last Edited by: Garrett Bates (11/29/2024)

$(document).ready(function() { 
    const $header = $('h1');
    const movementStrength = 50; // Adjust the strength of the movement (lower value = less movement)

    // Make "Garrett Bates" letters follow the mouse pointer
    $header.on('mousemove', function (e) {
        const relX = e.pageX - $(this).offset().left;
        const relY = e.pageY - $(this).offset().top;
        const moveX = (relX / $header.width() * movementStrength) - (movementStrength / 5);
        const moveY = (relY / $header.height() * movementStrength) - (movementStrength / 5);

        $(this).css('transform', `translate(${moveX}px, ${moveY}px)`);
    });

    // Reset the position of "Garrett Bates" when mouse leaves the h1 area
    $header.on('mouseleave', function () {
        $(this).css('transform', 'translate(0px, 0px)');
    });

    // Loading Bar
    $('.loading-bar').on('animationend', function() {
        // Animate an explosion by breaking the loading bar into fragments
        $(this).css({
            'transition': 'transform 0.6s ease, opacity 0.6s ease', // Control the animation timing
            'transform': 'scale(2) rotate(45deg)', // Scale and rotate the bar to simulate explosion
            'opacity': '0' // Fade out as part of explosion
        });
    
        // After the explosion, hide the bar and reset the width
        setTimeout(() => {
            $(this).css({
                'width': '0', // Reset width to 0 for future loads
                'transform': 'scale(1) rotate(0)', // Reset the transformation
                'opacity': '1' // Reset the opacity
            });
        }, 600); // Duration of the explosion effect (same as transition time)
    });
    
    // Bio Section
    $('#show-bio').click(function() {
        $('#bio-text').toggleClass('hidden');
        $(this).text($('#bio-text').hasClass('hidden') ? 'Show Bio' : 'Hide Bio');
    });

    // Skills Section
    $('#show-skills').click(function() {
        $('#skills-list').toggleClass('hidden');
        $(this).text($('#skills-list').hasClass('hidden') ? 'Show Skills' : 'Hide Skills');
    });

    // Education Section
    $('#show-education').click(function() {
        $('#education-text').toggleClass('hidden');
        $(this).text($('#education-text').hasClass('hidden') ? 'Show Education' : 'Hide Education');
    });


    // JavaScript for the image carousel functionality
document.querySelectorAll('.project').forEach(project => {
    const images = [
        'image1.jpg', // Replace with actual image URLs
        'image2.jpg',
        'image3.jpg'
    ];
    let currentIndex = 0;
    
    const leftArrow = project.querySelector('.left-arrow');
    const rightArrow = project.querySelector('.right-arrow');
    const imgElement = project.querySelector('img');

    // Function to update the image
    function updateImage() {
        imgElement.src = images[currentIndex];
    }

    // Add event listeners to the arrows
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around
        updateImage();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Wrap around
        updateImage();
    });
});

    // Hobbies Section
    document.getElementById('show-hobbies').addEventListener('click', function() {
        var moreHobbies = document.getElementById('more-hobbies');
        if (moreHobbies.classList.contains('hidden')) {
            moreHobbies.classList.remove('hidden');
            this.textContent = 'Show Less'; // Change button text
        } else {
            moreHobbies.classList.add('hidden');
            this.textContent = 'Show More'; // Change button text
        }
    });
    
    // Contact Section
    $('#show-contact').click(function() {
        $('#contact-info').toggleClass('hidden');
        $(this).text($('#contact-info').hasClass('hidden') ? 'Show Contact Info' : 'Hide Contact Info');
    });
});

//preload
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Array of GitHub-hosted image paths
const images = [
    "https://github.com/GGEZBCD/About_Me/blob/main/Assets/homelab1.PNG?raw=true",
    "https://github.com/GGEZBCD/About_Me/blob/main/Assets/homelab2.PNG?raw=true",
    "https://github.com/GGEZBCD/About_Me/blob/main/Assets/homelab3.PNG?raw=true"
];

let currentImageIndex = 0; // Track the current image index

// DOM Elements
const pcImage = document.getElementById('pc-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Ensure the image element exists
if (pcImage) {
    // Event Listener for Left Arrow
    leftArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Event Listener for Right Arrow
    rightArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    });

    // Function to update the image source
    function updateImage() {
        if (images[currentImageIndex]) {
            pcImage.src = images[currentImageIndex];
        } else {
            console.error(`Image at index ${currentImageIndex} is undefined.`);
        }
    }
} else {
    console.error("Image element (pcImage) not found in the DOM.");
}

