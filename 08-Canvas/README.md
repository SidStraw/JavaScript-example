---
title: JS 30-8 畫板
tags: JS
notebook: 10前端筆記
---

# JS 30-8 畫板
學習重點：
了解使用 Canvas 的使用與設定

基本屬性
> getContext()
用以取得設定畫布各項細節的物件的方法，使用此方法取得物件之後才能針對各項繪畫細節進行設定
使用範例如下：
```JS
var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d'); //不可打成大寫
```

>本題用到的屬性
lineCap：筆觸的形狀，有 round | butt | square 圓、平、方三種。
lineJoin：線條相交的樣式，有 round | bevel | miter 圓交、斜交、斜接三種。
lineWidth：線條的寬度
strokeStyle：線條描邊的顏色
fillStyle：填充的顏色

>本題用到的 `CanvasRenderingContext2D` 方法
beginPath()：新建一條路徑
stroke()：在2d的環境中，stroke()方法是將繪畫設定的內容給繪製到canvas上。
moveTo()：（此次）繪製操作的起點
lineTo()：路徑的終點


關於 `CanvasRenderingContext2D` 的API資料：
https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D

```JS
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
    if (hsl >= 360) hsl = 0; //顏色變化
    if (ctx.lineWidth >= 100) lineAdd = false; //線條變化
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
```