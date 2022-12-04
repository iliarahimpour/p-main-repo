function giveAlert() {
    const h1 = document.querySelector("h1");
    if (h1.innerHTML == "Hello!") {
        h1.innerHTML = "Goodbye!";
    }
    else {
        h1.innerHTML = "Hello!";
    }
}