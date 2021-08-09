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