import getType from './getType'


console.log('Hello world') 

console.log(getType({})) 


//화살표 함수
const a = x => ({name:'Test1'})
const b = s => true
const c = (f) => {
  
  return f ? '참' : '그짓'
}

console.log('a',a())
console.log('b',b())
console.log('c',c(true))


//즉시실행함수(함수를 만들자 마자 사용할 함수)
// c(true) 이 함수 호출 시 에러 발생 
// 에러 발생 이유는 c(true) 함수가 끝나는 지점을 못찾아서 에러 발생
// 즉시 함수 사용시 사용 전 문법에서는 ;으로 문법이 끝났다고 표시해줘야 함


let a1 =7
c(true);

(function (){
  console.log('즉시함수',a1 * 2)
}());

//호이스팅
test()
/*
에러 발생 .
const test = function() 
{
  console.log(14)
}*/
//함수 호이스팅 발생 하여 맨위 에 지정된 test함수 실행 가능
function test() 
{
  console.log(14)
}

//타이머 함수
//setTimeout
//setInterval
//clearTimeout
//clearInterval();

setTimeout(() => {
  console.log('setTimeout1')
} , 3000)

const timer = setTimeout(() => {
  console.log('setTimeout2')
} , 3000)

const h1El = document.querySelector('h1')

h1El.addEventListener('click',() => {
  clearTimeout(setIntervalTimer)
})

const setIntervalTimer = setInterval(() => {
  console.log("setInterval")
}, 3000)

//클래스 예제
//개체데이터 형식
const name = {
  firstName: 'wook',
  lastName: 'Baxk',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
} 

console.log('개체데이터',name)
console.log(name.getFullName()) //사용 할 때 마다 메모리에 할당이 됨..

//클래스로 변경
function User(first,last)
{
  this.firstName = first
  this.lastName = last
}
//prototype 속성은 공통(메모리에 한번만 할당)
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}


const userclass = new User('wook','Back')
const userclass22 = new User('wook2','Back2')
console.log(userclass)
console.log(userclass.getFullName())
console.log(userclass22)
console.log(userclass22.getFullName())

// this
//일반 함수는 호출 위치에 따라 this 정의
//화살표 함수는 자신이 선언된 함수 범위에서 this 정의
//(콜백 함수에서 개체데이터에 있는 this.값(name1) 을 찾을때)
const heropy = {
  name1: 'Heropy',
  normal: function()
  {
    console.log(this.name1)
  },
  arrow: () =>{
    console.log(this.name1)
  }
}
//heropy.normal()//Heropy
//heropy.arrow()//undefined

//ES6 Class
class UserEs6
{
  //constructor 함수는 꼭 만들어줘야함(자바의 생성자 느낌)
  constructor(first,last)
  {
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const userclass2 = new UserEs6('wook','Back')
console.log('UserEs6',userclass)
console.log(userclass.getFullName())

//상속 키워드 : extends (super // 사용법은 자바와 동일)


//클래스 예제 END