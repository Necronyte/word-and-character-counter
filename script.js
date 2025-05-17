const textarea = document.querySelector("textarea");
const wordCounter = document.getElementById("word-counter");
const charCounter = document.getElementById("character-counter");
const clearButton = document.querySelector("button");

function updateCounters(){
    const text = textarea.value;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const characters = text.length;

    wordCounter.textContent = `Word Counter: ${words}`;
    charCounter.textContent = `Character Counter: ${characters}`;
}

textarea.addEventListener("input",updateCounters);

clearButton.addEventListener("click", () => {
    textarea.value = "";
    updateCounters();
});