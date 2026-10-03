/* ==========================================
   ELEMENTS
========================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.querySelector(".buttons");
const noMessage = document.getElementById("noMessage");

let noCount = 0;


/* ==========================================
   NO BUTTON
========================================== */

const noMessages = [
    "Are you sure? 🥺",
    "Think again! 💕",
    "Really? 😭",
    "Please say yes! 🥹",
    "Come onnn! ❤️",
    "You can't escape forever! 😂",
    "Just say YES! 💍"
];


noBtn.addEventListener("click", function () {

    noCount++;

    if (noCount < noMessages.length) {

        noMessage.innerText =
            noMessages[noCount - 1];

        moveNoButton();

        yesBtn.style.transform =
            `scale(${1 + noCount * 0.08})`;

    }

    else {

        noMessage.innerText =
            "Okay okay... just press YES! ❤️";

        noBtn.style.display = "none";

        yesBtn.style.transform =
            "scale(1.5)";

    }

});


/* ==========================================
   MOVE NO BUTTON
========================================== */

function moveNoButton() {

    const areaWidth =
        buttons.clientWidth;

    const areaHeight =
        buttons.clientHeight;

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;

    const maxX =
        Math.max(
            0,
            (areaWidth - buttonWidth) / 2
        );

    const maxY =
        Math.max(
            0,
            (areaHeight - buttonHeight) / 2
        );

    const x =
        (Math.random() * maxX * 2) - maxX;

    const y =
        (Math.random() * maxY * 2) - maxY;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* ==========================================
   YES BUTTON
========================================== */

yesBtn.addEventListener("click", function () {

    showScreen("celebrationScreen");

    createConfetti();
    startHearts();

});


/* ==========================================
   CHANGE SCREEN
========================================== */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function (screen) {

        screen.classList.remove("active");

    });


    const selectedScreen =
        document.getElementById(screenId);

    if (selectedScreen) {

        selectedScreen.classList.add("active");

    }

}


/* ==========================================
   MY APPROVAL
========================================== */

function goToMyApproval() {

    showScreen("myApprovalScreen");

    setTimeout(function () {

        resizeSignatureCanvas(
            "mySignature"
        );

    }, 100);

}


/* ==========================================
   SAVE MY SIGNATURE
========================================== */

function saveMySignature() {

    const canvas =
        document.getElementById(
            "mySignature"
        );

    const image =
        document.getElementById(
            "mySignatureImage"
        );

    if (canvas && image) {

        image.src =
            canvas.toDataURL("image/png");

    }

}


/* ==========================================
   HIS APPROVAL
========================================== */

function goToHisApproval() {

    /*
       Save Kiran's signature first
    */

    saveMySignature();


    showScreen(
        "hisApprovalScreen"
    );


    setTimeout(function () {

        resizeSignatureCanvas(
            "hisSignature"
        );

    }, 100);

}


/* ==========================================
   SAVE HIS SIGNATURE
========================================== */

function saveHisSignature() {

    const canvas =
        document.getElementById(
            "hisSignature"
        );

    const image =
        document.getElementById(
            "hisSignatureImage"
        );

    if (canvas && image) {

        image.src =
            canvas.toDataURL("image/png");

    }

}


/* ==========================================
   FINISH PROPOSAL
========================================== */

function finishProposal() {

    /*
       Save both signatures
    */

    saveMySignature();

    saveHisSignature();


    /*
       Add current date
    */

    const dateElement =
        document.getElementById(
            "certificateDate"
        );

    if (dateElement) {

        dateElement.innerText =
            new Date().toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );

    }


    /*
       Show final declaration
    */

    showScreen(
        "finalScreen"
    );


    createConfetti();

    startHearts();


    /*
       Extra hearts
    */

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}


/* ==========================================
   SIGNATURE SYSTEM
========================================== */

