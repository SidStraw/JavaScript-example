const myDraw = document.getElementById('draw');
const ctx = myDraw.getContext('2d');

let drawing = false;
let lineAdd = true;
let downX = 0;
let downY = 0;
let hsl = 0;

myDraw.width = window.innerWidth;
myDraw.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round'


function draw(e) {
    if (!drawing) return;
    ctx.beginPath();
    ctx.moveTo(downX, downY);
    ctx.lineTo(e.offsetX, e.offsetY);
    [downX, downY] = [e.offsetX, e.offsetY];
    ctx.strokeStyle = `HSL(${hsl},50%,50%)`;
    ctx.stroke();
    hsl++;
    if (hsl >= 360) hsl = 0;
    ctx.lineWidth <= 100 ? lineAdd = true : lineAdd = false;
    lineAdd ? ctx.lineWidth++ : ctx.lineWidth--;

}


myDraw.addEventListener('mousemove', draw);
myDraw.addEventListener('mousedown', e => {
    drawing = true;
    [downX, downY] = [e.offsetX, e.offsetY]
});
myDraw.addEventListener('mouseup', () => drawing = false);
myDraw.addEventListener('mouseout', () => drawing = false);