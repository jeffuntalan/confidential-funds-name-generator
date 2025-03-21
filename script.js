// script.js
document.getElementById('birthday-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  generateName();
  displayRandomImage();
});

document.getElementById('dice-button').addEventListener('click', function () {
  // Random month and day
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 31) + 1;

  // Set random values in the form
  document.getElementById('month').value = randomMonth;
  document.getElementById('day').value = randomDay;

  // Generate name
  generateName();
  displayRandomImage();
});

function generateName() {
  // Get the month and day inputs
  const month = parseInt(document.getElementById('month').value);
  const day = parseInt(document.getElementById('day').value);

  // Name and day arrays
  const monthNames = [
    "Mary Grace", "Kokoy ", "Jay", "Miggy", "Dodong", "Xiaome", "Nico", "Vicky", "Abner", "Joy", "Greg", "Jason"
  ];
  const dayNames = [
    "Piattos", "Chippy", "Nova", "Mango", "Durian", "Kamote", "Patatas", "Otso", "Clover", "Villamin", "Bina", "Alcala", "Barok", "Tempura", "Sinigang", "Dinuguan", "Lays", "Ruffles", "Turon", "Lumpia", "Adobo", "Orange", "Milo", "Juice", "C2", "Coke", "Igado", "Coffee", "Bagoong", "Talong", "Barquillos"
  ];

  // Generate name
  const generatedName = monthNames[month - 1] + " " + dayNames[day % 31];

  // Nakawan na boi
  document.getElementById('result').innerText = `${generatedName}`;

  //Unhide Ikaw si:
  document.getElementById('result-container').classList.remove('hidden');
  document.getElementById('image-container').classList.remove('hidden');
}

function displayRandomImage() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
  ];

  // Random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Image source generate
  const imageElement = document.getElementById('random-image');
  imageElement.src = `images/${randomImage}`;

  //Unhide image container
  document.getElementById('image-container').classList.remove('hidden');

  // Display right column
  document.getElementById('right-column').style.display = 'flex';
}