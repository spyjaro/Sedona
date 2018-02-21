/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
(function webpackMissingModule() { throw new Error("Cannot find module \"build\""); }());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(19);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(17)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js??ref--0-2!./main.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js??ref--0-2!./main.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports
exports.i(__webpack_require__(5), "");

// module
exports.push([module.i, "@font-face {\n  font-family: \"PT Sans heading\";\n  src: url(" + __webpack_require__(6) + ");\n  font-style: normal;\n  font-weight: normal; }\n\n@font-face {\n  font-family: \"PT Sans normal\";\n  src: url(" + __webpack_require__(7) + ");\n  font-style: normal;\n  font-weight: normal; }\n\n.header {\n  max-width: 1200px;\n  width: 100%; }\n\n.nav-trigger + label {\n  visibility: hidden; }\n\n.nav__items {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row; }\n\n.nav__item {\n  box-sizing: border-box;\n  width: 20%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 56px; }\n  .nav__item--link {\n    position: relative;\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 26px;\n    margin: 0 auto;\n    font-size: 21px;\n    font-family: 'PT Sans heading', Helvetica sans-serif;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    line-height: 24px;\n    font-size: 0.75em;\n    color: #000; }\n\n.nav__item--logo img {\n  position: absolute;\n  top: -29px;\n  left: -94px; }\n\n@media screen and (max-width: 768px) {\n  .nav__item--logo img {\n    position: absolute;\n    top: -28px;\n    left: -52px;\n    width: 102px;\n    height: 83px; } }\n\n@media screen and (max-width: 320px) {\n  .wrapper {\n    display: flex;\n    flex-direction: column; }\n  .header {\n    height: 279px;\n    top: 279px; }\n  .nav__items {\n    position: relative;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    max-width: 320px;\n    margin-bottom: 279px; }\n    .nav__items .nav__item {\n      width: 100%;\n      height: 56px;\n      background-color: #81b3d2;\n      border: 1px solid  #9ac1db; }\n      .nav__items .nav__item--link {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        margin: 0 auto;\n        font-size: 21px;\n        font-family: 'PT Sans heading', Helvetica sans-serif;\n        text-align: center;\n        text-transform: uppercase;\n        font-weight: bold;\n        line-height: 24px;\n        color: #fff; }\n      .nav__items .nav__item--logo {\n        display: flex;\n        order: 5;\n        background-color: #fff;\n        text-align: center;\n        position: absolute;\n        top: 223px; }\n        .nav__items .nav__item--logo .sedona-logo {\n          visibility: visible;\n          display: block; }\n        .nav__items .nav__item--logo .nav__item--link img {\n          left: calc(50% - 51px);\n          text-align: center; }\n  .social-list__link:hover {\n    text-decoration: underline; }\n  #nav-trigger + label {\n    visibility: visible; }\n  .header {\n    height: 56px; }\n  .nav-trigger {\n    clip: rect(0, 0, 0, 0); }\n  .hamburger {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    color: #000;\n    height: 25px;\n    width: 25px;\n    cursor: pointer;\n    background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='30px' height='30px' viewBox='0 0 30 30' enable-background='new 0 0 30 30' xml:space='preserve'><rect width='30' height='6'/><rect y='24' width='30' height='6'/><rect y='12' width='30' height='6'/></svg>\");\n    background-size: contain; } }\n\n#nav-trigger {\n  display: none; }\n\n.x-icon {\n  position: absolute;\n  right: 11px;\n  top: 15px;\n  color: #fff;\n  height: 28px;\n  width: 28px;\n  cursor: pointer;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALuSURBVHhe7dxJihRBGMXxcu/G2a0ewJXHEJxn8Q6NF9Ct7j2Qe+dp7Ql06wD6PtoHRfBVdUZmRGQM7w8PiupFZ8aPhuymqY1SSimllFJKKaWUUoN1HLt0+HK4zmMXD1/WkWG8wn5gl+2NgTKMr9g3rAoUYvz9v5FQiMF7Xx0lxOBGQAkxOEO5gBVvFwbXM8ouDK44ylEYXI8oR2FwRVHsacoO27uQcD2hTMWw/cFuYcWyQx4JJRbjEVa8UVCawGC9ozSFwXpFaRKD9YbSNAaLQfmO1YrSBQZrHaUrDNYqSpcYrDWUrjFYKyhDYDA7ZDts7+bCrYEyFAarFWVIDFYbytAYrBYUYWy1NoownNZCEcaeSqMIY0KlUIQRUW4UYcwoF4owFpQaRRgJSoUijIQtRRFGhuaiCCNjsShXMGFkLgZl6oSxsJQowkhUChRhJG4JijAyNQdFGJmzpynv4HftGaYyFfN7Bmf/9WI/WSpxhvEF8w79qAklceewuRicUBKVAoMTysJSYnBCmZlhfMa8Qw1nj7ZPMTts7+vhhBLZWSwG4yFm2SELJXFzMZhQEmYYnzDv8MIZxgPMSygJisW4j+1LKAs6g6XEYEKZUS4MFoNif7gcGsUwPmLe4YQzjHvYnIQyoViMu9iShLInw/iAeYcRLgUGE4rTWhhMKFsZxnvMu/lwhnEHy5Edsh22933DdYsSi3Eby9nQKIbxDvNuNlwJDDYkymlsKsZvrBQGGwqldgw2BEosRtEPjHTqGsUw3mLezYSrAYN1iXIKm4rxC6sFg3WF0joG6wLFMN5g3kWHqxmDNY0Si3ETa6EmUU5iUzF+Yq1gsKZQesdgTaAYxmvMu6hwLWOwqlFOYDEYN7AeqhblMeZdRDjDuI71VAzKc6xYTzDvIrgeMdgUlJfYMaxou1B6xmD7UFbBYCGKYVzDRshDWRWDEcUwrtobA7WNUgUGO8BGw2CG8gKrBkMppZRSSimllFJKKTVcm80/VDrHw4UX9GgAAAAASUVORK5CYII=\");\n  background-size: contain; }\n\n.main {\n  box-sizing: border-box;\n  overflow: hidden; }\n\n.intro--first-page {\n  background-image: url(" + __webpack_require__(8) + ");\n  height: 518px;\n  max-width: 1200px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.intro__banner {\n  max-width: 460px;\n  width: 100%;\n  height: 350px;\n  margin-top: 78px;\n  transformation: .2s; }\n\n.title {\n  background-color: #81b3d2;\n  width: 33.3333%;\n  display: flex;\n  flex-direction: column; }\n\n.content-title {\n  padding-top: 51px;\n  max-width: 486px;\n  width: 100%;\n  margin: 0 auto; }\n\n.content-title__heading {\n  font-size: 20px;\n  padding-top: 23px;\n  margin: 0 auto;\n  font-size: 21px;\n  font-family: 'PT Sans heading', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 24px; }\n\n.content-title__info {\n  padding-top: 42px;\n  padding-bottom: 55px;\n  font-size: 17px;\n  font-family: 'PT Sans normal', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto;\n  color: #696969; }\n\n.content-advantages__first-row {\n  max-width: 1200px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  color: #ffffff; }\n\n.first-row__title {\n  width: 33.33333%;\n  display: flex;\n  flex-direction: column; }\n\n.title--heading {\n  margin: 0 auto;\n  font-size: 21px;\n  font-family: 'PT Sans heading', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 24px;\n  padding-top: 57px;\n  max-width: 160px; }\n\n.title--number {\n  margin: 0 auto;\n  padding-top: 21px;\n  text-align: center; }\n\n.title--number {\n  font-size: 17px;\n  font-family: 'PT Sans normal', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto; }\n\n.title--info {\n  font-size: 17px;\n  font-family: 'PT Sans normal', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto;\n  padding-top: 32px;\n  max-width: 257px; }\n\n.first-row__bg {\n  background-image: url(" + __webpack_require__(9) + ");\n  width: 66.666%; }\n\n.content-advantages__second-row {\n  display: flex;\n  justify-content: space-between; }\n\n.second-row__features {\n  margin-top: 60px;\n  text-align: center;\n  display: flex;\n  flex-direction: column; }\n\n.features__icon-wrap,\n.features__text-wrap {\n  flex-direction: column;\n  width: 100%; }\n\n.second-row__features--header {\n  margin: 0 auto;\n  font-size: 21px;\n  font-family: 'PT Sans heading', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 24px;\n  color: #000;\n  padding: 33px 0; }\n\n.second-row__features--info {\n  font-size: 17px;\n  font-family: 'PT Sans normal', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto;\n  color: #333333;\n  padding-bottom: 67px;\n  max-width: 270px;\n  width: 100%; }\n\n.content-advantages__third-row {\n  display: flex;\n  justify-content: flex-end; }\n\n.third-row__bg {\n  width: 66.666666%;\n  height: 256px;\n  background-image: url(" + __webpack_require__(10) + "); }\n  .third-row__bg img {\n    max-width: 799px;\n    width: 100%;\n    height: 256px; }\n\n.third-row__title {\n  width: 33.33333%;\n  display: flex;\n  flex-direction: column;\n  color: #fff; }\n\n.content-advantages__fourth-row {\n  display: flex;\n  justify-content: flex-start; }\n\n.fourth-row__title {\n  background-color: #eee;\n  color: #000;\n  padding-bottom: 47px; }\n\n.search-hotel {\n  max-width: 1200px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-bottom: 66px; }\n\n.search-hotel__title {\n  margin: 0 auto;\n  font-size: 21px;\n  font-family: 'PT Sans heading', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 24px;\n  font-size: 30px;\n  padding-top: 57px;\n  padding-bottom: 39px; }\n\n.search-hotel__info {\n  font-size: 17px;\n  font-family: 'PT Sans normal', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto;\n  max-width: 430px;\n  width: 100%;\n  padding-bottom: 52px; }\n\n.search-hotel__button {\n  color: #fff;\n  max-width: 458px;\n  width: 100%;\n  height: 58px;\n  margin: 0 auto;\n  font-size: 21px;\n  font-family: 'PT Sans heading', Helvetica sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  line-height: 24px;\n  background-color: #81b3d2;\n  border: none; }\n\n.map iframe {\n  left: 0;\n  top: 0;\n  height: 350px;\n  width: 100%; }\n\n@media screen and (max-width: 768px) {\n  .intro--first-page {\n    max-width: 768px;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-size: auto;\n    background-position: center;\n    background-image: url(" + __webpack_require__(11) + "); }\n  .content-title {\n    padding-top: 23px; }\n  .search-hotel {\n    padding-bottom: 57px; }\n    .search-hotel__info {\n      padding-bottom: 49px; } }\n\n@media screen and (max-width: 320px) {\n  .intro--first-page {\n    height: 389px;\n    background-position: 50% 50%;\n    background-image: url(" + __webpack_require__(12) + ");\n    background-repeat: no-repeat; }\n  .intro__banner {\n    margin-top: 0; }\n  .content-title__info {\n    padding-bottom: 0; }\n  .content-advantages__first-row {\n    display: flex;\n    flex-direction: column; }\n    .content-advantages__first-row .first-row__title,\n    .content-advantages__first-row .first-row__bg {\n      width: 100%; }\n    .content-advantages__first-row .first-row__title:first-child {\n      padding-top: 37px;\n      background-image: url(" + __webpack_require__(13) + ");\n      background-repeat: no-repeat;\n      background-position: 75% 0%; }\n    .content-advantages__first-row .first-row__title .title--heading {\n      padding-top: 43px;\n      max-width: 257px;\n      font-size: 18px; }\n    .content-advantages__first-row .first-row__title .title--info {\n      padding-top: 26px;\n      padding-bottom: 46px; }\n    .content-advantages__first-row .first-row__bg {\n      display: block;\n      height: 260px;\n      max-width: 320px;\n      width: 100%;\n      background-image: url(" + __webpack_require__(14) + "); }\n  .content-advantages__second-row {\n    display: flex;\n    flex-direction: column; }\n    .content-advantages__second-row .second-row__features {\n      margin-top: 24px;\n      display: flex;\n      flex-direction: row;\n      max-width: 320px;\n      width: 100%; }\n      .content-advantages__second-row .second-row__features .features__icon-wrap {\n        width: 20%; }\n      .content-advantages__second-row .second-row__features--header {\n        padding: 0; }\n    .content-advantages__second-row .second-row__features--logo {\n      width: 39px;\n      height: 37px; }\n    .content-advantages__second-row .features__text-wrap .second-row__features--header,\n    .content-advantages__second-row .features__text-wrap .second-row__features--info {\n      text-align: left;\n      padding: 0 0 10px 10px; }\n    .content-advantages__second-row .features__text-wrap:first-child {\n      margin-top: 10px; }\n    .content-advantages__second-row .features__text-wrap:last-child {\n      margin-bottom: 20px; }\n  .content-advantages__third-row {\n    display: flex;\n    flex-direction: column-reverse;\n    height: 451px; }\n    .content-advantages__third-row .third-row__title {\n      height: 191px;\n      max-width: 320px;\n      width: 100%; }\n      .content-advantages__third-row .third-row__title .title--heading {\n        padding-top: 45px;\n        font-size: 18px;\n        max-width: 320px;\n        width: 100%; }\n      .content-advantages__third-row .third-row__title .title--info {\n        padding-top: 26px;\n        font-size: 15px; }\n    .content-advantages__third-row .third-row__bg {\n      width: 100%;\n      max-width: 320px;\n      background-image: url(" + __webpack_require__(15) + "); }\n  .content-advantages__fourth-row {\n    display: flex;\n    flex-direction: column; }\n    .content-advantages__fourth-row .fourth-row__title {\n      max-width: 320px;\n      width: 100%;\n      padding-bottom: 0;\n      border-bottom: 1px solid #d6d6d6; }\n      .content-advantages__fourth-row .fourth-row__title:last-child {\n        border-bottom: none; }\n      .content-advantages__fourth-row .fourth-row__title .title--heading {\n        max-width: 320px;\n        width: 100%;\n        padding-top: 29px; }\n      .content-advantages__fourth-row .fourth-row__title .title--number {\n        padding-bottom: 26px; }\n      .content-advantages__fourth-row .fourth-row__title .title--info {\n        padding-top: 0;\n        padding-bottom: 17px; }\n  .search-hotel {\n    padding-bottom: 0;\n    max-width: 320px;\n    width: 100%; }\n    .search-hotel .search-hotel__title {\n      font-size: 22px;\n      transformation: 0.2s;\n      padding-top: 33px;\n      padding-bottom: 0; }\n    .search-hotel .search-hotel__info {\n      font-size: 17px;\n      font-family: 'PT Sans normal', Helvetica sans-serif;\n      text-align: center;\n      text-transform: uppercase;\n      margin: 0 auto;\n      font-size: 15px;\n      padding-top: 33px;\n      padding-bottom: 42px; }\n    .search-hotel .search-hotel__button {\n      max-width: 280px;\n      height: 58px;\n      width: 90%;\n      margin: auto;\n      margin-bottom: 50px;\n      text-align: center; }\n  .map {\n    max-width: 320px;\n    width: 100%; } }\n\n.footer {\n  display: flex;\n  justify-content: flex-start;\n  max-width: 1200px;\n  width: 100%;\n  height: 120px; }\n\n.footer__hashtag,\n.footer__social,\n.footer__copyright {\n  width: 33.3333%;\n  top: .05em; }\n\n.footer__hashtag {\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n  .footer__hashtag span {\n    margin: 0 auto;\n    font-size: 21px;\n    font-family: 'PT Sans heading', Helvetica sans-serif;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    line-height: 24px; }\n\n.footer__social {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.social-list {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.social-list__item {\n  padding: 0 3px;\n  display: flex;\n  align-items: center; }\n  .social-list__item img {\n    width: 48px;\n    height: 46px; }\n\n.social-list__link img {\n  background-color: #81b3d2; }\n\n.footer__copyright {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center; }\n  .footer__copyright--text {\n    font-size: 17px;\n    font-family: 'PT Sans normal', Helvetica sans-serif;\n    text-align: center;\n    text-transform: uppercase;\n    margin: 0 auto;\n    margin: 0;\n    padding-right: 5px; }\n  .footer__copyright:after {\n    content: url(" + __webpack_require__(16) + "); }\n\n@media screen and (max-width: 320px) {\n  .footer {\n    max-width: 320px;\n    width: 100%;\n    height: 243px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n    .footer .footer__hashtag,\n    .footer .footer__social,\n    .footer .footer__copyright {\n      max-width: 320px;\n      width: 100%; }\n    .footer .footer__social {\n      padding: 41px 0; }\n    .footer .footer__copyright {\n      justify-content: center; } }\n\n.body {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  font-family: \"PT Sans\",Helvetica sans-serif; }\n\n.wrapper {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto; }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/PTS75F.ttf";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/PTN57f.ttf";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5b92c81d726533db0e3bffbe96550460.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0c728aa4a316f1882793fbfbe516cad8.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "581e705cb2e2b82ebf29ab9906bb6539.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "55f71cae194e18fa44e66ac5a9c2cebd.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d8ad0b2d5416abdf481d14b3d18c457.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b9b91ac284211f70b7a5e5936948d0f.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba00f1cd777e31b8c118dfe2766fef55.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8129161b8d110d1bb01bb27b6554b937.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "93ee49cb04499253c13bdccf4b2551c0.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(18);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

window.addEventListener('resize', function() {
    if(window.innerWidth>321){
        var navElements = document.getElementsByClassName('nav__items');
        var navLogo = document.getElementsByClassName('nav__item--logo')
        navElements[0].style.visibility = "visible"
        navLogo[0].style.margin = 0;
    }
});

function toggleNavBar() {
    var hamburger = document.getElementById('nav-trigger');
    var main = document.getElementsByClassName('main');
    var navElements = document.getElementsByClassName('nav__items');
    var navLogo = document.getElementsByClassName('nav__item--logo');
    var navTrigger = document.getElementById('nav-trigger');
    var label = document.getElementById('label');

    if(hamburger.checked && window.innerWidth<321){
        label.className = "x-icon"
        navLogo[0].style.margin = '0';
        navLogo[0].visibility = "visible";
        navElements[0].style.visibility = "visible";
    }
    else if(!hamburger.checked ){
        label.className = "hamburger";
        var navElements = document.getElementsByClassName('nav__items');
        main[0].style.margin = '0';
        navLogo[0].style.marginTop = '-223px';
        navElements[0].style.visibility = "hidden";
        navTrigger.label.style.visibility = "hidden";
        navLogo.visibility = 'visible';
    }
}

/***/ })
/******/ ]);