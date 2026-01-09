//String - ตัวอักษร
//let ประกาศตัวแปรแบบเปลี่ยนค่าได้
let fname =  'John'
console.log('name',fname)

//const ประกาศตัวแปรแบบเปลี่ยนค่าไม่ได้
const idcard = '123'
const pi = 3.14

//number
let age = 30
let height = 2.5

//boolean
let isThai = false

//เปลี่ยนค่าในตัวแปร
fname = 'Tom' 
fname = 'aaa'

console.log('idcard',idcard)
console.log('name',fname, 'age',age)
console.log('age',age)

/*
    + บวก
    - ลบ
    * คูณ
    / หาร
    % mod หารเอาเศษ
*/
/* condition statement (if, else, switch)
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    >= มากกว่าเท่ากับ
    < น้อยกว่า
    <= น้อยกว่าเท่ากับ
*/
let number1 = 10
let number2 = 10
let condition1 = number1 >= number2 //boolean (true,false)
console.log('condition is = ',condition1)

let number4 = 'Mew'
let number5 = 'Warich'
let number6 = number4 + ' ' + number5
console.log('number6',number6)

//if - else condition
let number7 = 3
let number8 = 5
if (number7 >= number8) {
    console.log('this true')
} 
else if (number7 != number8) {
    console.log('this else if')
}
else {
    console.log('this else')
}

/* 
    Grade
    >= 80 A
    >= 70 B
    >= 60 C
    >= 50 D
     < 50 F
*/

//let score = prompt('ใส่ตัวเลข') //รับค่าทางคีย์บอร์ด
let score = 78
console.log('score : ',score)
if (score >= 80) {
    console.log('Grade : A')
}
else if (score >= 70) {
    console.log('Grade : B')
}
else if (score >= 60) {
    console.log('Grade : C')
}
else if (score >= 50) {
    console.log('Grade : D')
}
else {
    console.log('Grade : F')
}

/*
    && และ
    || หรือ
     ! not ไม่
*/



/* 
    T && T == T
    T && F == F
    T || T == T
    F || F == F
    T || F == F
*/
let a = 5
let b = 10
let condition = !(a >= 3 || b >= 5)
console.log('result of condition',condition)

let num = 20
if (num % 2 == 0) {
    console.log('you are event.')
}
else if (!(num % 2 == 0)) {
    console.log('you are not event.')
}

/*
    while
    for
*/

let counter = 0
while (counter <= 9) { //true
    console.log('Hi')
    counter = counter + 1
    // counter += 1
    // counter++
}

for (let counter = 0; counter < 10 ;counter++){
    console.log('Hi')
}

/*
    array
*/

let age1 = 20
let age2 = 25
let age3 = 30

let ages = [20, 25, 30]
ages = [200, 250, 300] //แทนที่ค่าใน array ทั้งหมด

console.log('Array :',age1,age2,age3)
console.log('Array :',ages)

console.log('index',ages[2])

//เพิ่ม array
ages.push(400,450,500)
console.log('push array',ages)

//ลบ array
ages.pop()
console.log('pop array',ages)

//หาว่ามีตัวนี้อยู่ใน array ไหม
if (ages.includes(250)) { //true
    console.log('มีเลข 250 อยู่ใน array')
}

//จัดเรียงข้อมูล
ages.sort()
console.log(ages)

//แบบ String
let name_list = ['a', 'b', 'c']

name_list.push('d')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)

//ขนาดของ array
console.log('name_list',name_list.length)

//แสดงข้อมูลค่าที่อยู่ใน array ทีละตัว
//ทั่วไป
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[2])
//loop
for (let index = 0; index < name_list.length; index++) {
    console.log('name_list',name_list[index])
}



/*
    Object 
*/

let student = [{
    age_one : 30,
    name_one : 'aa',
    grade_one : 'A'
},{
    age_one : 35,
    name_one : 'bb',
    grade_one : 'B'
}]

student.push( {
    age_one : 40,
    name_one : 'cc',
    grade_one : 'C'
})

for (let index = 0; index < student.lengthl; index++) {
    console.log('Student Number',(index + 1))
    console.log('age',student[index].age_one)
    console.log('name',student[index].name_one)
    console.log('grade',student[index].grade_one)

}

/*
    function
*/

let score1 = 55
let score2 = 65
let grade = ''

function calculat_grade(score) /*parameter*/ {
    if (score >= 80) {
        grade = 'A'
    }
    else if (score >= 70) {
        grade = 'B'
    }
    else if (score >= 60) {
        grade = 'C'
    }
    else if (score >= 50) {
       grade = 'D'
    }
    else {
        grade = 'F'
    }
return grade
}
//เรียกใช้ function
let grade1 = calculat_grade(score1)
console.log('Grade',grade1)

/*
    array 
*/

let score_1 = [20, 30, 40, 50]
//let newScore = []


for (let index = 0; index < score_1.length; index++) {
    console.log('Score',score_1[index])
    
}

/* if (score[index] >= 30) {
        newScore.push(score_1[index])
    }
*/

let newScore = score_1.filter((s) => {
         return s >= 30
   
})
newScore.forEach((ns) => {
    console.log('New Score',ns)
})

/* 
score_1[0] = score_1[0] * 2
score_1[1] = score_1[1] * 2
score_1[2] = score_1[2] * 2
score_1[3] = score_1[3] * 2
*/

//pattern คือ (() => { Enter })
score_1 = score_1.map ((s) => {
    return s * 2
})

//arrofunction
score_1.forEach((s) => { /*s คือตัวแปรเก็บค่า */
    console.log('forEach Score',s)
})


let studentt = [
    {
        namee: 'aa',
        scoree: 50,
        greadd: 'D'
    },{
        namee: 'bb',
        scoree: 80,
        greadd: 'A'
    }
]

let studenttt = studentt.find((s) => {
    if (s.name == 'aa') {
        return true
    }
})

let double_score = studentt.map((s) => {
    s.score = s.score * 2
    return s
})

let highScore = studentt.filter((s) => {
    if(s.score >= 120) {
        return true
    }
})
console.log(studenttt)
console.log('double_score',double_score)
console.log('hightScore',highScore)