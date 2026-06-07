let speech;

function playAudio() {

    speechSynthesis.cancel();

    const text =
        document.getElementById("gallery-content")
        .innerText;

    speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.95;
    speech.pitch = 1;
    speech.volume = 1;

    speechSynthesis.speak(speech);
}

function stopAudio() {

    speechSynthesis.cancel();
}