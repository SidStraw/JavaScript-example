---
title: JS 30-03 CSS變數
tags: JS
notebook: 10前端筆記
---

# JS 30-03 CSS變數

>CSS新增
```CSS
:root {
    --spacing: 10px;
    --blur: 10px;
    --base: #ffc600;
}

img {
    background-color: var(--base);
    padding: var(--spacing);
    filter: blur(var(--blur));
}

.hl {
    color: var(--base);
}
```
:root 偽類是為了在 CSS 中設置全域變數使用
要使用CSS變數必須以`var()`函式呼叫
CSS變數使用上沒有字串連接的能力，所以單位必須直接寫在變數
如：`padding: var(--spacing) + 'px';`的話將會出現錯誤

---

>JS部分
```JS
const input = document.querySelectorAll('.controls input');

function updataImg() {
    const sizing = this.dataset.sizing || '';
    //取出DOM元素上自訂的data-sizing內容，此處為單位px
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}
input.forEach(value => value.addEventListener('change', updataImg));
input.forEach(value => value.addEventListener('mousemove', updataImg));
```