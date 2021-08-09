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