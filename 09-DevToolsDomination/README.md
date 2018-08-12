---
title: JS 30-9 Console的各種調教
tags: JS
notebook: 10前端筆記
---

# JS 30-9 Console的各種調教

學習重點：理解各種Console的方法
沒有太多困難需要理解的部分

```JS
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
    console.dir(p);
    console.log(p);
}
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


// Regular 常規
console.log('吸管的JS 30挑戰')

// Interpolated 插值
console.log('就來試試帶入「%d」這個整數吧！', 5.234);

// Styled 樣式
console.log('<p>的字體大小是「%s」', p.style.fontSize);

// warning!
console.warn('很黃很暴力');

// Error :|
console.error('啊諾捏啊諾捏...');

// Info
console.info('施工發生了一些問題')
    // Testing
console.assert(false, '禁止通行');
console.assert(true, '通行');
// clearing
// console.clear();
// 打開就什麼都看不到啦...

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(value => {
    console.groupCollapsed(value.name);
    console.log(`這隻狗狗名字叫做${value.name}`)
    console.log(`今年 ${value.age} 歲囉`)
    console.groupEnd();
});

// counting
console.count('半節');
console.count('吸管');
console.count('吸管');
console.count('半節');
console.count('吸管');


// timing
console.time('抓取AJAX資料')
fetch(endpoint)
    .then(data => data.json())
    .then(data => {
        console.timeEnd('抓取AJAX資料');
        console.log(data)
    })
    .catch(e => console.error(e));
```