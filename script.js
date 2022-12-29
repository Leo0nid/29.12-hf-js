// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив,

 //     состоящий из квадратов этих чисел.

// let arr =  [4, 54, 49]
// let newArr = arr.map((el) => {
//     return el ** 2
// })
// console.log(newArr)


// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.filter ((el,idx,arr) => {
//     return el > 0
// })
// console.log(newArr)

// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let arr = [3, 51, 30, 54, 60]
// let newArr = arr.filter ((el,idx,arr) => {
//     return el % 2 == 0
// })
// console.log(newArr)


// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша'].

//     Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr = ['Бегимай', 'Баяман', 'Калмамат','Саша']
// let newArr = arr.filter ((el,idx,arr) => {
//     return el.length > 5
// })
// console.log(newArr)


// task5  Вам дан массив [-13, 96, -41, -28, 40].

//     Посчитайте количество отрицательных чисел в этом массиве

// let arr = [-13, 96, -41, -28, 40]
// let newArr = arr.filter((el,idx,arr) => {
//     return el < 0

// })
// console.log(newArr.length)


// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.

//     Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

// let arr = [3, 51, -30, -54, 60]
// let newArr = arr.filter((el,idx,arr) => {
//     return el > 0
// })
// let secondArr = newArr.map((el) => {
//     return el > 30? Math.sqrt(el) :  el
   
// })

// console.log(secondArr)
    



// task7 Вам дан массив [55, 44, 55, 44, 15, 49].// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа..


// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = arr.filter((el, idx) => {
// return idx === arr.indexOf(el)
// })
// console.log(newArr)


// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// let  newArr = arr.reduce((a,b) => {
//      return a+ ' ' + b.length
//       },"")
      

