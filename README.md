# Node.js Note(21.08.09)
필수 npm i 명령어 실행 후 프로젝트 가져와야댐
npm init -y : package.json 생성

## npm install
옵션 여부 -D의 옵션 
-D(--save-dev) : 개발용 의존성 패키지 설치  
(웹브라우저에서 직접적으로 동작하지 않음))  
1. npm install parcel-bundler -D
    ```javascripts
    - "scripts": {
        "dev" : "parcel index.html"
        "build":"parcel build index.html"
    },
    ```
    서버 열기 및 build
    ```
    ServerOpen:  npm run dev
         build: npm run build
    ```
    - "dev": "parcel index.html" //개발용 서버 열기
    - "build":"parcel build index.html" //build 배포
1. npm install lodash
---
## npm update 시 
1. ^ : 버전 앞에 ^ 있으면  
메이저 버전에서 상위 버전으로 업데이트 하겠다는 명시
---

</br>

## JavaScript
1. typeof : 데이터의 타입 확인.  
배열은 typeof로 만으로는 힘듬.
   ```javascript
      function getType(data)
      {
        return Object.prototype.toString.call(data).slice(8,-1)
      }
   ```
1. import  
import getType from './getType.js' => `확장자는 생략 가능`.  
파일을 꼭 정확하게 명시 하지 않으면 기본으로 찾는 경로는  
node_modules폴더에서 찾음  
getType.js 파일에서는  
export default function getType(data) 이런식으로 선언.

## 변수
1. var,let,const
    1. var  
        - `변수가 함수레벨 유호범위`를 가짐  
        함수레벨로 가짐으로 메모리 누수 및  
        예기치 못한 결과가 나올수도 있음
    1. let
        - `변수가 블럭레벨 유효범위`를 가짐
    1. const
        - `변수가 블럭레벨 유효범위`를 가짐
---
## 연산자
1. 비교연산자  
    1. 일치 : ===
    1. 불일치 : !==
    1. == : 동등연산자  
    (`형변환이 자동`으로 이루어져서 의도하지 않게 결과가 다르게 나올수도 있음) 
1. 삼항 연산자  
`a ? '참' : '거짓'`  
거짓 : `false, '', null , undefined, 0, -0, NaN` 

## 함수
함수 호출 시 ; 를 지정해서 함수호출의 끝이라고 표시  
(안써도 되긴 하나 즉시실행함수 사용 시 에러 발생 할수 있음.)
1. arguments : 함수 정의 시 매개 변수를 지정 안하고  
함수 호출 시 매개 변수 지정 시 `arguments` 를 사용하여 매개 변수를 가져올수있음  
arguments : 매개 변수는 배열.  
1. 화살표 함수  
    ```javascript
    (x) => { 
        return x * 2 
    }
    ```
    ==> 리턴 시 리턴 생략 가능 / 매개 변수가 하나 인 경우 () 괄호 도 생략 가능  
    ```javascript
    x => x * 2
    ```
    개체 데이터는 () 한번 감싸줘야댐
    ```javascript
    x => (
        {       
           name: 'Test' 
    })
    ```
1. 즉시실행함수  
`즉시 함수 사용시 사용 전 문법에서는 ;으로 문법이 끝났다고 표시해줘야 함`  
함수를 만들자 마자 바로 사용할 함수  
    ```javascript
    (function (){
        console.log(a * 2)
    }());
    ```
1. 호이스팅  
함수 선언부가 유효범위 최상단으로 끌어올려지는 현상(<a href="https://github.com/backSeungWook/nodeNote/blob/master/main.js">`main.js 예제 참고`</a>)
    ```javascript
    function test(){
        console.log(14)
    }   
    ```
1. 타이머 함수  
<a href="https://github.com/backSeungWook/nodeNote/blob/master/main.js">`main.js 예제 참고`</a>
    1. setTimeout(함수, 시간) : 일정 시간 후 함수 실행
    1. setInterval(함수, 시간) : 시간 간격마다 함수 실행
    1. clearTimeout() : 설정된 Timeout 함수를 종료
    1. clearInterval() : 설정된 Interval 함수를 종료
1. 콜백 함수  
함수의 인수로 사용되는 함수  
`실행 위치를 보장해주는 방법으로 활용.`
--- 

</br>

## 클래스
