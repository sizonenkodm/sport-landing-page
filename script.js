/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = (slidesFieldSelector, slidesSelector, dotsSelector) => {
  const slidesField = document.querySelector(slidesFieldSelector),
    slides = document.querySelectorAll(slidesSelector),
    dots = document.querySelectorAll(dotsSelector);
  let slideIndex = 1;
  let paused = false;
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(slide => slide.classList.remove('active-slide'));
    slides[slideIndex - 1].classList.add('active-slide');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
  }
  function nextSlide(n) {
    showSlides(slideIndex += n);
  }
  dots.forEach(el => {
    el.addEventListener('click', event => {
      const slideTo = event.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      showSlides(slideIndex);
    });
  });
  function activateAnimation() {
    paused = setInterval(function () {
      nextSlide(1);
    }, 7000);
  }
  activateAnimation();
  slidesField.parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  slidesField.parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.main__slider', '.main__slider-slide', '.main__slider-indicators li');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map