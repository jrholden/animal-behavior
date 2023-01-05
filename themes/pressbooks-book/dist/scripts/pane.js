/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/scripts/pane.js":
/*!************************************!*\
  !*** ./assets/src/scripts/pane.js ***!
  \************************************/
/***/ (() => {

eval("/**\n *\n */\nwindow.hypothesisConfig = function () {\n  return {\n    openSidebar: pressbooksHypothesis.openSidebar === '1' ? true : false,\n    showHighlights: pressbooksHypothesis.showHighlights === '1' ? true : false,\n\n    /**\n     * @param layoutParams\n     */\n    onLayoutChange: function onLayoutChange(layoutParams) {\n      var navReading = document.querySelector('.nav-reading');\n\n      if (layoutParams.expanded === true) {\n        document.body.classList.add('has-annotator-pane');\n\n        if (document.body.clientWidth - layoutParams.width > 400) {\n          document.body.style.marginRight = \"\".concat(layoutParams.width - 32, \"px\");\n\n          if (navReading) {\n            navReading.style.width = \"\".concat(document.body.clientWidth, \"px\");\n          }\n        }\n      } else {\n        document.body.classList.remove('has-annotator-pane');\n        document.body.style.marginRight = '0';\n\n        if (navReading) {\n          navReading.style.width = '100vw';\n        }\n      }\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc3JjL3NjcmlwdHMvcGFuZS5qcy5qcyIsIm5hbWVzIjpbIndpbmRvdyIsImh5cG90aGVzaXNDb25maWciLCJvcGVuU2lkZWJhciIsInByZXNzYm9va3NIeXBvdGhlc2lzIiwic2hvd0hpZ2hsaWdodHMiLCJvbkxheW91dENoYW5nZSIsImxheW91dFBhcmFtcyIsIm5hdlJlYWRpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJleHBhbmRlZCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGllbnRXaWR0aCIsIndpZHRoIiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHByZXNzYm9va3MvcHJlc3Nib29rcy1ib29rLy4vYXNzZXRzL3NyYy9zY3JpcHRzL3BhbmUuanM/MTczMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKi9cbndpbmRvdy5oeXBvdGhlc2lzQ29uZmlnID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdG9wZW5TaWRlYmFyOiAoIHByZXNzYm9va3NIeXBvdGhlc2lzLm9wZW5TaWRlYmFyID09PSAnMScgKSA/IHRydWUgOiBmYWxzZSxcblx0XHRzaG93SGlnaGxpZ2h0czogKCBwcmVzc2Jvb2tzSHlwb3RoZXNpcy5zaG93SGlnaGxpZ2h0cyA9PT0gJzEnICkgPyB0cnVlIDogZmFsc2UsXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIGxheW91dFBhcmFtc1xuXHRcdCAqL1xuXHRcdG9uTGF5b3V0Q2hhbmdlOiBsYXlvdXRQYXJhbXMgPT4ge1xuXHRcdFx0Y29uc3QgbmF2UmVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcubmF2LXJlYWRpbmcnICk7XG5cdFx0XHRpZiAoIGxheW91dFBhcmFtcy5leHBhbmRlZCA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaGFzLWFubm90YXRvci1wYW5lJyApO1xuXHRcdFx0XHRpZiAoICggZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIGxheW91dFBhcmFtcy53aWR0aCApID4gNDAwICkge1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHsgbGF5b3V0UGFyYW1zLndpZHRoIC0gMzIgfXB4YDtcblx0XHRcdFx0XHRpZiAoIG5hdlJlYWRpbmcgKSB7XG5cdFx0XHRcdFx0XHRuYXZSZWFkaW5nLnN0eWxlLndpZHRoID0gYCR7IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggfXB4YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy1hbm5vdGF0b3ItcGFuZScgKTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5SaWdodCA9ICcwJztcblx0XHRcdFx0aWYgKCBuYXZSZWFkaW5nICkge1xuXHRcdFx0XHRcdG5hdlJlYWRpbmcuc3R5bGUud2lkdGggPSAnMTAwdncnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLGdCQUFQLEdBQTBCLFlBQU07RUFDL0IsT0FBTztJQUNOQyxXQUFXLEVBQUlDLG9CQUFvQixDQUFDRCxXQUFyQixLQUFxQyxHQUF2QyxHQUErQyxJQUEvQyxHQUFzRCxLQUQ3RDtJQUVORSxjQUFjLEVBQUlELG9CQUFvQixDQUFDQyxjQUFyQixLQUF3QyxHQUExQyxHQUFrRCxJQUFsRCxHQUF5RCxLQUZuRTs7SUFHTjtBQUNGO0FBQ0E7SUFDRUMsY0FBYyxFQUFFLHdCQUFBQyxZQUFZLEVBQUk7TUFDL0IsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7O01BQ0EsSUFBS0gsWUFBWSxDQUFDSSxRQUFiLEtBQTBCLElBQS9CLEVBQXNDO1FBQ3JDRixRQUFRLENBQUNHLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNkIsb0JBQTdCOztRQUNBLElBQU9MLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRyxXQUFkLEdBQTRCUixZQUFZLENBQUNTLEtBQTNDLEdBQXFELEdBQTFELEVBQWdFO1VBQy9EUCxRQUFRLENBQUNHLElBQVQsQ0FBY0ssS0FBZCxDQUFvQkMsV0FBcEIsYUFBc0NYLFlBQVksQ0FBQ1MsS0FBYixHQUFxQixFQUEzRDs7VUFDQSxJQUFLUixVQUFMLEVBQWtCO1lBQ2pCQSxVQUFVLENBQUNTLEtBQVgsQ0FBaUJELEtBQWpCLGFBQTZCUCxRQUFRLENBQUNHLElBQVQsQ0FBY0csV0FBM0M7VUFDQTtRQUNEO01BQ0QsQ0FSRCxNQVFPO1FBQ05OLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxTQUFkLENBQXdCTSxNQUF4QixDQUFnQyxvQkFBaEM7UUFDQVYsUUFBUSxDQUFDRyxJQUFULENBQWNLLEtBQWQsQ0FBb0JDLFdBQXBCLEdBQWtDLEdBQWxDOztRQUNBLElBQUtWLFVBQUwsRUFBa0I7VUFDakJBLFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQkQsS0FBakIsR0FBeUIsT0FBekI7UUFDQTtNQUNEO0lBQ0Q7RUF2QkssQ0FBUDtBQXlCQSxDQTFCRCJ9\n//# sourceURL=webpack-internal:///./assets/src/scripts/pane.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/scripts/pane.js"]();
/******/ 	
/******/ })()
;