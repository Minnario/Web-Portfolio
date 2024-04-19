document.getElementById('ballButton').addEventListener('click', createBalls);

function createBalls() {
  const ballContainer = document.getElementById('ballContainer');

  for (let i = 0; i < 10; i++) {
    const ball = document.createElement('img');
    ball.src = 'ball.png'; // Replace 'ball.png' with your duck image path
    ball.classList.add('ball');
    ball.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    ball.style.animation = 'ballFall 5s linear'; // Adjust the animation duration if needed

    ballContainer.appendChild(ball);

    // Remove the duck after the animation is complete
    ball.addEventListener('animationend', () => {
      ball.remove();
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.about-me-image');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.forEach((dot) => dot.classList.remove('active'));

    slides[index].style.display = 'block';
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 1000); // Change slide every 2 seconds

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
});

/* contact form page */

const form = document.getElementById('contact-form');
const messageContainer = document.getElementById('message-container');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const question = document.getElementById('question').value;

  // You can add form validation here (optional)

  const message = `
        <b>Name:</b> ${name}<br>
        <b>Phone:</b> ${phone}<br>
        <b>Email:</b> ${email}<br>
        <b>Question:</b> ${question}<br>
      `;

  // Create a new message element
  const newMessage = document.createElement('div');
  newMessage.classList.add('message'); // Add the 'message' class
  newMessage.innerHTML = message;

  // Append the new message to the container
  messageContainer.appendChild(newMessage);

  form.reset(); // Reset form after submission
});

// graphic design page

function openLightbox(imagePath) {
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-image').src = imagePath;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// work experience
