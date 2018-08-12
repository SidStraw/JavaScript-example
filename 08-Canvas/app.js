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
    if (!drawing) return; //判斷滑鼠是否已點擊
    ctx.beginPath(); //將每個點獨立以避免顏色一起變化
    ctx.moveTo(downX, downY); //設定起始位置
    ctx.lineTo(e.offsetX, e.offsetY); //設定終點位置
    [downX, downY] = [e.offsetX, e.offsetY];
    ctx.strokeStyle = `HSL(${hsl},50%,50%)`;
    ctx.stroke(); //將設定好的圖像繪出
    hsl++;
    if (hsl >= 360) hsl = 0;//顏色變化
    if (ctx.lineWidth >= 100) lineAdd = false;//線條變化
    else if (ctx.lineWidth <= 1) lineAdd = true;
    lineAdd ? ctx.lineWidth++ : ctx.lineWidth--;

}


myDraw.addEventListener('mousemove', draw);
myDraw.addEventListener('mousedown', e => {
    drawing = true;
    [downX, downY] = [e.offsetX, e.offsetY]
});
myDraw.addEventListener('mouseup', () => drawing = false);
myDraw.addEventListener('mouseout', () => drawing = false);