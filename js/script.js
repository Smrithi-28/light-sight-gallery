let speech;

function playAudio() {

    const text =
        document.getElementById("gallery-content")
        .innerText;

    speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.95;
    speech.pitch = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
}

function pauseAudio() {
    speechSynthesis.pause();
}

function resumeAudio() {
    speechSynthesis.resume();
}

function stopAudio() {
    speechSynthesis.cancel();
}