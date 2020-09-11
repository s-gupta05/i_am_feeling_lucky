window.onload = function () {
    const url = "http://localhost:3000/iamfeelinglucky/data";
    const optDetails = {
        method: "get",
        mode: "cors"
    }

    function getData() {
        fetch(url, optDetails)
            .then(response => response.json())
            .then(json => quoteText.textContent = json.quote);
    }

    let btnButton = document.getElementById("lucky");
    let quoteText   = document.getElementById("quote");
    btnButton.addEventListener('click', getData);
};