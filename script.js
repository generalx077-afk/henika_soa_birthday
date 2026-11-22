const message = `Joyeux anniversaire, Henintsoa!

Aujourd’hui est un jour spécial, et je te souhaite tout le bonheur du monde. Que cette nouvelle année de ta vie soit remplie de joie,de réussite, de belles surprises et de moments inoubliables.

Continue de sourire PETITE ;) continue de t'entrainer au basket si tu veux me battre un jour XD, bref crois en tes rêves !  profite de ta vie et fais toujours confiance en Dieu.
Henßfän ♥`;

const button = document.getElementById('openButton');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const typedMessage = document.getElementById('typedMessage');
const status = document.getElementById('status');
let opened = false;

button.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  button.disabled = true;
  button.textContent = 'OPENING YOUR SURPRISE...';
  status.textContent = 'A little message just for you...';
  envelope.classList.add('open');
  letter.setAttribute('aria-hidden', 'false');

  window.setTimeout(() => {
    letter.classList.add('visible');
    typeMessage();
  }, 520);
});

function typeMessage() {
  let index = 0;
  const timer = window.setInterval(() => {
    typedMessage.textContent = message.slice(0, index);
    index += 2;
    if (index > message.length) {
      window.clearInterval(timer);
      typedMessage.textContent = message;
      status.textContent = 'HAPPY BIRTHDAY, HENINTSOA! 🎉';
      launchConfetti(90);
    }
  }, 28);
}

function launchConfetti(amount) {
  const colors = ['#FF5C9A', '#8055D9', '#FFD95A', '#61C9B8', '#FF925C', '#A5D8FF'];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement('span');
    const size = 5 + Math.random() * 6;
    piece.className = 'confetti';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.width = size + 'px';
    piece.style.height = size + 'px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
    piece.style.setProperty('--duration', (2.7 + Math.random() * 2.2) + 's');
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5200);
  }
}
