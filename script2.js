const flipTexts = document.querySelectorAll('.flip-text');

function flipLetters() {
  flipTexts.forEach((text) => {
    text.classList.toggle('flip');
  });
}

setInterval(flipLetters, 1000); // Flips every 1 second (adjust as needed)

flipLetters(); // Initial flip to start the animation
