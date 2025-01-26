const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Periodic table elements (excluding noble gases)
const elements = [
  { symbol: "H", color: "#FF0000" }, // Red for hydrogen
  { symbol: "Li", color: "#FFA500" }, // Orange for alkali metals
  { symbol: "Be", color: "#FFFF00" }, // Yellow for alkaline earth metals
  { symbol: "B", color: "#00FF00" }, // Green for metalloids
  { symbol: "C", color: "#00FFFF" }, // Cyan for non-metals
  { symbol: "N", color: "#1E90FF" }, // Blue for non-metals
  { symbol: "O", color: "#0000FF" }, // Dark blue for non-metals
  { symbol: "F", color: "#8A2BE2" }, // Purple for halogens
  { symbol: "Na", color: "#FF4500" }, // Deep orange for alkali metals
  { symbol: "Mg", color: "#FFD700" }, // Gold for alkaline earth metals
  { symbol: "Al", color: "#B22222" }, // Firebrick for post-transition metals
  { symbol: "Si", color: "#FF1493" }, // Pink for metalloids
  { symbol: "P", color: "#4B0082" }, // Indigo for non-metals
  { symbol: "S", color: "#9400D3" }, // Dark violet for non-metals
  { symbol: "Cl", color: "#00FA9A" }, // Medium spring green for halogens
  { symbol: "K", color: "#FF6347" }, // Tomato red for alkali metals
  { symbol: "Ca", color: "#7FFF00" }, // Chartreuse for alkaline earth metals
  // Add more elements as needed
];

// Amino acids
const aminoAcids = [
  { symbol: "ALA", color: "#8A2BE2" }, // Purple
  { symbol: "VAL", color: "#00FF7F" }, // Spring green
  { symbol: "GLY", color: "#FF4500" }, // Orange
  { symbol: "SER", color: "#4682B4" }, // Steel blue
  { symbol: "THR", color: "#2E8B57" }, // Sea green
  { symbol: "LYS", color: "#FF1493" }, // Pink
];

// Combine elements and amino acids
const symbols = [...elements, ...aminoAcids];

const fontSize = 16;
const columns = canvas.width / fontSize; // Number of columns for the rain
const drops = Array(Math.floor(columns)).fill(1);

// Draw function
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Faint trail effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, x) => {
    const { symbol, color } = symbols[Math.floor(Math.random() * symbols.length)];
    ctx.fillStyle = color; // Set color for each element or amino acid
    ctx.fillText(symbol, x * fontSize, y * fontSize);

    // Randomly reset the drop
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[x] = 0;
    }

    drops[x]++;
  });
}

setInterval(draw, 50);
