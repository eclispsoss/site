function toggleInfo(infoId) {
    var infoElement = document.getElementById(infoId);
    if (infoElement.style.display === "block") {
        infoElement.style.display = "none";
    } else {
        infoElement.style.display = "block";
    }
}

