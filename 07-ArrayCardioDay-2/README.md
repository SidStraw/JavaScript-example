---
title: JS 30-7 陣列練習2
tags: JS
notebook: 10前端筆記
---

# JS 30-7 陣列練習2
學習重點：
強化陣列迭代操作的熟練度

## 陣列內容移除與新增
`array.splice(index , howMany[, element1[, ...[, elementN]]])`
>參數 
index : 要從哪個索引位置開始改變
howMany : 用來指出要移除多少個元素. 如果 howMany 等於 0，則沒有任何元素被移除
element1, ..., elementN : 要加入陣列的元素，如果省略則表示不加入只刪除
例如：
```JS
var removed = myArr.splice(2, 1, "new");
//將在myArr陣列中刪除 myArr[2] 的內容，並在原本 myArr[2] 的位置前面新增 "new" 字串
```