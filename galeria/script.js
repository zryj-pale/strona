
function rng(min, max, seedFactor) {
    const date = new Date();
    const seed = +(date.getUTCFullYear() + (date.getUTCMonth() + 1) + date.getUTCDate()) + seedFactor;
    const random = Math.pow(seed, seedFactor)
    const result = (random % (max - min + 1)) + min - 1;
    return result;
}

// Image manipulation factors
const randomContrast = (rng(10, 100, 3)/10).toFixed();
const randomSaturate = (rng(10, 100, 4)/10).toFixed();
const randomBrightness = (rng(10, 50, 5)/10).toFixed();
const randomHue = (rng(-360, 360, 6)).toFixed();

// Load gallery images
const gallery = document.getElementById("imageGallery");
const numOfImages = 42;

for (let i = 1; i <= numOfImages; i++) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = "zdjecia/" + i + ".jpg";
    img.alt = `Image ${i}`;
    
    galleryItem.onload = galleryItem.style.filter = `contrast(${randomContrast}) saturate(${randomSaturate}) brightness(${randomBrightness}) hue-rotate(${randomHue}deg)`;
    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
}

// Display image of the day
const imgOfDay = document.getElementById("zdjecieDnia");
const imgId = rng(1, numOfImages, 3);
imgOfDay.src = "zdjecia/" + imgId + ".jpg";

// Countdown timer
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('February 22, 2033 22:22:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
    countdownElement.textContent = distance;
    } else {
    countdownElement.textContent = "zryj pale made it out of nothing";
    }
}

setInterval(updateCountdown, 1);