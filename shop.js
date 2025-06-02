// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active states
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Activate clicked tab
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// Gacha pull logic
const gachaButton = document.getElementById("gacha-button");
const gachaResult = document.getElementById("gacha-result");

const characters = [
  "🌟 Blade Knight",
  "🧙‍♀️ Crystal Witch",
  "🔥 Pyro Rogue",
  "🌬️ Wind Archer",
  "🛡️ Iron Sentinel"
];

gachaButton.onclick = () => {
  const random = characters[Math.floor(Math.random() * characters.length)];
  gachaResult.textContent = "You pulled: " + random;
};

// Currency value
let currency = 0;

// Button logic
document.querySelector('[data-tab="buy"]').addEventListener('click', () => {
  // Show top-up tab (already handled earlier, likely)

  // Simulate top-up: add 100 currency
  currency += 100;

  // Update the display
  document.getElementById('currency-display').textContent = `💰 ${currency}`;
});

function playClickSound() {
    let clickSound = document.getElementById("click-sound");
    clickSound.volume= 0.3
    clickSound.currentTime = 0; // rewind to start
    clickSound.play();
  }