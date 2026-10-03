const ideas = [
    {
        title: "👓 remove your specks for 10 mint",
        text: "Let me see your beautiful eyes.",
        image: "images/coffee.png"
    },
    {
        title: "🍦 Ice Cream Date",
        text: "Let's try new ice cream flavours together.",
        image: "images/icecream.png"
    },
    {
        title: "🥞🌯 dosa party",
        text: "Hot dosas, tasty chutney, and good company!.",
        image: "images/sunset.png"
    },
    {
        title: "🎬 Movie date",
        text: "You choose the movie and I'll bring the snacks.",
        image: "images/movie.png"
    },
    {
        title: "🚗 Long Drive",
        text: "No destination, just music and us.",
        image: "images/drive.png"
    },
    {
        title: "⭐ Adore the other ",
        text: "kiss and annoy the another person and the other person is statue.",
        image: "images/adore.png"
    },
    {
        title: "📸 Photo Challenge",
        text: "Take the cutest selfie together today!",
        image: "images/photo.png"
    },
    {
        title: "🎲 Truth or Dare",
        text: "Time to play! Be honest... 😄",
        image: "images/dare.png"
    }
];

let currentRotation = 0;
let spins = 0;

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

spinBtn.addEventListener("click", spinWheel);

function spinWheel() {

    spinBtn.disabled = true;

    // Choose a random idea
    const random = Math.floor(Math.random() * ideas.length);

    // Each slice is 45 degrees
    const sectionAngle = 360 / ideas.length;

    // Middle of the selected slice
    const targetAngle = (random * sectionAngle) + (sectionAngle / 2);

    /*
        The pointer is at the top.

        We calculate where the wheel needs to stop
        so that the selected slice comes exactly under
        the pointer.
    */

    const desiredRotation = 360 - targetAngle;

    // Current position of the wheel
    const currentMod = ((currentRotation % 360) + 360) % 360;

    // Calculate how much more we need to rotate
    let rotationDifference = desiredRotation - currentMod;

    if (rotationDifference < 0) {
        rotationDifference += 360;
    }

    // Add 5 complete spins
    currentRotation += (360 * 5) + rotationDifference;

    // Rotate wheel
    wheel.style.transition = "transform 5s cubic-bezier(.17,.67,.2,1)";
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Update result after wheel stops
    setTimeout(() => {

        document.getElementById("resultTitle").textContent =
            ideas[random].title;

        document.getElementById("resultText").textContent =
            ideas[random].text;

        document.getElementById("resultImage").src =
            ideas[random].image;

        document.getElementById("lastResult").textContent =
            ideas[random].title;

        spins++;

        document.getElementById("spinCount").textContent = spins;

        spinBtn.disabled = false;

    }, 5000);
}