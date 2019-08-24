import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// PWA 모드 활성화 원할 시 register();  후 meifest.json에서 아이콘 선택하면 스마트폰에서 아이콘 생성화면 생김
serviceWorker.unregister();
