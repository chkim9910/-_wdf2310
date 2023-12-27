// 변수
// 데이터를 저장하고 사용하는 데이터의 이름
// var, let, const
// var: ES6 이전에 사용하던 변수 (현재는 잘 사용하지 않음)

// 변수 선언
let a = 10;
const b = 5;

console.log(a); // 10
console.log(b); // 5
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

// let 변수 (변수의 값을 변경할 수 있음)

// 변수 선언
let c = 10;
console.log(c); // 10

// 변수 값 변경
c = 20;
console.log(c); // 20

// const 변수 (변수의 값을 변경할 수 없음)

// 변수 선언
const d = 5;
console.log(d); // 5

//d = 10; // 에러 발생

// zero base numbering
// js는 배열의 index가 0부터 시작함

// 배열 선언
const animals = ['개', '고양이', '물고기'];

console.log(animals); // ['개', '고양이', '물고기']
console.log(animals[0]); // '개'
console.log(animals[1]); // '고양이'
console.log(animals[2]); // '물고기'

// 데이터 종류

// 문자열(String)
// 문자열은 작은 따옴표('') 또는 큰 따옴표("")로 감싸서 표현

let myName = '김겨울';
let age = '1';

console.log(myName); // '정미애'
console.log(age); // '28'
// 정미애 나이는 28살 입니다.
console.log(`${myName} 나이는 ${age}살입니다.`);

// boolean (true, false)

let hungry = true;
let cool = false;

console.log(hungry); // true
console.log(cool); // false

// object (객체)
// 여러 데이터를 하나의 변수에 저장하기 위해 사용
// { key: value }

let user = {
    name: '김가을',
    age: 1,
    cute: true,
};

console.log(user); // { name: '김가을', age: 1, cute: true }
console.log(user.name); // '김가을'

// 김가을 나이는 1살 입니다.
console.log(`${user.name} 나이는 ${user.age}살 입니다.`);
// 김가을은 귀여워요.
console.log(`${user.name}은 ${user.cute ? '귀여워요' : '귀엽지 않아요'}.`);
