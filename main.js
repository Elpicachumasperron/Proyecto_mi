// Fondo animado con azules y negros
const colors = [
    '#0a1a2f', // negro azulado
    '#001f3f', // azul oscuro
    '#003366', // azul profundo
    '#00509e', // azul medio
    '#0a1a2f',  // para cerrar el ciclo
    '#82aee7ff'
];
let step = 0;
let colorIndex = 0;
let nextColorIndex = 1;
const stepsTotal = 200;

function lerpColor(a, b, t) {
    // Interpolación lineal entre dos colores hex
    const ah = parseInt(a.replace('#', ''), 16);
    const bh = parseInt(b.replace('#', ''), 16);
    const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
    const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return `rgb(${rr},${rg},${rb})`;
}

function animateBackground() {
    step++;
    if (step > stepsTotal) {
        step = 0;
        colorIndex = nextColorIndex;
        nextColorIndex = (nextColorIndex + 1) % colors.length;
    }
    const t = step / stepsTotal;
    const color = lerpColor(colors[colorIndex], colors[nextColorIndex], t);
    document.body.style.background = color;
    requestAnimationFrame(animateBackground);
}

animateBackground();
