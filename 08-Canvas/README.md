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