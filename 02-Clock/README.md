---
title: JS 30-02 網頁時鐘
tags: JS
notebook: 10前端筆記
---

# JS 30-02 網頁時鐘

>在CSS的部分新增
```CSS
.hand {
    position: absolute;
    top: 50%;
    width: 50%;
    height: 6px;
    background: black;
    transform-origin: right;
    /* 將旋轉軸心設定到最右側 */
    transform: rotate(90deg);
    /* 順時鐘旋轉90度，deg為單位不可缺少 */
}


/* 版面美化 */

.clock-face:after {
    width: 2rem;
    height: 2rem;
    left: 50%;
    top: 50%;
    position: absolute;
    display: block;
    content: '';
    border-radius: 100%;
    background-color: #a8c5d1;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%);
}

.second-hand {
    height: 2px;
    margin-top: -1px;
    border-radius: 100% 0% 0% 100%;
    transition: all .05s;
    background-color: red;
}

.hour-hand {
    background-color: yellow;
}
```

>JS的部分
```JS
setInterval(() => {
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date(); //透過 new 來實作一個新的 Date 物件
    //now當中的時間是靜態的，在new的當下就被鎖定了

    secondHand.style.transform = `rotate(${(now.getSeconds() / 60 * 360)+90}deg)`;
    minHand.style.transform = `rotate(${(now.getMinutes() / 60 * 360)+90}deg)`;
    hourHand.style.transform = `rotate(${(now.getHours() / 12 * 360)+90}deg)`;
}, 1000);
```

## 關鍵學習點

1. 再次認清在賦值給物件的時候，有 () 才是執行函數，沒有的話則是將整個function都賦值給物件