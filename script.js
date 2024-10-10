document.getElementById("clickMeBtn").addEventListener("click", function() {
    this.style.display = "none";
    playCongratsAudio();
    blowBalloons();
});

function playCongratsAudio() {
    const audio = document.getElementById("congratsAudio");
    audio.play();
}

function blowBalloons() {
    const balloonContainer = document.getElementById("balloonContainer");
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 2 + 4 + 's';
        balloon.style.transform = `scale(${Math.random() * 0.5 + 0.8})`;
        balloon.style.background = getRandomGradient();
        balloonContainer.appendChild(balloon);
    }

    setTimeout(() => {
        document.getElementById("congratsMessage").classList.remove("hidden");
        document.getElementById("continueBtn").classList.remove("hidden");
    }, 1000);
}

function getRandomGradient() {
    const gradients = [
        "radial-gradient(circle, #ff9ff3, #feca57)",
        "radial-gradient(circle, #54a0ff, #ff6b6b)",
        "radial-gradient(circle, #48dbfb, #ff9ff3)",
        "radial-gradient(circle, #00d2d3, #ff9ff3)",
        "radial-gradient(circle, #ff9ff3, #ff4757)"
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
}

document.getElementById("continueBtn").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("formContainer").classList.remove("hidden");
});

