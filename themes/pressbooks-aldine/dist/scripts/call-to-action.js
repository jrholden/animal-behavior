/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/call-to-action.js":
/*!******************************************!*\
  !*** ./assets/scripts/call-to-action.js ***!
  \******************************************/
/***/ (function() {

eval("/* eslint-disable no-unused-vars */\n(function () {\n  tinymce.create('tinymce.plugins.aldine_call_to_action', {\n    /**\n     * @param editor\n     * @param url\n     */\n    init: function init(editor, url) {\n      editor.addButton('aldine_call_to_action', {\n        title: aldine.call_to_action.title,\n        icon: 'icon dashicons-flag',\n        /**\n         *\n         */\n        onclick: function onclick() {\n          editor.windowManager.open({\n            title: aldine.call_to_action.title,\n            body: [{\n              type: 'textbox',\n              name: 'text',\n              label: aldine.call_to_action.text,\n              value: aldine.call_to_action.title\n            }, {\n              type: 'textbox',\n              name: 'link',\n              label: aldine.call_to_action.link,\n              value: '#'\n            }],\n            /**\n             * @param e\n             */\n            onsubmit: function onsubmit(e) {\n              editor.insertContent('[aldine_call_to_action text=\"' + e.data.text + '\" link=\"' + e.data.link + '\"]');\n            }\n          });\n        }\n      });\n    },\n    /**\n     * @param n\n     * @param cm\n     */\n    createControl: function createControl(n, cm) {\n      return null;\n    }\n  });\n  tinymce.PluginManager.add('aldine_call_to_action', tinymce.plugins.aldine_call_to_action);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc2NyaXB0cy9jYWxsLXRvLWFjdGlvbi5qcy5qcyIsIm5hbWVzIjpbInRpbnltY2UiLCJjcmVhdGUiLCJpbml0IiwiZWRpdG9yIiwidXJsIiwiYWRkQnV0dG9uIiwidGl0bGUiLCJhbGRpbmUiLCJjYWxsX3RvX2FjdGlvbiIsImljb24iLCJvbmNsaWNrIiwid2luZG93TWFuYWdlciIsIm9wZW4iLCJib2R5IiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsInRleHQiLCJ2YWx1ZSIsImxpbmsiLCJvbnN1Ym1pdCIsImUiLCJpbnNlcnRDb250ZW50IiwiZGF0YSIsImNyZWF0ZUNvbnRyb2wiLCJuIiwiY20iLCJQbHVnaW5NYW5hZ2VyIiwiYWRkIiwicGx1Z2lucyIsImFsZGluZV9jYWxsX3RvX2FjdGlvbiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHByZXNzYm9va3MvcHJlc3Nib29rcy1hbGRpbmUvLi9hc3NldHMvc2NyaXB0cy9jYWxsLXRvLWFjdGlvbi5qcz9kYmY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4oIGZ1bmN0aW9uICgpIHtcblx0dGlueW1jZS5jcmVhdGUoICd0aW55bWNlLnBsdWdpbnMuYWxkaW5lX2NhbGxfdG9fYWN0aW9uJywge1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSBlZGl0b3Jcblx0XHQgKiBAcGFyYW0gdXJsXG5cdFx0ICovXG5cdFx0aW5pdDogZnVuY3Rpb24gKCBlZGl0b3IsIHVybCApIHtcblx0XHRcdGVkaXRvci5hZGRCdXR0b24oICdhbGRpbmVfY2FsbF90b19hY3Rpb24nLCB7XG5cdFx0XHRcdHRpdGxlOiBhbGRpbmUuY2FsbF90b19hY3Rpb24udGl0bGUsXG5cdFx0XHRcdGljb246ICdpY29uIGRhc2hpY29ucy1mbGFnJyxcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZWRpdG9yLndpbmRvd01hbmFnZXIub3Blbigge1xuXHRcdFx0XHRcdFx0dGl0bGU6IGFsZGluZS5jYWxsX3RvX2FjdGlvbi50aXRsZSxcblx0XHRcdFx0XHRcdGJvZHk6IFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Ym94Jyxcblx0XHRcdFx0XHRcdFx0XHRuYW1lOiAndGV4dCcsXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IGFsZGluZS5jYWxsX3RvX2FjdGlvbi50ZXh0LFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBhbGRpbmUuY2FsbF90b19hY3Rpb24udGl0bGUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAndGV4dGJveCcsXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogJ2xpbmsnLFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBhbGRpbmUuY2FsbF90b19hY3Rpb24ubGluayxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJyMnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdFx0ICogQHBhcmFtIGVcblx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0b25zdWJtaXQ6IGZ1bmN0aW9uICggZSApIHtcblx0XHRcdFx0XHRcdFx0ZWRpdG9yLmluc2VydENvbnRlbnQoXG5cdFx0XHRcdFx0XHRcdFx0J1thbGRpbmVfY2FsbF90b19hY3Rpb24gdGV4dD1cIicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5kYXRhLnRleHQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1wiIGxpbms9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdGUuZGF0YS5saW5rICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcIl0nXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSxcblx0XHRcdH0gKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSBuXG5cdFx0ICogQHBhcmFtIGNtXG5cdFx0ICovXG5cdFx0Y3JlYXRlQ29udHJvbDogZnVuY3Rpb24gKCBuLCBjbSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0sXG5cdH0gKTtcblx0dGlueW1jZS5QbHVnaW5NYW5hZ2VyLmFkZChcblx0XHQnYWxkaW5lX2NhbGxfdG9fYWN0aW9uJyxcblx0XHR0aW55bWNlLnBsdWdpbnMuYWxkaW5lX2NhbGxfdG9fYWN0aW9uXG5cdCk7XG59ICkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxDQUFFLFlBQVk7RUFDYkEsT0FBTyxDQUFDQyxNQUFNLENBQUUsdUNBQXVDLEVBQUU7SUFDeEQ7QUFDRjtBQUNBO0FBQ0E7SUFDRUMsSUFBSSxFQUFFLGNBQVdDLE1BQU0sRUFBRUMsR0FBRyxFQUFHO01BQzlCRCxNQUFNLENBQUNFLFNBQVMsQ0FBRSx1QkFBdUIsRUFBRTtRQUMxQ0MsS0FBSyxFQUFFQyxNQUFNLENBQUNDLGNBQWMsQ0FBQ0YsS0FBSztRQUNsQ0csSUFBSSxFQUFFLHFCQUFxQjtRQUMzQjtBQUNKO0FBQ0E7UUFDSUMsT0FBTyxFQUFFLG1CQUFZO1VBQ3BCUCxNQUFNLENBQUNRLGFBQWEsQ0FBQ0MsSUFBSSxDQUFFO1lBQzFCTixLQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDRixLQUFLO1lBQ2xDTyxJQUFJLEVBQUUsQ0FDTDtjQUNDQyxJQUFJLEVBQUUsU0FBUztjQUNmQyxJQUFJLEVBQUUsTUFBTTtjQUNaQyxLQUFLLEVBQUVULE1BQU0sQ0FBQ0MsY0FBYyxDQUFDUyxJQUFJO2NBQ2pDQyxLQUFLLEVBQUVYLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDRjtZQUM5QixDQUFDLEVBQ0Q7Y0FDQ1EsSUFBSSxFQUFFLFNBQVM7Y0FDZkMsSUFBSSxFQUFFLE1BQU07Y0FDWkMsS0FBSyxFQUFFVCxNQUFNLENBQUNDLGNBQWMsQ0FBQ1csSUFBSTtjQUNqQ0QsS0FBSyxFQUFFO1lBQ1IsQ0FBQyxDQUNEO1lBQ0Q7QUFDTjtBQUNBO1lBQ01FLFFBQVEsRUFBRSxrQkFBV0MsQ0FBQyxFQUFHO2NBQ3hCbEIsTUFBTSxDQUFDbUIsYUFBYSxDQUNuQiwrQkFBK0IsR0FDOUJELENBQUMsQ0FBQ0UsSUFBSSxDQUFDTixJQUFJLEdBQ1gsVUFBVSxHQUNWSSxDQUFDLENBQUNFLElBQUksQ0FBQ0osSUFBSSxHQUNYLElBQUksQ0FDTDtZQUNGO1VBQ0QsQ0FBQyxDQUFFO1FBQ0o7TUFDRCxDQUFDLENBQUU7SUFDSixDQUFDO0lBQ0Q7QUFDRjtBQUNBO0FBQ0E7SUFDRUssYUFBYSxFQUFFLHVCQUFXQyxDQUFDLEVBQUVDLEVBQUUsRUFBRztNQUNqQyxPQUFPLElBQUk7SUFDWjtFQUNELENBQUMsQ0FBRTtFQUNIMUIsT0FBTyxDQUFDMkIsYUFBYSxDQUFDQyxHQUFHLENBQ3hCLHVCQUF1QixFQUN2QjVCLE9BQU8sQ0FBQzZCLE9BQU8sQ0FBQ0MscUJBQXFCLENBQ3JDO0FBQ0YsQ0FBQyxHQUFJIn0=\n//# sourceURL=webpack-internal:///./assets/scripts/call-to-action.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/scripts/call-to-action.js"]();
/******/ 	
/******/ })()
;