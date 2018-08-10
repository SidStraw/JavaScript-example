---
title: JS 30-04 陣列應用-1
tags: JS
notebook: 10前端筆記
---

# JS 30-04 陣列應用-1

---

## arr.sort()
陣列排序的方法`arr.sort()`中可以帶入一個Callback function做判斷
如：`arr.sort((a, b) => a > b ? -1 : 1);`會將a排在b前方
判斷邏輯為function回傳`-1`時維持原本順序，`1`時將b排至a前方

---

## arr.reduce()
`arr.reduce()`要帶入兩個引數，第一個是計算用的function，第二個是預設值
預設值的用處是Callback function所使用的第一個引數（前次加總值）的首筆預設
如果沒有設置就會用第一個物件作為預設值，但是第一個物件不一定是可以進行加總的型態
因此可能會報錯，建議都加上該引數

---

## 本次練習使用到的方法
`arr.sort()`、`arr.reduce()`、`arr.filter()`、`arr..map()`

---
## 額外新增的JS程式碼
```JS
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// 1.過濾出生於1500年代的發明家名單
console.log('1.過濾出生於1500年代的發明家名單');
console.table(inventors.filter(value => value.year > 1500 && value.year < 1600));
// arr.filter()會返回引數為true物件的陣列


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// 2.給我們一組發明家的名字和姓氏
console.log('2.列出發明家的名字和姓氏');
console.log(inventors.map(value => `${value.first} ${value.last}`));
// arr.map()會返回一個按照自己定義的規則重組過的陣列

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// 3.按出生日期對發明家排序，最年長到最年輕
console.log('3.按出生日期對發明家排序，最年長到最年輕');
console.table(inventors.sort((a, b) => a.year < b.year ? -1 : 1));
// 判斷邏輯為function回傳`-1`時維持原本順序，`1`時將b排至a前方

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// 4.所有發明家總共活了多少年？
console.log('4.所有發明家總共活了多少年？');
console.log(inventors.reduce(((total, value) => total + value.passed - value.year), 0) + '年');
// arr.reduce要帶入兩個引數，第一個是計算用的function，第二個是預設值（此處預設為0）
// 預設值的用處是Callback function所使用的第一個引數（前次加總值）的首筆預設

// 5. Sort the inventors by years lived
// 5.按享年排序發明者（降冪）
console.log('5.按享年排序發明者（降冪）');
console.table(inventors.sort((a, b) => a.passed - a.year > b.passed - b.year ? -1 : 1));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// 6.在巴黎創建一個名單中包含“de”的Boulevards列表
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// 需透過瀏覽器console完成
// const itam = Array.from(document.querySelectorAll('.mw-category li a'));
// 取得物件，但因為NodeList不能執行 .filter() 所以先透過 Array.from() 轉換成陣列
// console.log(itam.filter(value => value.textContent.includes('de')).map(value => value.textContent));
// 透過.includes('')回傳字串中是否有關鍵字（回傳布林值）

// 7. sort Exercise
// Sort the people alphabetically by last name
//按姓氏的字母順序對人排序
console.log('7.按姓氏的字母順序對人排序');
console.log(
    people.sort((a, b) => {
        const [aFirst, aLast] = a.split(', '); //要仔細觀察陣列中的資料格式
        const [bFirst, bLast] = b.split(', '); //例如此數建議不要遺漏空格
        return aLast < bLast ? -1 : 1;
    })
)

// 8. Reduce Exercise
// Sum up the instances of each of these
//算出每個品項的總和
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
console.log('8.算出每個品項的總和');
console.log(
    data.reduce((total, value) => {
        if (!total[value]) total[value] = 0; //若陣列內尚無該品項則設置初始值
        total[value]++;
        return total; //箭頭函式內有多行代碼，使用 {} 包起來後記得要手動return
    }, []) //預設total為空陣列
)
```