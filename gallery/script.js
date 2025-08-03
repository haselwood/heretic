const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImg = document.querySelectorAll('.gallery-img');
const caption = document.querySelectorAll('.caption');
let currentlySelectedimg = 0;
let currentlySelectedcaption = 0;

prevBtn.addEventListener('click', function() {
galleryImg[currentlySelectedimg].classList.remove('active');
currentlySelectedimg--;
galleryImg[currentlySelectedimg].classList.add('active');
caption[currentlySelectedcaption].classList.remove('active');
currentlySelectedcaption--;
caption[currentlySelectedcaption].classList.add('active');
nextBtn.disabled = false;

if (currentlySelectedimg === 0) {
    prevBtn.disabled = true;
}
});

nextBtn.addEventListener('click', function() {
galleryImg[currentlySelectedimg].classList.remove('active');
caption[currentlySelectedcaption].classList.remove('active');
prevBtn.disabled = false;

// Check if we're at the last image
if (galleryImg.length === currentlySelectedimg + 1) {
    // Cycle back to first image
    currentlySelectedimg = 0;
    currentlySelectedcaption = 0;
    nextBtn.textContent = 'Next';
} else {
    // Move to next image
    currentlySelectedimg++;
    currentlySelectedcaption++;
}

galleryImg[currentlySelectedimg].classList.add('active');
caption[currentlySelectedcaption].classList.add('active');

// Update button text for next click
if (galleryImg.length === currentlySelectedimg + 1) {
    nextBtn.textContent = 'Start Over';
    prevBtn.disabled = true;
}
});