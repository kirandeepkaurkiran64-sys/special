function openPopup(title, text) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popupTitle").innerHTML = title;

    document.getElementById("popupText").innerHTML = text;
}


// Close popup using X

document.querySelector(".close").onclick = function () {

    document.getElementById("popup").style.display = "none";

};


// Close popup by clicking outside

window.onclick = function (event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";

    }

};


// Show more reasons

function showMoreReasons() {

    document.getElementById("moreReasons").style.display = "grid";

    document.getElementById("showMoreBtn").style.display = "none";

}