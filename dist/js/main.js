/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderPage.js */ \"./modules/renderPage.js\");\n\r\n\r\n(0,_modules_renderPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (url) => {\r\n    return fetch(url)\r\n    .then((response) => {\r\n        return response.json(); \r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst arrayUnique = (arr) => { //функция для исключения повторяющихся значений в массиве\r\n    return arr.filter((item, index, arr) => arr.indexOf(item) == index);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayUnique);\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/renderCards.js":
/*!********************************!*\
  !*** ./modules/renderCards.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./modules/helpers.js\");\n\r\n\r\nconst renderCards = () => {\r\n  return class MovieCard {\r\n    constructor(name, realName, species, citizenship, gender, birthDay, deathDay, status, actors, photo, movies, arrayFilms = []) {\r\n      this.name = name;\r\n      this.realName = realName;\r\n      this.species = species;\r\n      this.citizenship = citizenship;\r\n      this.gender = gender;\r\n      this.birthDay = birthDay;\r\n      this.deathDay = deathDay;\r\n      this.status = status;\r\n      this.actors = actors;\r\n      this.photo = photo;\r\n      this.movies = movies;\r\n      this.arrayFilms = arrayFilms;\r\n    }\r\n    renderCard() {\r\n      this.cleanerUndefined();\r\n      const cardsWrapper = document.querySelector('.movie__cards');\r\n      const cardBody = document.createElement('div');\r\n      cardBody.classList.add('card__body');\r\n      cardBody.innerHTML = `\r\n          <div class=\"card__image\">\r\n            <img src=\"./dist/db/${this.photo}\" alt=\"${this.name}\">\r\n          </div>\r\n          <div class=\"card__title\">${this.name}</div>\r\n          <div class=\"card__actors\">Actor name: <br><span>${this.actors}</span></div>\r\n          <div class=\"card__gender\">Gender: <br><span>${this.gender}</span></div>\r\n          <div class=\"card__movies\">Movies: <br><span>${this.movies.join(', ')}</span></div>\r\n      `;\r\n      cardsWrapper.append(cardBody);\r\n    }\r\n    renderMovieArr(arr) {\r\n      let movieArr = [];\r\n      for (let key in arr) {\r\n        if(arr[key].movies != null) {\r\n          movieArr.push(arr[key].movies);\r\n        }\r\n      }\r\n      return movieArr;\r\n    }\r\n    renderGenderArr(arr) {\r\n      let genderArr = [];\r\n      for (let key in arr) {\r\n        if(arr[key].gender != null) {\r\n          genderArr.push(arr[key].gender[0].toUpperCase() + arr[key].gender.slice(1));\r\n        }\r\n      }\r\n      return genderArr;\r\n    }\r\n    renderActorArr(arr) {\r\n      let actorArr = [];\r\n      for (let key in arr) {\r\n        if(arr[key].actors != null) {\r\n          actorArr.push(arr[key].actors);\r\n        }\r\n      }\r\n      return actorArr;\r\n    }\r\n    renderActorList(item, index) {\r\n      const actorList = document.querySelector('.movie__selects-actor');\r\n        const actorOption = document.createElement('option');\r\n        actorOption.innerHTML = `\r\n        <option value=${index}>${item.name}</option>`;\r\n        actorList.append(actorOption); \r\n    }\r\n    renderFilmList(arr) {\r\n      const filmList = document.querySelector('.movie__selects-name');\r\n      arr.forEach((film, index) => {\r\n        const filmOption = document.createElement('option');\r\n        filmOption.innerHTML = `\r\n        <div value=${index}>${film}</div>`;\r\n        filmList.append(filmOption);\r\n      });\r\n    }\r\n    renderGenderList(arr) {\r\n      const genderList = document.querySelector('.movie__selects-gender');\r\n      arr.forEach((gender, index) => {\r\n        const genderOption = document.createElement('option');\r\n        genderOption.innerHTML = `\r\n        <option value=${index}>${gender}</option>`;\r\n        genderList.append(genderOption);\r\n      });\r\n    }\r\n    uniqueArray(arr) {\r\n      let uniqueArr = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr.join().split(','));\r\n      return uniqueArr;\r\n    }\r\n    cleanerUndefined() {\r\n      for (const key in this) {\r\n        if (this[key] === undefined) {\r\n          delete this[key];\r\n        }\r\n      }\r\n      return this;\r\n    }\r\n  };\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);\n\n//# sourceURL=webpack:///./modules/renderCards.js?");

/***/ }),