function setupSignature(canvasId) {

    const canvas =
        document.getElementById(
            canvasId
        );

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");

    let drawing = false;


    /* ======================================
       RESIZE CANVAS
    ====================================== */

    function resizeCanvas() {

        const rect =
            canvas.getBoundingClientRect();

        const ratio =
            window.devicePixelRatio || 1;


        canvas.width =
            rect.width * ratio;

        canvas.height =
            rect.height * ratio;


        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );


        ctx.lineWidth = 2.5;

        ctx.lineCap = "round";

        ctx.lineJoin = "round";

    }


    resizeCanvas();


    /* ======================================
       GET POSITION
    ====================================== */

    function getPosition(event) {

        const rect =
            canvas.getBoundingClientRect();

        let clientX;
        let clientY;


        if (
            event.touches &&
            event.touches.length > 0
        ) {

            clientX =
                event.touches[0].clientX;

            clientY =
                event.touches[0].clientY;

        }

        else {

            clientX =
                event.clientX;

            clientY =
                event.clientY;

        }


        return {

            x:
                clientX - rect.left,

            y:
                clientY - rect.top

        };

    }


    /* ======================================
       START DRAWING
    ====================================== */

    function startDrawing(event) {

        drawing = true;

        const position =
            getPosition(event);


        ctx.beginPath();

        ctx.moveTo(
            position.x,
            position.y
        );


        event.preventDefault();

    }


    /* ======================================
       DRAW
    ====================================== */

    function draw(event) {

        if (!drawing) {

            return;

        }


        const position =
            getPosition(event);


        ctx.lineTo(
            position.x,
            position.y
        );


        ctx.stroke();


        event.preventDefault();

    }


    /* ======================================
       STOP DRAWING
    ====================================== */

    function stopDrawing() {

        drawing = false;

        ctx.closePath();

    }


    /* ======================================
       MOUSE EVENTS
    ====================================== */

    canvas.addEventListener(
        "mousedown",
        startDrawing
    );

    canvas.addEventListener(
        "mousemove",
        draw
    );

    canvas.addEventListener(
        "mouseup",
        stopDrawing
    );

    canvas.addEventListener(
        "mouseleave",
        stopDrawing
    );


    /* ======================================
       TOUCH EVENTS
    ====================================== */

    canvas.addEventListener(
        "touchstart",
        startDrawing,
        {
            passive: false
        }
    );

    canvas.addEventListener(
        "touchmove",
        draw,
        {
            passive: false
        }
    );

    canvas.addEventListener(
        "touchend",
        stopDrawing
    );


    /* ======================================
       RESIZE
    ====================================== */

    window.addEventListener(
        "resize",
        resizeCanvas
    );

}


/* ==========================================
   CLEAR SIGNATURE
========================================== */

function clearSignature(canvasId) {

    const canvas =
        document.getElementById(
            canvasId
        );

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

}


/* ==========================================
   RESIZE SIGNATURE CANVAS
========================================== */

function resizeSignatureCanvas(canvasId) {

    const canvas =
        document.getElementById(
            canvasId
        );

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");


    const rect =
        canvas.getBoundingClientRect();


    const ratio =
        window.devicePixelRatio || 1;


    canvas.width =
        rect.width * ratio;

    canvas.height =
        rect.height * ratio;


    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );


    ctx.lineWidth = 2.5;

    ctx.lineCap = "round";

    ctx.lineJoin = "round";

}


/* ==========================================
   START BOTH SIGNATURE PADS
========================================== */

setupSignature(
    "mySignature"
);

setupSignature(
    "hisSignature"
);


/* ==========================================
   FLOATING HEART
========================================== */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    const heartTypes = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"

    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        (
            15 +
            Math.random() * 30
        ) + "px";


    document.body.appendChild(
        heart
    );


    setTimeout(function () {

        heart.remove();

    }, 6000);

}


/* ==========================================
   CONTINUOUS HEARTS
========================================== */

function startHearts() {

    setInterval(function () {

        createHeart();

    }, 500);

}


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti"
        );


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.backgroundColor =
            getRandomColor();


        piece.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        piece.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        container.appendChild(
            piece
        );


        setTimeout(function () {

            piece.remove();

        }, 6000);

    }

}


/* ==========================================
   CONFETTI COLORS
========================================== */

function getRandomColor() {

    const colors = [

        "#ff4f81",
        "#ff9fba",
        "#ffd166",
        "#ffffff",
        "#c77dff",
        "#ff6b9a"

    ];


    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

}


/* ==========================================
   RESET EVERYTHING
========================================== */

function resetEverything() {

    const myCanvas =
        document.getElementById(
            "mySignature"
        );

    const hisCanvas =
        document.getElementById(
            "hisSignature"
        );


    if (myCanvas) {

        myCanvas
            .getContext("2d")
            .clearRect(
                0,
                0,
                myCanvas.width,
                myCanvas.height
            );

    }


    if (hisCanvas) {

        hisCanvas
            .getContext("2d")
            .clearRect(
                0,
                0,
                hisCanvas.width,
                hisCanvas.height
            );

    }


    const myImage =
        document.getElementById(
            "mySignatureImage"
        );

    const hisImage =
        document.getElementById(
            "hisSignatureImage"
        );


    if (myImage) {

        myImage.removeAttribute(
            "src"
        );

    }


    if (hisImage) {

        hisImage.removeAttribute(
            "src"
        );

    }


    const dateElement =
        document.getElementById(
            "certificateDate"
        );


    if (dateElement) {

        dateElement.innerText = "";

    }


    noCount = 0;

    noMessage.innerText = "";

    noBtn.style.display = "";

    noBtn.style.transform =
        "translate(0, 0)";

    yesBtn.style.transform =
        "scale(1)";


    showScreen(
        "questionScreen"
    );

}