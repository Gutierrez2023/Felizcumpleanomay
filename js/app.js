const bouquet = document.getElementById("bouquet");
const colors = [
  { main: "#F44336", light: "#D50000" },
  { main: "#EC407A", light: "#E91E63" },
  { main: "#BA68C8", light: "#AB47BC" },
  { main: "#9575CD", light: "#B39DDB" },
  { main: "#9FA8DA", light: "#7986CB" },
  { main: "#EF9A9A", light: "#E57373" },
];
const positions = [
  { left: "60%", height: "110%", rotate: "0deg", zIndex: 1 },
  { left: "30%", height: "95%", rotate: "-10deg", zIndex: 7 },
  { left: "70%", height: "95%", rotate: "10deg", zIndex: 8 },
  { left: "40%", height: "110%", rotate: "0deg", zIndex: 3 },
  { left: "55%", height: "90%", rotate: "10deg", zIndex: 8 },
  { left: "45%", height: "90%", rotate: "-10deg", zIndex: 9 },
];

function createFlower(i) {
  const flowerStemContainer = document.createElement("div");
  flowerStemContainer.className = "flower-stem-container";
  flowerStemContainer.style.left = positions[i].left;
  flowerStemContainer.style.height = positions[i].height;
  flowerStemContainer.style.transform = `translateX(-50%) rotate(${positions[i].rotate})`;
  flowerStemContainer.style.zIndex = positions[i].zIndex;

  const stem = document.createElement("div");
  stem.className = "stem";

  for (let k = 0; k < 4; k++) {
    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.style.top = `${30 + k * 20}%`;
    stem.appendChild(leaf);
  }

  const gerbera = document.createElement("div");
  gerbera.className = "gerbera";

  for (let j = 0; j < 16; j++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.transform = `rotate(${j * 22.5}deg) translateY(-50%)`;
    petal.style.background = j % 2 === 0 ? colors[i].main : colors[i].light;
    gerbera.appendChild(petal);
  }

  const center = document.createElement("div");
  center.className = "center";
  gerbera.appendChild(center);

  flowerStemContainer.appendChild(stem);
  flowerStemContainer.appendChild(gerbera);
  bouquet.appendChild(flowerStemContainer);
}

for (let i = 0; i < 6; i++) {
  createFlower(i);
}

// Código para el modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const openModalBtn = document.getElementById("openModalBtn");
const enlace = document.querySelector(".modal-content a");

function palpitarEnlace() {
  if (enlace && modal.style.display === "block") {
    enlace.classList.add("palpitando");
  }
}

// Abrir el modal cuando se hace clic en el botón
openModalBtn.onclick = function () {
  modal.style.display = "block";
  palpitarEnlace(); // Iniciar la palpitación del enlace
};

// Cerrar el modal cuando se hace clic en la X
function detenerPalpitacion() {
  if (enlace) {
    enlace.classList.remove("palpitando");
  }
}

span.onclick = function () {
  modal.style.display = "none";
  detenerPalpitacion();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    detenerPalpitacion();
  }
};

// Reproducción de audio al hacer clic en el botón
openModalBtn.addEventListener("click", function() {
  const audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0; // Reiniciar el audio al principio
  }
});

// Palpitar el botón periódicamente
function palpitarBoton() {
  openModalBtn.classList.add("palpitando");
}

setInterval(() => {
  openModalBtn.classList.toggle("palpitando");
}, 3000); // Cambia la clase cada 3 segundos
