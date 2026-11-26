
const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const ending = document.getElementById("ending");

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const nextButton = document.getElementById("nextButton");
const replayButton = document.getElementById("replayButton");

const message = document.getElementById("message");
const petals = document.getElementById("petals");

// Ucapan untuk Ustazah Cahya
const letterText = `Thank you for being such a wonderful teacher.

Terima kasih sudah mengajarkan banyak hal, bukan cuma tentang pelajaran, tapi juga tentang menjadi pribadi yang lebih baik.

I'm really grateful to have a teacher like you. Semoga setiap ilmu yang Ustazah bagikan menjadi amal jariyah yang terus mengalir.

May Allah always protect you, give you good health, and fill your days with happiness and barakah.

Happy Teacher's Day, Ustazah Cahya.
You deserve all the good things in this world. ♡`;

// Pindah halaman
function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(function(item) {
    item.classList.remove("active");
  });

  screen.classList.add("active");
}

// Buka amplop
openButton.addEventListener("click", function() {
  envelope.classList.add("open");

  setTimeout(function() {
    showScreen(letter);
    typeMessage();
    createPetals();
  }, 700);
});

// Animasi tulisan
function typeMessage() {
  message.textContent = "";

  let index = 0;

  function write() {
    if (index < letterText.length) {
      message.textContent += letterText.charAt(index);
      index++;

      setTimeout(write, 22);
    }
  }

  write();
}

// Halaman terakhir
nextButton.addEventListener("click", function() {
  showScreen(ending);
  createPetals();
});

// Ulang dari awal
replayButton.addEventListener("click", function() {
  envelope.classList.remove("open");
  showScreen(opening);
});

// Bunga jatuh
function createPetals() {
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement("div");

    petal.classList.add("petal");
    petal.textContent = ["✿", "❀", "♡"][i % 3];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 4 + Math.random() * 5 + "s";
    petal.style.animationDelay = Math.random() * 2 + "s";
    petal.style.fontSize = 12 + Math.random() * 15 + "px";

    petals.appendChild(petal);

    setTimeout(function() {
      petal.remove();
    }, 10000);
  }
}
