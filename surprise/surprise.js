function openGift(){

    document.getElementById("surpriseContent").style.display = "block";

    document.querySelector(".gift-section").style.display = "none";

}

function openFinalPopup(){

    document.getElementById("finalPopup").style.display = "flex";

}

function closePopup(){

    document.getElementById("finalPopup").style.display = "none";

}

window.onclick = function(event){

    if(event.target == document.getElementById("finalPopup")){

        closePopup();

    }

}