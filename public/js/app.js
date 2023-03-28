/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/index/form.js":
/*!*********************************!*\
  !*** ./resources/index/form.js ***!
  \*********************************/
/***/ (() => {

eval("let form = document.getElementById('form'),\r\n    question = document.getElementById('question'),\r\n    message = document.getElementById('message'),\r\n    video = document.getElementById('video');\r\n\r\n\r\nlet storage = window.localStorage,\r\n    complete = storage.getItem('quizzes') || [];\r\n\r\n// Currently using arbitrary key, each video will contain a unique key that will\r\n// be used to identify the quiz. Once implemented it's just a matter of replacing '1'\r\n// with the video key.\r\nif (complete.includes(1)) {\r\n    message.style.display = 'block';\r\n    video.style.display = 'none';\r\n}\r\nelse {\r\n    setTimeout(() => {\r\n        form.style.display = 'block';\r\n    }, 3000);\r\n}\r\n\r\n\r\nasync function data(d) {\r\n    const response = await fetch(`/question/answer`, {\r\n        body: JSON.stringify(d),\r\n        cache: 'no-cache',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json'\r\n        },\r\n        method: 'POST',\r\n        mode: 'cors'\r\n    });\r\n    const json = await response.json();\r\n\r\n    return json;\r\n}\r\n\r\n\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n\r\n    data(\r\n        Object.fromEntries( new FormData(form) )\r\n    ).then(response => {\r\n        question.innerHTML = `${response.text}`;\r\n\r\n        if (response.text.toLowerCase().includes('congratulations')) {\r\n            form.style.display = 'none';\r\n            video.style.display = 'none';\r\n\r\n            message.style.display = 'block';\r\n\r\n            complete.push(1);\r\n\r\n            storage.setItem('quizzes', complete);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://dash-tree/./resources/index/form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/index/form.js"]();
/******/ 	
/******/ })()
;