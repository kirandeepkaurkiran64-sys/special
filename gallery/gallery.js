const gallery = document.getElementById("gallery");

const totalPhotos = 39;      // Total number of photos
const photosPerClick = 8;    // Show 8 photos each time

let visiblePhotos = 8;

// Create the gallery
function loadGallery() {

    // Clear the gallery
    gallery.innerHTML = "";

    // Show visible photos
    for (let i = 1; i <= visiblePhotos && i <= totalPhotos; i++) {

        const img = document.createElement("img");
        img.src = `images/${i}.jpg`;
        img.alt = `Photo ${i}`;

        gallery.appendChild(img);
    }

    // Add the + card if there are more photos
    if (visiblePhotos < totalPhotos) {

        const plus = document.createElement("div");
        plus.className = "plus-card";
        plus.innerHTML = "+";

        plus.onclick = function () {
            visiblePhotos += photosPerClick;
            loadGallery();
        };

        gallery.appendChild(plus);
    }
}

// Load the gallery when the page opens
loadGallery();