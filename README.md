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