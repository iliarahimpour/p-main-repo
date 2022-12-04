let count = 0;
function counter() {
    let text = document.querySelector("h1");
    count++;
    text.innerHTML = count;
    if (count % 10 === 0) {
        alert(`The count is now ${count}`);
    }
}
document.querySelector("button").onclick = counter;


// document.addEventListener("click", function () { document.querySelector("button").style.backgroundColor = "red" });