---
title: JS 30-05 Flex排版應用
tags: JS
notebook: 10前端筆記
---

# Flex排版應用
Flex的必要參數計有：
1. 父


>display
flex | inline-flex;
父元素一定要加上，宣告使用flex模型

>flex-direction
row | row-reverse | column | column-reverse;
>![img](https://firebasestorage.googleapis.com/v0/b/casper-de5d5.appspot.com/o/images%2Fblog%2Fflex-direction.png?alt=media&token=d0870c9f-3829-4b35-badc-35fa80b64873)

>flex-wrap
nowrap | wrap | wrap-reverse;
換行模式：預設不換行

>justify-content
flex-start | flex-end | center | space-between | space-around;
主軸排列模式
>![](https://firebasestorage.googleapis.com/v0/b/casper-de5d5.appspot.com/o/images%2Fblog%2Fjustify-content.png?alt=media&token=4d03f04e-6357-44d9-b571-c21bc5f03cc1)

>align-items
flex-start | flex-end | center | baseline | stretch;
交錯軸排列模式
>![](https://firebasestorage.googleapis.com/v0/b/casper-de5d5.appspot.com/o/images%2Fblog%2Falign-items.png?alt=media&token=8cba0693-c9bc-4bcd-8d92-0055efa1a83c)

>align-content
flex-start | flex-end | center | space-between | space-around | stretch;
多行物件排列模式
>![](https://firebasestorage.googleapis.com/v0/b/casper-de5d5.appspot.com/o/images%2Fblog%2Falign-content.png?alt=media&token=6f30e2fd-f839-4ae7-87e3-1bf4702ddfb4)

2. 子

>flex
flex-grow
flex-shrink
flex-basis

>order
這個屬性可以直接指定一個數字，就可以由小到大的排列順序

>align-self
子物件控制自身位置的屬性
>![](https://firebasestorage.googleapis.com/v0/b/casper-de5d5.appspot.com/o/images%2Fblog%2Falign-items.png?alt=media&token=8cba0693-c9bc-4bcd-8d92-0055efa1a83c)

1. 剩餘空間＝父容器空間－子容器1.flex-basis/width - 子容器2.flex-basis/width - …
2. 如果父容器空間不夠，就走壓縮flex-shrink，否則走擴張flex-grow；
3. 如果你不希望某個容器在任何時候都不被壓縮，那設置flex-shrink:0；
4. 如果子容器的的flex-basis設置為0(width也可以，不過flex-basis更符合語義)，那麼計算剩餘空間的時候將不會為子容器預留空間。
5. 如果子容器的的flex-basis設置為auto(width也可以，不過flex-basis更符合語義)，那麼計算剩餘空間的時候將會根據子容器內容的多少來預留空間。


以上參考資料：
http://zhoon.github.io/css3/2014/08/23/flex.html
https://www.oxxostudio.tw/articles/201501/css-flexbox.html
https://wcc723.github.io/css/2017/07/21/css-flex/