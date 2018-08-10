---
title: JS 30-01 鍵盤鼓練習
tags: JS
notebook: 10前端筆記
---

# JS 30-01 鍵盤鼓練習筆記

```JS
window.addEventListener('keydown', e => { // 因為是鍵盤點擊事件所以用window
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // ES6支援使用`字串中間${ }插入變數`
    // e.keyCode是 keydown 事件中的參數

    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // 避免按其他按鍵console報錯
    key.classList.add('playing'); // 不能用key.className直接指定Class
    audio.currentTime = 0;
    // HTML5針對audio標籤的方法，設置音效播放的起始時間
    // 沒設定的話按完一次就沒第二次了
    
    audio.play();
});

const keys = document.querySelectorAll('div.key');
keys.forEach(value => { //針對陣列內的所有物件個別執行一次function
    value.addEventListener('transitionend', e => {
        // transitionend 是 CSS transition 動作結束觸發的事件

        if (e.propertyName !== 'box-shadow') return;
        /* e.propertyName 是 transitionend 事件中的參數
        判斷目前觸發 transitionend 事件的是哪個CSS參數
        因為 .playing 中有三個參數會觸發事件
        （ transform 、 border-color 、 box-shadow ）
        為了避免重複執行因此特別設置一組判別，三組參數選哪個都可以
        */

        value.classList.remove('playing');
    })
})
```

主要練習心得：
1. 在ES6當中可以使用 ` 來包住字串，這樣的重點是可以在字串中透過 ${ } 輕鬆加入變數而不用自己用 + 來連接，避免看引號看到眼睛脫窗
2. `audio.currentTime = 0;`跟`audio.play();`都是HTML5的DOM方法，是因為 querySelector 了 audio 的標籤才能使用
3. 變數宣告必須迴避保留字，但是也不用擔心過頭，保留字其實沒那麼多，都是些常見的（例如void、if等等），基本上不太可能用到這些
4. 了解熟悉`forEach`這類陣列迭代操作