const canvas = document.getElementById('galaxisHatter');
const ctx = canvas.getContext('2d');

// Canvas méret beállítása a böngésző ablak méretére
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Galaxisos háttér létrehozása
const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 2;
  stars.push({ x, y, radius });
}

// Animáció függvény
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  // Csillagok mozgása (x tengelyen)
  for (const star of stars) {
    star.x -= 0.1;

    if (star.x < 0) {
      star.x = canvas.width;
    }
  }

  requestAnimationFrame(animate);
}

animate();