/***/ "./modules/renderPage.js":
/*!*******************************!*\
  !*** ./modules/renderPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"renderPage\": () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./modules/getData.js\");\n/* harmony import */ var _renderCards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCards.js */ \"./modules/renderCards.js\");\n\r\n\r\n\r\nconst renderPage = () => {\r\n  const newCard = (0,_renderCards_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  let mainArr = Object.create(newCard);\r\n  let counter = 0;\r\n  (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('./dist/db/dbHeroes.json')\r\n    .then(data => {\r\n      let mainArray = [];\r\n      data.forEach(({ name, realName, species, citizenship, gender, birthDay, deathDay, status, actors, photo, movies, }) => {\r\n        let newMovieCard = new newCard(name, realName, species, citizenship, gender, birthDay, deathDay, status, actors, photo, movies);\r\n        if(newMovieCard.movies) {\r\n          mainArray.push(newMovieCard);\r\n        }\r\n        mainArr[counter++] = newMovieCard;\r\n        return mainArray;\r\n      });\r\n      const render = (arr) => {\r\n        arr.forEach(item => item.renderCard());\r\n      };\r\n      render(mainArray);\r\n      let renderArr = [];\r\n      const cardsWrapper = document.querySelector('.movie__cards');\r\n      const selectsBlock = document.querySelector('.movie__selects');\r\n      const genderList = document.querySelector('.movie__selects-gender');\r\n      const actorsList = document.querySelector('.movie__selects-actor');\r\n      const filmList = document.querySelector('.movie__selects-name');\r\n      selectsBlock.addEventListener('change', (e) => {\r\n        let genderArr = [];\r\n        let actorArr = [];\r\n        if(e.target == genderList) {\r\n          if(renderArr.length) {\r\n            genderArr = renderArr.filter((item) => {\r\n              return item.gender.toLowerCase() == e.target.value.toLowerCase();\r\n            });\r\n          } else {\r\n            genderArr = mainArray.filter((item) => {\r\n              return item.gender.toLowerCase() == e.target.value.toLowerCase();\r\n          });\r\n        }\r\n        if (e.target.value == '') {\r\n          cardsWrapper.innerHTML = '';\r\n          actorsList.value = '';\r\n          if (window.innerWidth > 520) {\r\n            actorsList.style.transform = 'translateY(-100%)';\r\n            actorsList.style.transition = 'transform 0.3s';\r\n          }\r\n            actorsList.style.transform = 'translateY(100%)';\r\n          render(renderArr);\r\n        }\r\n        if(filmList.value.length == 0 && e.target.value.length == 0) {\r\n          render(mainArray);\r\n        }\r\n        if(renderArr.length) {\r\n          if (e.target.value == 'Female' || e.target.value == 'Male') {\r\n            actorsList.style.transform = 'translateY(0%)';\r\n            actorsList.style.transition = 'transform 0.3s';\r\n            cardsWrapper.innerHTML = '';\r\n            render(genderArr);\r\n            actorsList.innerHTML = `<option value=''>Choose actor name</option>`;\r\n            genderArr.forEach((item, index) => item.renderActorList(item, index));\r\n          }\r\n        } else {\r\n          cardsWrapper.innerHTML = '';\r\n          render(genderArr);\r\n        }\r\n      }\r\n      if(e.target == actorsList) {\r\n        if(genderList.selectedIndex !== 0) {\r\n          actorArr = renderArr.filter((item) => {\r\n            return item.gender.toLowerCase() == genderList.value.toLowerCase();\r\n          });\r\n          actorArr.forEach(item => {\r\n            if(item.name === e.target.value) {\r\n              cardsWrapper.innerHTML = '';\r\n              item.renderCard();\r\n            }\r\n          });\r\n        } \r\n        if(e.target.value == '') {\r\n          cardsWrapper.innerHTML = '';\r\n          render(actorArr);\r\n        }\r\n      }\r\n        if(e.target.closest('.movie__selects-name')) {\r\n          const filmArr = mainArray.filter((item) => {\r\n            return (item.movies !== undefined);\r\n          });\r\n          const nameFilmList = [];\r\n          filmArr.forEach((film) => {\r\n            film.movies.forEach((item) => {\r\n              if(item === e.target.value) {\r\n                nameFilmList.push(film);\r\n              }\r\n            });\r\n          });\r\n          genderList.value = '';\r\n          renderArr = nameFilmList;\r\n          if(e.target.value) {\r\n            cardsWrapper.innerHTML = '';\r\n            render(renderArr);\r\n          } else {\r\n            cardsWrapper.innerHTML = '';\r\n            render(mainArray);\r\n          }\r\n        }\r\n      });\r\n      let filmArray = mainArr.prototype.renderMovieArr(mainArr);\r\n      let genderArray = mainArr.prototype.renderGenderArr(mainArr);\r\n      let uniqFilmArr = mainArr.prototype.uniqueArray(filmArray);\r\n      let uniqGenderArr = mainArr.prototype.uniqueArray(genderArray);\r\n      mainArr.prototype.renderFilmList(uniqFilmArr);\r\n      mainArr.prototype.renderGenderList(uniqGenderArr);\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);\n\n//# sourceURL=webpack:///./modules/renderPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;