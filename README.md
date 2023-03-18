# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## CRA-based boilerplate output

```
┌── node_module
├── public
├── src
│   ├── api // api 연동 모듈
│   │   ├── adaptor.api.js
│   │   └── api.js
│   ├── app // 라우터 리스트 및 store를 구성하는 모든 slice와 reducer를 정의
│   │   ├── router.js
│   │   ├── slice.js
│   │   └── store.js 
│   ├── assets // 프로젝트에서 사용할 이미지, 비디오, json 파일 등 미디어 파일들을 모아두어 저장하는 곳.
│   │   ├── fonts
│   │   ├── images
│   │   └── scss
│   ├── componenets // pages에서 사용 할 컴포넌트 모음
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── lang // 다국어 설정 파일 및 언어 리소스 파일
│   │   ├── resources
│   │   │   ├── translation.en.json
│   │   │   └── translation.ko.json
│   │   └── i18n.js
│   ├── pages // 화면 단위의 라우팅 컴포넌트 모음
│   │   ├── Api.jsx
│   │   ├── AntDesign.jsx
│   │   ├── Home.jsx
│   │   ├── I18next.jsx
│   │   ├── Redux.jsx
│   │   └── RouterV6.jsx
│   ├── utils // 유틸 함수 모음, birth regex check 등의 함수들 모음
│   │   └── utilCommon.js
│   ├── App.js // 컴포넌트를 정의하는 프로그램이다. 실제로 화면에 표시되는 내용 등은 여기에서 정의된다.
│   ├── index.css
│   └── index.js // 메인 프로그램이라고 할 수 있다. HTML 템플릿 및 JavaScript의 컴포넌트를 조합하여 렌더링하고 실제 표시
├── .gitignore
├── package.json
├── package-lock.json 
├── README.md
└── webpack.config.js 
```
