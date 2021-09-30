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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/DB.json":
/*!***********************!*\
  !*** ./build/DB.json ***!
  \***********************/
/*! exports provided: items, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"items\\\":[{\\\"make\\\":\\\"Culpa\\\",\\\"model\\\":\\\"Aliquam\\\",\\\"price\\\":25436.72,\\\"voted\\\":273,\\\"rating\\\":2.244984739923738,\\\"addedAt\\\":\\\"2020-06-11T16:46:09.864Z\\\",\\\"version\\\":\\\"Fugiat\\\",\\\"mileage\\\":12039,\\\"carRegAt\\\":\\\"2016-03-28T22:42:01.000Z\\\",\\\"equipment\\\":[\\\"transmitter\\\",\\\"matrix\\\",\\\"driver\\\",\\\"hard drive\\\",\\\"circuit\\\",\\\"card\\\",\\\"alarm\\\",\\\"pixel\\\",\\\"circuit\\\",\\\"hard drive\\\",\\\"system\\\",\\\"monitor\\\",\\\"program\\\",\\\"capacitor\\\",\\\"application\\\",\\\"array\\\",\\\"feed\\\",\\\"application\\\",\\\"port\\\"],\\\"description\\\":\\\"Quam est ea occaecati velit nam repellat. Et repudiandae voluptate occaecati est iusto explicabo rem et. Dolores sint ipsa voluptas.\\\\n \\\\rAutem temporibus molestias. Laudantium dolorum ipsa amet incidunt fuga vel reprehenderit. Qui necessitatibus ut impedit nostrum nihil voluptatibus ullam pariatur assumenda. Sed est quod asperiores ut praesentium sint earum. Qui facere nihil. In sint fugit rerum.\\\\n \\\\rEa enim ad ea. Autem beatae ipsam voluptatum aliquid. Est eum qui sequi nihil. Aut sequi sunt occaecati placeat aperiam sunt dolorem natus.\\\",\\\"sellerEmail\\\":\\\"Daren15@gmail.com\\\",\\\"sellerPhone\\\":\\\"+575 (85) 711-23-99\\\",\\\"sellerName\\\":\\\"Casimir Johnson\\\",\\\"sellerCompany\\\":\\\"Blanda and Sons\\\",\\\"id\\\":1,\\\"imagesCount\\\":7},{\\\"make\\\":\\\"Repudiandae\\\",\\\"model\\\":\\\"Consectetur\\\",\\\"price\\\":76284.2,\\\"voted\\\":765,\\\"rating\\\":4.083613032168339,\\\"addedAt\\\":\\\"2020-06-11T19:28:36.701Z\\\",\\\"version\\\":\\\"Sunt\\\",\\\"mileage\\\":24747,\\\"carRegAt\\\":\\\"2017-06-28T02:21:13.102Z\\\",\\\"equipment\\\":[\\\"bandwidth\\\",\\\"microchip\\\",\\\"firewall\\\",\\\"protocol\\\",\\\"matrix\\\",\\\"panel\\\",\\\"capacitor\\\",\\\"program\\\",\\\"matrix\\\",\\\"card\\\",\\\"firewall\\\",\\\"firewall\\\",\\\"bus\\\",\\\"alarm\\\",\\\"program\\\",\\\"sensor\\\",\\\"array\\\",\\\"monitor\\\",\\\"bandwidth\\\",\\\"microchip\\\"],\\\"description\\\":\\\"Suscipit quaerat voluptate ipsam doloremque sit ut magnam repellat. Porro aliquam consequatur autem eaque maxime et praesentium voluptatem quod. Pariatur nam hic ad eveniet et. Quia et in molestias accusamus enim perferendis illo. Accusantium eveniet repudiandae neque et dolor.\\\\n \\\\rNihil laudantium quo et nam rerum laboriosam est necessitatibus non. Molestiae autem dolores corporis velit. Odio possimus in nemo autem et quibusdam ipsa alias ratione. Perferendis consectetur necessitatibus. Omnis inventore inventore. Molestiae est quos inventore aliquid quo sunt ex ea et.\\\\n \\\\rRecusandae quo officia in necessitatibus doloremque sapiente quam eligendi modi. Ratione deleniti minima delectus ut. Beatae esse et sit facere veniam culpa officia consequatur. Totam illo voluptatem esse blanditiis neque id numquam autem. Vel ipsa ea. Animi et et voluptates.\\\",\\\"sellerEmail\\\":\\\"Mckenzie21@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+549 (72) 207-80-20\\\",\\\"sellerName\\\":\\\"Amaya Nikolaus\\\",\\\"sellerCompany\\\":\\\"Ankunding Inc\\\",\\\"id\\\":2,\\\"imagesCount\\\":6},{\\\"make\\\":\\\"Nam\\\",\\\"model\\\":\\\"Culpa\\\",\\\"price\\\":92239.59,\\\"voted\\\":857,\\\"rating\\\":1.21555969463967,\\\"addedAt\\\":\\\"2020-06-11T09:58:15.772Z\\\",\\\"version\\\":\\\"Distinctio\\\",\\\"mileage\\\":224197,\\\"carRegAt\\\":\\\"2018-04-19T10:00:11.001Z\\\",\\\"equipment\\\":[\\\"matrix\\\",\\\"transmitter\\\",\\\"matrix\\\",\\\"monitor\\\",\\\"feed\\\",\\\"panel\\\",\\\"transmitter\\\",\\\"monitor\\\",\\\"bandwidth\\\",\\\"sensor\\\",\\\"hard drive\\\",\\\"pixel\\\",\\\"monitor\\\",\\\"interface\\\",\\\"transmitter\\\",\\\"alarm\\\",\\\"program\\\",\\\"feed\\\",\\\"bus\\\",\\\"driver\\\",\\\"alarm\\\",\\\"monitor\\\"],\\\"description\\\":\\\"Cum tempora sint eveniet dolorem nesciunt est assumenda consequuntur. Consequatur voluptate iusto similique et ut. Consequatur voluptatum natus. Esse odit est quis. Accusantium perferendis eum culpa architecto et ex.\\\\n \\\\rQuae sint aut consequuntur quasi nesciunt in. Et incidunt qui et autem. Eius inventore rem qui sit rerum est. Modi quas tenetur qui doloremque.\\\\n \\\\rSuscipit laborum accusantium non quia qui rerum voluptatem. Sint tenetur sunt sit minus amet. Pariatur maiores aut quod. Dolores dicta deleniti autem deserunt. Commodi sed omnis. Qui dolores quaerat.\\\",\\\"sellerEmail\\\":\\\"Davonte.Wuckert@yahoo.com\\\",\\\"sellerPhone\\\":\\\"+680 (01) 432-14-63\\\",\\\"sellerName\\\":\\\"Chaya Klein\\\",\\\"sellerCompany\\\":\\\"Legros - Howell\\\",\\\"id\\\":3,\\\"imagesCount\\\":7},{\\\"make\\\":\\\"Officia\\\",\\\"model\\\":\\\"Sit\\\",\\\"price\\\":11449.05,\\\"voted\\\":48,\\\"rating\\\":3.5109422126791223,\\\"addedAt\\\":\\\"2020-06-11T01:40:59.714Z\\\",\\\"version\\\":\\\"Ipsam\\\",\\\"mileage\\\":170478,\\\"carRegAt\\\":\\\"2018-04-09T09:28:00.848Z\\\",\\\"equipment\\\":[\\\"application\\\",\\\"sensor\\\",\\\"port\\\",\\\"program\\\",\\\"hard drive\\\",\\\"interface\\\",\\\"bandwidth\\\",\\\"system\\\",\\\"card\\\"],\\\"description\\\":\\\"Omnis exercitationem exercitationem atque sint optio aut quia. Sapiente ipsum cumque ab voluptatem. In enim consequuntur nulla placeat ullam maxime voluptas et error. Fuga est et beatae.\\\\n \\\\rAb quod nam dolorum explicabo. Quos perspiciatis laborum qui necessitatibus similique dolor fugit earum voluptatibus. Est consequatur omnis corrupti. Aliquid ipsam dolor voluptatum repellat commodi ut.\\\\n \\\\rVoluptate saepe aut minima. Laborum consequatur nobis. Quaerat ad autem qui.\\\",\\\"sellerEmail\\\":\\\"Dejuan.Powlowski@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+471 (35) 467-99-37\\\",\\\"sellerName\\\":\\\"Sofia Mante\\\",\\\"sellerCompany\\\":\\\"Kuphal, Paucek and Stanton\\\",\\\"id\\\":4,\\\"imagesCount\\\":2},{\\\"make\\\":\\\"Architecto\\\",\\\"model\\\":\\\"Et\\\",\\\"price\\\":65533.52,\\\"voted\\\":193,\\\"rating\\\":3.502935978156832,\\\"addedAt\\\":\\\"2020-06-11T20:03:46.361Z\\\",\\\"version\\\":\\\"Nobis\\\",\\\"mileage\\\":139501,\\\"carRegAt\\\":\\\"2017-03-24T14:21:03.964Z\\\",\\\"equipment\\\":[\\\"driver\\\",\\\"hard drive\\\",\\\"monitor\\\",\\\"protocol\\\",\\\"monitor\\\",\\\"capacitor\\\",\\\"feed\\\",\\\"panel\\\",\\\"hard drive\\\",\\\"system\\\",\\\"circuit\\\",\\\"hard drive\\\",\\\"driver\\\",\\\"circuit\\\"],\\\"description\\\":\\\"Molestias ut itaque. Quisquam possimus cum assumenda voluptatum atque quam. Aut nobis id voluptate illum qui quod qui reprehenderit. Quia cum occaecati repellat. Dolorem quaerat harum magni quasi aut pariatur quaerat.\\\\n \\\\rEos aut et est. Eveniet eligendi nulla voluptas nihil inventore necessitatibus quia aut. Accusamus aut et fugit molestias.\\\\n \\\\rMaxime ullam dolores veritatis occaecati quasi autem. Esse quis vel nemo accusamus voluptatibus. Delectus mollitia ipsum quibusdam magnam dolores ut velit et voluptatem. Nostrum et laborum debitis est repudiandae rerum nihil voluptatem cumque.\\\",\\\"sellerEmail\\\":\\\"Brooklyn97@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+592 (09) 869-69-85\\\",\\\"sellerName\\\":\\\"Rebeka Kautzer\\\",\\\"sellerCompany\\\":\\\"Kuhn, Pacocha and Murphy\\\",\\\"id\\\":5,\\\"imagesCount\\\":5},{\\\"make\\\":\\\"Dignissimos\\\",\\\"model\\\":\\\"Neque\\\",\\\"price\\\":51645.28,\\\"voted\\\":408,\\\"rating\\\":1.6416325502887323,\\\"addedAt\\\":\\\"2020-06-11T22:57:39.135Z\\\",\\\"version\\\":\\\"Similique\\\",\\\"mileage\\\":286589,\\\"carRegAt\\\":\\\"2015-08-21T23:52:36.981Z\\\",\\\"equipment\\\":[\\\"capacitor\\\",\\\"bandwidth\\\",\\\"hard drive\\\",\\\"alarm\\\",\\\"matrix\\\",\\\"panel\\\",\\\"firewall\\\",\\\"panel\\\",\\\"transmitter\\\",\\\"capacitor\\\",\\\"application\\\",\\\"bandwidth\\\",\\\"panel\\\",\\\"transmitter\\\",\\\"microchip\\\",\\\"driver\\\",\\\"application\\\",\\\"panel\\\"],\\\"description\\\":\\\"Qui dolor dolores perferendis dolore molestias aspernatur. Illum consequuntur qui unde. Ducimus neque iusto sit quidem voluptatem voluptatem ut sed. Magnam quaerat repellat eum quo magni molestiae suscipit earum consequuntur. Rem sunt quos.\\\\n \\\\rLaudantium quam neque ad in. Ex dolorem impedit tenetur. Voluptas eum vero dolorum sint. Harum molestiae ut numquam.\\\\n \\\\rAccusamus maiores vel tempore doloribus quasi et non et. Esse rerum quo facere voluptatem et et animi rerum et. Non soluta repellat rem repellat.\\\",\\\"sellerEmail\\\":\\\"Sarai_Kozey@yahoo.com\\\",\\\"sellerPhone\\\":\\\"+094 (37) 935-36-88\\\",\\\"sellerName\\\":\\\"Rosella Davis\\\",\\\"sellerCompany\\\":\\\"Abernathy - Kuhn\\\",\\\"id\\\":6,\\\"imagesCount\\\":7},{\\\"make\\\":\\\"Praesentium\\\",\\\"model\\\":\\\"Enim\\\",\\\"price\\\":33128.3,\\\"voted\\\":656,\\\"rating\\\":2.3835286343021407,\\\"addedAt\\\":\\\"2020-06-11T02:34:55.220Z\\\",\\\"version\\\":\\\"Doloremque\\\",\\\"mileage\\\":2578,\\\"carRegAt\\\":\\\"2016-02-03T16:45:32.611Z\\\",\\\"equipment\\\":[\\\"bus\\\",\\\"interface\\\",\\\"panel\\\",\\\"driver\\\",\\\"transmitter\\\",\\\"protocol\\\",\\\"card\\\",\\\"hard drive\\\",\\\"monitor\\\",\\\"array\\\",\\\"pixel\\\",\\\"alarm\\\"],\\\"description\\\":\\\"Veritatis voluptas enim autem ab repudiandae qui. Facilis eos beatae cum. Dolores magni impedit earum voluptatum.\\\\n \\\\rConsequatur ipsam totam quia officia debitis possimus molestiae. Et aut qui. Molestiae maiores sint adipisci ut distinctio aspernatur enim placeat explicabo. Eligendi non soluta sunt sed quam esse reprehenderit sint. Ut vel laboriosam.\\\\n \\\\rDeleniti consequatur id. Dolorem deleniti eum enim consectetur in repellendus blanditiis facere. Consequatur aut ut sunt rerum ducimus magnam illum tenetur doloremque. Vero quaerat rerum. Ipsa voluptatibus vitae est ad vel nostrum quas molestias eveniet. Quod deserunt nam porro enim at.\\\",\\\"sellerEmail\\\":\\\"Gerry84@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+163 (58) 048-53-59\\\",\\\"sellerName\\\":\\\"Darren Abernathy\\\",\\\"sellerCompany\\\":\\\"Abernathy - Roberts\\\",\\\"id\\\":7,\\\"imagesCount\\\":2},{\\\"make\\\":\\\"Enim\\\",\\\"model\\\":\\\"Dolor\\\",\\\"price\\\":56779.63,\\\"voted\\\":700,\\\"rating\\\":3.1255047614512312,\\\"addedAt\\\":\\\"2020-06-11T13:45:45.719Z\\\",\\\"version\\\":\\\"Et\\\",\\\"mileage\\\":141978,\\\"carRegAt\\\":\\\"2016-03-05T21:50:05.180Z\\\",\\\"equipment\\\":[\\\"bus\\\",\\\"pixel\\\",\\\"firewall\\\",\\\"capacitor\\\",\\\"interface\\\",\\\"microchip\\\",\\\"card\\\",\\\"driver\\\",\\\"feed\\\",\\\"sensor\\\",\\\"matrix\\\",\\\"bus\\\",\\\"microchip\\\",\\\"driver\\\",\\\"pixel\\\",\\\"protocol\\\",\\\"interface\\\",\\\"protocol\\\",\\\"bus\\\",\\\"capacitor\\\",\\\"array\\\",\\\"card\\\",\\\"card\\\",\\\"port\\\"],\\\"description\\\":\\\"Earum eaque vel fugiat esse sequi adipisci assumenda aut. Velit sed ut pariatur molestiae ipsa quidem. Ratione veritatis quis tempore exercitationem in autem illum aut. Nemo magni doloremque est. Omnis animi culpa.\\\\n \\\\rIn officia voluptatum et fugit rem tenetur modi odio nihil. Amet eveniet quia nostrum nulla ipsam quo et eos. Quae autem pariatur aut similique sit officiis maxime. Quia minus non sit quo amet. Officia veritatis sed cupiditate a officiis.\\\\n \\\\rNecessitatibus eos sequi cumque enim. Aut ipsam est eum. Autem aliquam corrupti odio vel suscipit minima totam. Qui voluptatem voluptatem ducimus et quam. Qui est maiores aut. Qui nulla molestiae aut iste.\\\",\\\"sellerEmail\\\":\\\"Providenci68@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+577 (27) 959-12-50\\\",\\\"sellerName\\\":\\\"Moshe Considine\\\",\\\"sellerCompany\\\":\\\"Smith - Runolfsdottir\\\",\\\"id\\\":8,\\\"imagesCount\\\":6},{\\\"make\\\":\\\"Fuga\\\",\\\"model\\\":\\\"Harum\\\",\\\"price\\\":42708.59,\\\"voted\\\":598,\\\"rating\\\":3.4241914661394217,\\\"addedAt\\\":\\\"2020-06-11T00:20:36.012Z\\\",\\\"version\\\":\\\"Et\\\",\\\"mileage\\\":233828,\\\"carRegAt\\\":\\\"2019-09-11T02:25:57.153Z\\\",\\\"equipment\\\":[\\\"circuit\\\",\\\"matrix\\\",\\\"driver\\\",\\\"bus\\\",\\\"application\\\",\\\"port\\\"],\\\"description\\\":\\\"Minima neque quae iure vero dolore dolorem ab in. Rerum sed temporibus sed maiores vero qui natus officia. Magni quasi nobis voluptatem possimus earum quaerat et voluptatem nesciunt. Adipisci dolore quasi quo alias ut eaque beatae est. Molestias minus aliquid quia blanditiis repellat enim quibusdam fuga.\\\\n \\\\rNostrum est iure nesciunt dicta porro sed voluptate et consequatur. Soluta nulla et. Ea sit nam corporis sunt officiis sint odio. Officia similique culpa ut ipsa eveniet aut ipsam ut. Necessitatibus error fugiat velit consectetur illo. Qui iure voluptatem amet.\\\\n \\\\rSimilique corporis veritatis. Recusandae ut possimus quisquam. Molestiae commodi animi est ad fuga et id quas officiis. Assumenda accusantium eligendi labore distinctio dolorem qui. Asperiores iusto sint. Ullam sapiente voluptatem voluptas nesciunt.\\\",\\\"sellerEmail\\\":\\\"Brandi89@gmail.com\\\",\\\"sellerPhone\\\":\\\"+774 (52) 517-98-49\\\",\\\"sellerName\\\":\\\"Kaycee Waters\\\",\\\"sellerCompany\\\":\\\"Nienow - Gibson\\\",\\\"id\\\":9,\\\"imagesCount\\\":8}]}\");\n\n//# sourceURL=webpack:///./build/DB.json?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _serverRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serverRenderer */ \"./server/serverRenderer.js\");\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('*', _serverRenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('build'));\napp.use(router);\nconst PORT = process.env.PORT || 5000;\napp.listen(PORT, () => {\n  console.log(`Running on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/serverRenderer.js":
/*!**********************************!*\
  !*** ./server/serverRenderer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_store_reducers_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store/reducers/reducer */ \"./src/store/reducers/reducer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _build_DB_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../build/DB.json */ \"./build/DB.json\");\nvar _build_DB_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/DB.json */ \"./build/DB.json\", 1);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _src_shared_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/shared/routes */ \"./src/shared/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst serverRenderer = (req, res) => {\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_8__[\"createStore\"])(_src_store_reducers_reducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _build_DB_json__WEBPACK_IMPORTED_MODULE_9__.items);\n  const activeRoute = _src_shared_routes__WEBPACK_IMPORTED_MODULE_11__[\"default\"].find(route => {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"matchPath\"])(req.url, {\n      path: route.path,\n      exact: true,\n      strict: false\n    });\n  }) || {};\n  const promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData() : Promise.resolve();\n  promise.then(data => {\n    const app = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      staticContext: data\n    })))); // const indexFile = path.resolve(__dirname, 'build/index.html');\n    // fs.readFile(indexFile, 'utf8', (err, data) => {\n    //   if (err) {\n    //     console.error('Something went wrong:', err);\n    //     return res.status(500).send('Oops, better luck next time!');\n    //   }\n    //   return res.send(\n    //     data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`)\n    //   );\n    // });\n\n    res.send(`\n    <!doctype html>\n    <html lang=\"en\">\n       <head>\n          <meta charset=\"utf-8\"/>\n          <link rel=\"icon\" href=\"/favicon.ico\"/>\n          <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/>\n          <meta name=\"theme-color\" content=\"#000000\"/>\n          <meta name=\"description\" content=\"Web site created using create-react-app\"/>\n          <link rel=\"apple-touch-icon\" href=\"/logo192.png\"/>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"/>\n          <link rel=\"manifest\" href=\"/manifest.json\"/>\n          <title>${activeRoute.name}</title>\n          <link href=\"/static/css/main.1d69f8d4.chunk.css\" rel=\"stylesheet\">\n          <script>\n            window.__INITIAL_DATA__ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_2___default()(_build_DB_json__WEBPACK_IMPORTED_MODULE_9__.items)}\n          </script>\n       </head>\n       <body>\n          <noscript>You need to enable JavaScript to run this app.</noscript>\n          <div id=\"root\">${app}</div>\n          <script>!function(e){function t(t){for(var n,o,c=t[0],i=t[1],f=t[2],s=0,p=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(l&&l(t);p.length;)p.shift()();return u.push.apply(u,f||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={2:0},a={2:0},u=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{5:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n=\"static/css/\"+({}[e]||e)+\".\"+{0:\"31d6cfe0\",4:\"31d6cfe0\",5:\"423f4cf7\",6:\"31d6cfe0\",7:\"31d6cfe0\"}[e]+\".chunk.css\",a=c.p+n,u=document.getElementsByTagName(\"link\"),i=0;i<u.length;i++){var f=(l=u[i]).getAttribute(\"data-href\")||l.getAttribute(\"href\");if(\"stylesheet\"===l.rel&&(f===n||f===a))return t()}var s=document.getElementsByTagName(\"style\");for(i=0;i<s.length;i++){var l;if((f=(l=s[i]).getAttribute(\"data-href\"))===n||f===a)return t()}var p=document.createElement(\"link\");p.rel=\"stylesheet\",p.type=\"text/css\",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error(\"Loading CSS chunk \"+e+\" failed.\\n(\"+n+\")\");u.code=\"CSS_CHUNK_LOAD_FAILED\",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a,document.getElementsByTagName(\"head\")[0].appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var u,i=document.createElement(\"script\");i.charset=\"utf-8\",i.timeout=120,c.nc&&i.setAttribute(\"nonce\",c.nc),i.src=function(e){return c.p+\"static/js/\"+({}[e]||e)+\".\"+{0:\"db8096f1\",4:\"ef7c59d9\",5:\"62a4fb56\",6:\"55841171\",7:\"cdefed65\"}[e]+\".chunk.js\"}(e);var f=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(s);var r=a[e];if(0!==r){if(r){var n=t&&(\"load\"===t.type?\"missing\":t.type),o=t&&t.target&&t.target.src;f.message=\"Loading chunk \"+e+\" failed.\\n(\"+n+\": \"+o+\")\",f.name=\"ChunkLoadError\",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var s=setTimeout((function(){u({type:\"timeout\",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,\"a\",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p=\"/\",c.oe=function(e){throw console.error(e),e};var i=this[\"webpackJsonpmy-ssr-app\"]=this[\"webpackJsonpmy-ssr-app\"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=f;r()}([])</script><script src=\"/static/js/3.423d3f8c.chunk.js\"></script><script src=\"/static/js/main.7bb53db9.chunk.js\"></script>\n       </body>\n    </html>\n    `);\n  }).catch(e => {\n    console.log(e);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverRenderer);\n\n//# sourceURL=webpack:///./server/serverRenderer.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".App {\\n  position: relative;\\n  height: auto;\\n  min-height: 100vh;\\n}\\n\\n.App-logo {\\n  height: 40vmin;\\n  pointer-events: none;\\n}\\n\\n@media (prefers-reduced-motion: no-preference) {\\n  .App-logo {\\n    animation: App-logo-spin infinite 20s linear;\\n  }\\n}\\n\\n.App-header {\\n  background-color: #282c34;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: calc(10px + 2vmin);\\n  color: white;\\n}\\n\\n.App-link {\\n  color: #61dafb;\\n}\\n\\n@keyframes App-logo-spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n\n\n\n\n\n\nconst App = ({\n  staticContext\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _shared_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(({\n    path,\n    fetchInitialData,\n    component: C\n  }) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      key: path,\n      path: path,\n      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, {\n        data: staticContext,\n        fetchInitialData: fetchInitialData\n      })\n    });\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(App)); // export default App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/DB.json":
/*!*********************!*\
  !*** ./src/DB.json ***!
  \*********************/
/*! exports provided: items, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"items\\\":[{\\\"make\\\":\\\"Culpa\\\",\\\"model\\\":\\\"Aliquam\\\",\\\"price\\\":25436.72,\\\"voted\\\":273,\\\"rating\\\":2.244984739923738,\\\"addedAt\\\":\\\"2020-06-11T16:46:09.864Z\\\",\\\"version\\\":\\\"Fugiat\\\",\\\"mileage\\\":12039,\\\"carRegAt\\\":\\\"2016-03-28T22:42:01.000Z\\\",\\\"equipment\\\":[\\\"transmitter\\\",\\\"matrix\\\",\\\"driver\\\",\\\"hard drive\\\",\\\"circuit\\\",\\\"card\\\",\\\"alarm\\\",\\\"pixel\\\",\\\"circuit\\\",\\\"hard drive\\\",\\\"system\\\",\\\"monitor\\\",\\\"program\\\",\\\"capacitor\\\",\\\"application\\\",\\\"array\\\",\\\"feed\\\",\\\"application\\\",\\\"port\\\"],\\\"description\\\":\\\"Quam est ea occaecati velit nam repellat. Et repudiandae voluptate occaecati est iusto explicabo rem et. Dolores sint ipsa voluptas.\\\\n \\\\rAutem temporibus molestias. Laudantium dolorum ipsa amet incidunt fuga vel reprehenderit. Qui necessitatibus ut impedit nostrum nihil voluptatibus ullam pariatur assumenda. Sed est quod asperiores ut praesentium sint earum. Qui facere nihil. In sint fugit rerum.\\\\n \\\\rEa enim ad ea. Autem beatae ipsam voluptatum aliquid. Est eum qui sequi nihil. Aut sequi sunt occaecati placeat aperiam sunt dolorem natus.\\\",\\\"sellerEmail\\\":\\\"Daren15@gmail.com\\\",\\\"sellerPhone\\\":\\\"+575 (85) 711-23-99\\\",\\\"sellerName\\\":\\\"Casimir Johnson\\\",\\\"sellerCompany\\\":\\\"Blanda and Sons\\\",\\\"id\\\":1,\\\"imagesCount\\\":7},{\\\"make\\\":\\\"Repudiandae\\\",\\\"model\\\":\\\"Consectetur\\\",\\\"price\\\":76284.2,\\\"voted\\\":765,\\\"rating\\\":4.083613032168339,\\\"addedAt\\\":\\\"2020-06-11T19:28:36.701Z\\\",\\\"version\\\":\\\"Sunt\\\",\\\"mileage\\\":24747,\\\"carRegAt\\\":\\\"2017-06-28T02:21:13.102Z\\\",\\\"equipment\\\":[\\\"bandwidth\\\",\\\"microchip\\\",\\\"firewall\\\",\\\"protocol\\\",\\\"matrix\\\",\\\"panel\\\",\\\"capacitor\\\",\\\"program\\\",\\\"matrix\\\",\\\"card\\\",\\\"firewall\\\",\\\"firewall\\\",\\\"bus\\\",\\\"alarm\\\",\\\"program\\\",\\\"sensor\\\",\\\"array\\\",\\\"monitor\\\",\\\"bandwidth\\\",\\\"microchip\\\"],\\\"description\\\":\\\"Suscipit quaerat voluptate ipsam doloremque sit ut magnam repellat. Porro aliquam consequatur autem eaque maxime et praesentium voluptatem quod. Pariatur nam hic ad eveniet et. Quia et in molestias accusamus enim perferendis illo. Accusantium eveniet repudiandae neque et dolor.\\\\n \\\\rNihil laudantium quo et nam rerum laboriosam est necessitatibus non. Molestiae autem dolores corporis velit. Odio possimus in nemo autem et quibusdam ipsa alias ratione. Perferendis consectetur necessitatibus. Omnis inventore inventore. Molestiae est quos inventore aliquid quo sunt ex ea et.\\\\n \\\\rRecusandae quo officia in necessitatibus doloremque sapiente quam eligendi modi. Ratione deleniti minima delectus ut. Beatae esse et sit facere veniam culpa officia consequatur. Totam illo voluptatem esse blanditiis neque id numquam autem. Vel ipsa ea. Animi et et voluptates.\\\",\\\"sellerEmail\\\":\\\"Mckenzie21@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+549 (72) 207-80-20\\\",\\\"sellerName\\\":\\\"Amaya Nikolaus\\\",\\\"sellerCompany\\\":\\\"Ankunding Inc\\\",\\\"id\\\":2,\\\"imagesCount\\\":6},{\\\"make\\\":\\\"Nam\\\",\\\"model\\\":\\\"Culpa\\\",\\\"price\\\":92239.59,\\\"voted\\\":857,\\\"rating\\\":1.21555969463967,\\\"addedAt\\\":\\\"2020-06-11T09:58:15.772Z\\\",\\\"version\\\":\\\"Distinctio\\\",\\\"mileage\\\":224197,\\\"carRegAt\\\":\\\"2018-04-19T10:00:11.001Z\\\",\\\"equipment\\\":[\\\"matrix\\\",\\\"transmitter\\\",\\\"matrix\\\",\\\"monitor\\\",\\\"feed\\\",\\\"panel\\\",\\\"transmitter\\\",\\\"monitor\\\",\\\"bandwidth\\\",\\\"sensor\\\",\\\"hard drive\\\",\\\"pixel\\\",\\\"monitor\\\",\\\"interface\\\",\\\"transmitter\\\",\\\"alarm\\\",\\\"program\\\",\\\"feed\\\",\\\"bus\\\",\\\"driver\\\",\\\"alarm\\\",\\\"monitor\\\"],\\\"description\\\":\\\"Cum tempora sint eveniet dolorem nesciunt est assumenda consequuntur. Consequatur voluptate iusto similique et ut. Consequatur voluptatum natus. Esse odit est quis. Accusantium perferendis eum culpa architecto et ex.\\\\n \\\\rQuae sint aut consequuntur quasi nesciunt in. Et incidunt qui et autem. Eius inventore rem qui sit rerum est. Modi quas tenetur qui doloremque.\\\\n \\\\rSuscipit laborum accusantium non quia qui rerum voluptatem. Sint tenetur sunt sit minus amet. Pariatur maiores aut quod. Dolores dicta deleniti autem deserunt. Commodi sed omnis. Qui dolores quaerat.\\\",\\\"sellerEmail\\\":\\\"Davonte.Wuckert@yahoo.com\\\",\\\"sellerPhone\\\":\\\"+680 (01) 432-14-63\\\",\\\"sellerName\\\":\\\"Chaya Klein\\\",\\\"sellerCompany\\\":\\\"Legros - Howell\\\",\\\"id\\\":3,\\\"imagesCount\\\":7},{\\\"make\\\":\\\"Officia\\\",\\\"model\\\":\\\"Sit\\\",\\\"price\\\":11449.05,\\\"voted\\\":48,\\\"rating\\\":3.5109422126791223,\\\"addedAt\\\":\\\"2020-06-11T01:40:59.714Z\\\",\\\"version\\\":\\\"Ipsam\\\",\\\"mileage\\\":170478,\\\"carRegAt\\\":\\\"2018-04-09T09:28:00.848Z\\\",\\\"equipment\\\":[\\\"application\\\",\\\"sensor\\\",\\\"port\\\",\\\"program\\\",\\\"hard drive\\\",\\\"interface\\\",\\\"bandwidth\\\",\\\"system\\\",\\\"card\\\"],\\\"description\\\":\\\"Omnis exercitationem exercitationem atque sint optio aut quia. Sapiente ipsum cumque ab voluptatem. In enim consequuntur nulla placeat ullam maxime voluptas et error. Fuga est et beatae.\\\\n \\\\rAb quod nam dolorum explicabo. Quos perspiciatis laborum qui necessitatibus similique dolor fugit earum voluptatibus. Est consequatur omnis corrupti. Aliquid ipsam dolor voluptatum repellat commodi ut.\\\\n \\\\rVoluptate saepe aut minima. Laborum consequatur nobis. Quaerat ad autem qui.\\\",\\\"sellerEmail\\\":\\\"Dejuan.Powlowski@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+471 (35) 467-99-37\\\",\\\"sellerName\\\":\\\"Sofia Mante\\\",\\\"sellerCompany\\\":\\\"Kuphal, Paucek and Stanton\\\",\\\"id\\\":4,\\\"imagesCount\\\":2},{\\\"make\\\":\\\"Architecto\\\",\\\"model\\\":\\\"Et\\\",\\\"price\\\":65533.52,\\\"voted\\\":193,\\\"rating\\\":3.502935978156832,\\\"addedAt\\\":\\\"2020-06-11T20:03:46.361Z\\\",\\\"version\\\":\\\"Nobis\\\",\\\"mileage\\\":139501,\\\"carRegAt\\\":\\\"2017-03-24T14:21:03.964Z\\\",\\\"equipment\\\":[\\\"driver\\\",\\\"hard drive\\\",\\\"monitor\\\",\\\"protocol\\\",\\\"monitor\\\",\\\"capacitor\\\",\\\"feed\\\",\\\"panel\\\",\\\"hard drive\\\",\\\"system\\\",\\\"circuit\\\",\\\"hard drive\\\",\\\"driver\\\",\\\"circuit\\\"],\\\"description\\\":\\\"Molestias ut itaque. Quisquam possimus cum assumenda voluptatum atque quam. Aut nobis id voluptate illum qui quod qui reprehenderit. Quia cum occaecati repellat. Dolorem quaerat harum magni quasi aut pariatur quaerat.\\\\n \\\\rEos aut et est. Eveniet eligendi nulla voluptas nihil inventore necessitatibus quia aut. Accusamus aut et fugit molestias.\\\\n \\\\rMaxime ullam dolores veritatis occaecati quasi autem. Esse quis vel nemo accusamus voluptatibus. Delectus mollitia ipsum quibusdam magnam dolores ut velit et voluptatem. Nostrum et laborum debitis est repudiandae rerum nihil voluptatem cumque.\\\",\\\"sellerEmail\\\":\\\"Brooklyn97@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+592 (09) 869-69-85\\\",\\\"sellerName\\\":\\\"Rebeka Kautzer\\\",\\\"sellerCompany\\\":\\\"Kuhn, Pacocha and Murphy\\\",\\\"id\\\":5,\\\"imagesCount\\\":5},{\\\"make\\\":\\\"Dignissimos\\\",\\\"model\\\":\\\"Neque\\\",\\\"price\\\":51645.28,\\\"voted\\\":408,\\\"rating\\\":1.6416325502887323,\\\"addedAt\\\":\\\"2020-06-11T22:57:39.135Z\\\",\\\"version\\\":\\\"Similique\\\",\\\"mileage\\\":286589,\\\"carRegAt\\\":\\\"2015-08-21T23:52:36.981Z\\\",\\\"equipment\\\":[\\\"capacitor\\\",\\\"bandwidth\\\",\\\"hard drive\\\",\\\"alarm\\\",\\\"matrix\\\",\\\"panel\\\",\\\"firewall\\\",\\\"panel\\\",\\\"transmitter\\\",\\\"capacitor\\\",\\\"application\\\",\\\"bandwidth\\\",\\\"panel\\\",\\\"transmitter\\\",\\\"microchip\\\",\\\"driver\\\",\\\"application\\\",\\\"panel\\\"],\\\"description\\\":\\\"Qui dolor dolores perferendis dolore molestias aspernatur. Illum consequuntur qui unde. Ducimus neque iusto sit quidem voluptatem voluptatem ut sed. Magnam quaerat repellat eum quo magni molestiae suscipit earum consequuntur. Rem sunt quos.\\\\n \\\\rLaudantium quam neque ad in. Ex dolorem impedit tenetur. Voluptas eum vero dolorum sint. Harum molestiae ut numquam.\\\\n \\\\rAccusamus maiores vel tempore doloribus quasi et non et. Esse rerum quo facere voluptatem et et animi rerum et. Non soluta repellat rem repellat.\\\",\\\"sellerEmail\\\":\\\"Sarai_Kozey@yahoo.com\\\",\\\"sellerPhone\\\":\\\"+094 (37) 935-36-88\\\",\\\"sellerName\\\":\\\"Rosella Davis\\\",\\\"sellerCompany\\\":\\\"Abernathy - Kuhn\\\",\\\"id\\\":6,\\\"imagesCount\\\":7},{\\\"make\\\":\\\"Praesentium\\\",\\\"model\\\":\\\"Enim\\\",\\\"price\\\":33128.3,\\\"voted\\\":656,\\\"rating\\\":2.3835286343021407,\\\"addedAt\\\":\\\"2020-06-11T02:34:55.220Z\\\",\\\"version\\\":\\\"Doloremque\\\",\\\"mileage\\\":2578,\\\"carRegAt\\\":\\\"2016-02-03T16:45:32.611Z\\\",\\\"equipment\\\":[\\\"bus\\\",\\\"interface\\\",\\\"panel\\\",\\\"driver\\\",\\\"transmitter\\\",\\\"protocol\\\",\\\"card\\\",\\\"hard drive\\\",\\\"monitor\\\",\\\"array\\\",\\\"pixel\\\",\\\"alarm\\\"],\\\"description\\\":\\\"Veritatis voluptas enim autem ab repudiandae qui. Facilis eos beatae cum. Dolores magni impedit earum voluptatum.\\\\n \\\\rConsequatur ipsam totam quia officia debitis possimus molestiae. Et aut qui. Molestiae maiores sint adipisci ut distinctio aspernatur enim placeat explicabo. Eligendi non soluta sunt sed quam esse reprehenderit sint. Ut vel laboriosam.\\\\n \\\\rDeleniti consequatur id. Dolorem deleniti eum enim consectetur in repellendus blanditiis facere. Consequatur aut ut sunt rerum ducimus magnam illum tenetur doloremque. Vero quaerat rerum. Ipsa voluptatibus vitae est ad vel nostrum quas molestias eveniet. Quod deserunt nam porro enim at.\\\",\\\"sellerEmail\\\":\\\"Gerry84@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+163 (58) 048-53-59\\\",\\\"sellerName\\\":\\\"Darren Abernathy\\\",\\\"sellerCompany\\\":\\\"Abernathy - Roberts\\\",\\\"id\\\":7,\\\"imagesCount\\\":2},{\\\"make\\\":\\\"Enim\\\",\\\"model\\\":\\\"Dolor\\\",\\\"price\\\":56779.63,\\\"voted\\\":700,\\\"rating\\\":3.1255047614512312,\\\"addedAt\\\":\\\"2020-06-11T13:45:45.719Z\\\",\\\"version\\\":\\\"Et\\\",\\\"mileage\\\":141978,\\\"carRegAt\\\":\\\"2016-03-05T21:50:05.180Z\\\",\\\"equipment\\\":[\\\"bus\\\",\\\"pixel\\\",\\\"firewall\\\",\\\"capacitor\\\",\\\"interface\\\",\\\"microchip\\\",\\\"card\\\",\\\"driver\\\",\\\"feed\\\",\\\"sensor\\\",\\\"matrix\\\",\\\"bus\\\",\\\"microchip\\\",\\\"driver\\\",\\\"pixel\\\",\\\"protocol\\\",\\\"interface\\\",\\\"protocol\\\",\\\"bus\\\",\\\"capacitor\\\",\\\"array\\\",\\\"card\\\",\\\"card\\\",\\\"port\\\"],\\\"description\\\":\\\"Earum eaque vel fugiat esse sequi adipisci assumenda aut. Velit sed ut pariatur molestiae ipsa quidem. Ratione veritatis quis tempore exercitationem in autem illum aut. Nemo magni doloremque est. Omnis animi culpa.\\\\n \\\\rIn officia voluptatum et fugit rem tenetur modi odio nihil. Amet eveniet quia nostrum nulla ipsam quo et eos. Quae autem pariatur aut similique sit officiis maxime. Quia minus non sit quo amet. Officia veritatis sed cupiditate a officiis.\\\\n \\\\rNecessitatibus eos sequi cumque enim. Aut ipsam est eum. Autem aliquam corrupti odio vel suscipit minima totam. Qui voluptatem voluptatem ducimus et quam. Qui est maiores aut. Qui nulla molestiae aut iste.\\\",\\\"sellerEmail\\\":\\\"Providenci68@hotmail.com\\\",\\\"sellerPhone\\\":\\\"+577 (27) 959-12-50\\\",\\\"sellerName\\\":\\\"Moshe Considine\\\",\\\"sellerCompany\\\":\\\"Smith - Runolfsdottir\\\",\\\"id\\\":8,\\\"imagesCount\\\":6},{\\\"make\\\":\\\"Fuga\\\",\\\"model\\\":\\\"Harum\\\",\\\"price\\\":42708.59,\\\"voted\\\":598,\\\"rating\\\":3.4241914661394217,\\\"addedAt\\\":\\\"2020-06-11T00:20:36.012Z\\\",\\\"version\\\":\\\"Et\\\",\\\"mileage\\\":233828,\\\"carRegAt\\\":\\\"2019-09-11T02:25:57.153Z\\\",\\\"equipment\\\":[\\\"circuit\\\",\\\"matrix\\\",\\\"driver\\\",\\\"bus\\\",\\\"application\\\",\\\"port\\\"],\\\"description\\\":\\\"Minima neque quae iure vero dolore dolorem ab in. Rerum sed temporibus sed maiores vero qui natus officia. Magni quasi nobis voluptatem possimus earum quaerat et voluptatem nesciunt. Adipisci dolore quasi quo alias ut eaque beatae est. Molestias minus aliquid quia blanditiis repellat enim quibusdam fuga.\\\\n \\\\rNostrum est iure nesciunt dicta porro sed voluptate et consequatur. Soluta nulla et. Ea sit nam corporis sunt officiis sint odio. Officia similique culpa ut ipsa eveniet aut ipsam ut. Necessitatibus error fugiat velit consectetur illo. Qui iure voluptatem amet.\\\\n \\\\rSimilique corporis veritatis. Recusandae ut possimus quisquam. Molestiae commodi animi est ad fuga et id quas officiis. Assumenda accusantium eligendi labore distinctio dolorem qui. Asperiores iusto sint. Ullam sapiente voluptatem voluptas nesciunt.\\\",\\\"sellerEmail\\\":\\\"Brandi89@gmail.com\\\",\\\"sellerPhone\\\":\\\"+774 (52) 517-98-49\\\",\\\"sellerName\\\":\\\"Kaycee Waters\\\",\\\"sellerCompany\\\":\\\"Nienow - Gibson\\\",\\\"id\\\":9,\\\"imagesCount\\\":8}]}\");\n\n//# sourceURL=webpack:///./src/DB.json?");

/***/ }),

/***/ "./src/components/Home/Filter/Filter.js":
/*!**********************************************!*\
  !*** ./src/components/Home/Filter/Filter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Price */ \"./src/components/Home/Filter/Price.js\");\n/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rating */ \"./src/components/Home/Filter/Rating.js\");\n/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Registration */ \"./src/components/Home/Filter/Registration.js\");\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"@mui/material/useMediaQuery\");\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4\n};\nconst buttonStyle = {\n  textTransform: 'none',\n  color: '#7f8c8d',\n  minWidth: '64px',\n  padding: '12.5px 25px',\n  border: '1px solid grey',\n  backgroundColor: 'transparent',\n  borderRadius: 4,\n  fontSize: 16,\n  fontWeight: 400\n};\n\nconst Filter = ({\n  setRating,\n  setRegistration,\n  setPrice\n}) => {\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);\n\n  const handleOpen = () => setOpen(true);\n\n  const handleClose = () => setOpen(false);\n\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"useTheme\"])();\n  const largeScreen = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.up(\"md\"));\n  const filterLargeScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Stack\"], {\n    spacing: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Rating__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    setRating: setRating\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Registration__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    setRegistration: setRegistration\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Price__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setPrice: setPrice\n  }));\n  const filterSmallScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    style: buttonStyle,\n    onClick: handleOpen\n  }, \"Filter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"], {\n    sx: {\n      '& .css-1wnsr1i': {\n        border: 'none'\n      },\n      '& .MuiTypography-body1': {\n        color: '#7f8c8d'\n      },\n      '& .MuiCheckbox-root': {\n        color: '#7f8c8d'\n      }\n    },\n    open: open,\n    onClose: handleClose,\n    \"aria-labelledby\": \"modal-modal-title\",\n    \"aria-describedby\": \"modal-modal-description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: style\n  }, filterLargeScreen)));\n  const filter = largeScreen ? filterLargeScreen : filterSmallScreen;\n  return filter;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filter);\n\n//# sourceURL=webpack:///./src/components/Home/Filter/Filter.js?");

/***/ }),

/***/ "./src/components/Home/Filter/Price.js":
/*!*********************************************!*\
  !*** ./src/components/Home/Filter/Price.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n\n\n\nconst menuItemStyle = {\n  paddingTop: '8px',\n  paddingBottom: '8px',\n  display: 'block',\n  paddingLeft: '8px'\n};\n\nconst Price = ({\n  setPrice\n}) => {\n  const [priceCar, setPriceCar] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({\n    'from': '',\n    'to': ''\n  });\n\n  const handleChange = event => {\n    const newPriceCar = { ...priceCar,\n      [event.target.name]: event.target.value\n    };\n    setPriceCar(newPriceCar);\n    setPrice(newPriceCar);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], null, \"Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 2\n  }, Object.keys(priceCar).map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 6,\n    key: item\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"FormControl\"], {\n    fullWidth: true,\n    sx: {\n      marginTop: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"InputLabel\"], {\n    id: `${item}-label`\n  }, item.charAt(0).toUpperCase().concat(item.slice(1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Select\"], {\n    style: {\n      width: '100%'\n    },\n    labelId: `${item}-label`,\n    id: item,\n    value: priceCar[item],\n    name: item,\n    onChange: handleChange,\n    label: item\n  }, _utils__WEBPACK_IMPORTED_MODULE_2__[\"priceList\"].map(price => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"MenuItem\"], {\n    key: price,\n    style: menuItemStyle,\n    value: price\n  }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"numberFormat\"])(price), \" CHF\"))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Price);\n\n//# sourceURL=webpack:///./src/components/Home/Filter/Price.js?");

/***/ }),

/***/ "./src/components/Home/Filter/Rating.js":
/*!**********************************************!*\
  !*** ./src/components/Home/Filter/Rating.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormGroup */ \"@mui/material/FormGroup\");\n/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"@mui/material/FormControlLabel\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Checkbox */ \"@mui/material/Checkbox\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst Rating = ({\n  setRating\n}) => {\n  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({\n    '1': false,\n    '2': false,\n    '3': false,\n    '4': false,\n    '5': false\n  });\n\n  const handleChange = event => {\n    const newState = { ...state,\n      [event.target.name]: event.target.checked\n    };\n    setState(newState);\n    setRating(newState);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], null, \"Rating\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 2\n  }, Object.keys(state).map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 6,\n    key: item\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    style: {\n      marginLeft: 0\n    },\n    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      checked: state[item],\n      onChange: handleChange,\n      name: item\n    }),\n    label: item\n  }))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rating);\n\n//# sourceURL=webpack:///./src/components/Home/Filter/Rating.js?");

/***/ }),

/***/ "./src/components/Home/Filter/Registration.js":
/*!****************************************************!*\
  !*** ./src/components/Home/Filter/Registration.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n\n\n\nconst menuItemStyle = {\n  paddingTop: '8px',\n  paddingBottom: '8px',\n  display: 'block',\n  paddingLeft: '8px'\n};\n\nconst Registration = ({\n  setRegistration\n}) => {\n  const [registrationDate, setRegistrationDate] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({\n    'from': '',\n    'to': ''\n  });\n\n  const handleChange = event => {\n    const newRegistrationDate = { ...registrationDate,\n      [event.target.name]: event.target.value\n    };\n    setRegistrationDate(newRegistrationDate);\n    setRegistration(newRegistrationDate);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], null, \"Registration\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 2\n  }, Object.keys(registrationDate).map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 6,\n    key: item\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"FormControl\"], {\n    fullWidth: true,\n    sx: {\n      marginTop: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"InputLabel\"], {\n    id: `${item}-label`\n  }, item.charAt(0).toUpperCase().concat(item.slice(1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Select\"], {\n    style: {\n      width: '100%'\n    },\n    labelId: `${item}-label`,\n    id: item,\n    value: registrationDate[item],\n    name: item,\n    onChange: handleChange,\n    label: item\n  }, _utils__WEBPACK_IMPORTED_MODULE_2__[\"registrationYears\"].map(year => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"MenuItem\"], {\n    key: year,\n    style: menuItemStyle,\n    value: year\n  }, year))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\n\n//# sourceURL=webpack:///./src/components/Home/Filter/Registration.js?");

/***/ }),

/***/ "./src/components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItems */ \"./src/components/Home/ListItems.js\");\n/* harmony import */ var _SidePart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidePart */ \"./src/components/Home/SidePart.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _DB_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DB.json */ \"./src/DB.json\");\nvar _DB_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../DB.json */ \"./src/DB.json\", 1);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst Home = ({\n  products,\n  setProducts\n}) => {\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"useTheme\"])();\n  const largeScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.up('md'));\n  const [rating, setRating] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [registration, setRegistration] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    'from': '',\n    'to': ''\n  });\n  const [price, setPrice] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    'from': '',\n    'to': ''\n  });\n  const [sorter, setSorter] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('default');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => Object(_utils__WEBPACK_IMPORTED_MODULE_7__[\"sortProducts\"])(sorter, [...products], setProducts), [sorter, rating, registration, price]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => Object(_utils__WEBPACK_IMPORTED_MODULE_7__[\"filterProducts\"])(rating, registration, price, _DB_json__WEBPACK_IMPORTED_MODULE_6__, setProducts), [rating, registration, price]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    direction: largeScreen ? \"row\" : \"column-reverse\",\n    sx: {\n      margin: 0,\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    md: 8,\n    style: {\n      paddingLeft: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    products: products\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    md: 4,\n    style: {\n      paddingLeft: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidePart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setRating: setRating,\n    setPrice: setPrice,\n    setRegistration: setRegistration,\n    setSorter: setSorter\n  })));\n};\n\nconst mapStateToProps = state => ({\n  products: state\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps, {\n  setProducts: _store_actions__WEBPACK_IMPORTED_MODULE_9__[\"setProducts\"]\n})(Home));\n\n//# sourceURL=webpack:///./src/components/Home/Home.js?");

/***/ }),

/***/ "./src/components/Home/ListItems.js":
/*!******************************************!*\
  !*** ./src/components/Home/ListItems.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard/ProductCard */ \"./src/components/Home/ProductCard/ProductCard.js\");\n\n\n\n\nconst ListItems = ({\n  products\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 2\n  }, products === null || products === void 0 ? void 0 : products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    product: product\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItems);\n\n//# sourceURL=webpack:///./src/components/Home/ListItems.js?");

/***/ }),

/***/ "./src/components/Home/ProductCard/ProductCard.js":
/*!********************************************************!*\
  !*** ./src/components/Home/ProductCard/ProductCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductImage */ \"./src/components/Home/ProductCard/ProductImage.js\");\n/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductInfo */ \"./src/components/Home/ProductCard/ProductInfo.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst ProductCard = ({\n  product: {\n    id,\n    make,\n    model,\n    price,\n    rating,\n    carRegAt,\n    mileage,\n    version\n  }\n}) => {\n  const productInfo = {\n    make,\n    model,\n    price,\n    rating,\n    carRegAt,\n    mileage,\n    version\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    maxWidth: \"xl\",\n    style: {\n      padding: 10,\n      border: '1px solid #7f8c8d'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: `/products/${id}`,\n    style: {\n      color: 'grey'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    id: id\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    productInfo: productInfo\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\n//# sourceURL=webpack:///./src/components/Home/ProductCard/ProductCard.js?");

/***/ }),

/***/ "./src/components/Home/ProductCard/ProductImage.js":
/*!*********************************************************!*\
  !*** ./src/components/Home/ProductCard/ProductImage.js ***!
  \*********************************************************/
/*! exports provided: ImageHolder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageHolder\", function() { return ImageHolder; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-material-ui-carousel */ \"react-material-ui-carousel\");\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"@mui/icons-material/ArrowForwardIos\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIosNew */ \"@mui/icons-material/ArrowBackIosNew\");\n/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ProductImage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductImage.module.css */ \"./src/components/Home/ProductCard/ProductImage.module.css\");\n\n\n\n\n\n\nconst ImageHolder = ({\n  id,\n  number\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _ProductImage_module_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Picture\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"picture\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"source\", {\n    srcset: `${process.env.PUBLIC_URL}/assets/images/${id}/${number}-sm.webp 360w,\n                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-md.webp 768w,\n                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-lg.webp 1025w,\n                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-xl.webp 1280w,`,\n    type: \"image/webp\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"source\", {\n    srcset: `${process.env.PUBLIC_URL}/assets/images/${id}/${number}-sm.jpg 360w,\n                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-md.jpg 768w,\n                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-lg.jpg 1025w,\n                            ${process.env.PUBLIC_URL}/assets/images/${id}/${number}-xl.jpg 1280w,`,\n    type: \"image/jpg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: `${process.env.PUBLIC_URL}/assets/images/${id}/${number}-lg.jpg`,\n    alt: `Car image ${number}`\n  })));\n};\n\nconst ProductImage = ({\n  id,\n  modal\n}) => {\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    indicatorIconButtonProps: {\n      style: {\n        display: modal ? 'none' : 'auto'\n      }\n    },\n    navButtonsProps: {\n      // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS\n      style: {\n        transform: modal ? 'scale(2.5)' : 'scale(1)'\n      }\n    },\n    NavButton: ({\n      onClick,\n      className,\n      style,\n      next,\n      prev\n    }) => {\n      const onClickHandler = e => {\n        e.preventDefault();\n        onClick();\n      };\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        component: _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_3___default.a,\n        onClick: e => onClickHandler(e),\n        className: className,\n        style: style\n      }, next && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_3___default.a, null), prev && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_4___default.a, null));\n    },\n    sx: {\n      padding: 0\n    },\n    autoPlay: false\n  }, Array.from(Array(7)).map((_, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageHolder, {\n    id: id,\n    number: i + 1,\n    key: i\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductImage);\n\n//# sourceURL=webpack:///./src/components/Home/ProductCard/ProductImage.js?");

/***/ }),

/***/ "./src/components/Home/ProductCard/ProductImage.module.css":
/*!*****************************************************************!*\
  !*** ./src/components/Home/ProductCard/ProductImage.module.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"._1w5eD3K7O66hFL2BHcliqq {\\n    position: relative;\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n._1w5eD3K7O66hFL2BHcliqq::after {\\n    display: block;\\n    content: \\\"\\\";\\n    padding-bottom: 75%;\\n}\\n\\n._1w5eD3K7O66hFL2BHcliqq img {\\n    position: absolute;\\n    left: 0;\\n    top: 0;\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n    ._1w5eD3K7O66hFL2BHcliqq::after {\\n        padding-bottom: 56.25%;\\n    }\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Picture\": \"_1w5eD3K7O66hFL2BHcliqq\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Home/ProductCard/ProductImage.module.css?");

/***/ }),

/***/ "./src/components/Home/ProductCard/ProductInfo.js":
/*!********************************************************!*\
  !*** ./src/components/Home/ProductCard/ProductInfo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _mui_icons_material_DateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/DateRange */ \"@mui/icons-material/DateRange\");\n/* harmony import */ var _mui_icons_material_DateRange__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DateRange__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_AddRoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/AddRoad */ \"@mui/icons-material/AddRoad\");\n/* harmony import */ var _mui_icons_material_AddRoad__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddRoad__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst iconStyle = {\n  marginRight: 5,\n  fontSize: 25\n};\nconst nameStyle = {\n  fontWeight: '500',\n  letterSpacing: 1\n};\nconst priceStyle = {\n  fontWeight: '500',\n  letterSpacing: 1\n};\nconst normalStyle = {\n  fontWeight: '300',\n  fontSize: 14,\n  lineHeight: 2\n};\n\nconst ProductInfo = ({\n  productInfo: {\n    make,\n    model,\n    price,\n    rating,\n    carRegAt,\n    mileage,\n    version\n  }\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    style: nameStyle\n  }, make, \" \", model, \" \", version)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 6,\n    sx: {\n      display: 'flex',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Icon\"], {\n    component: _mui_icons_material_DateRange__WEBPACK_IMPORTED_MODULE_3___default.a,\n    style: iconStyle\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    style: normalStyle\n  }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"formatDate\"])(carRegAt))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 6,\n    sx: {\n      display: 'flex',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Icon\"], {\n    component: _mui_icons_material_AddRoad__WEBPACK_IMPORTED_MODULE_4___default.a,\n    style: iconStyle\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    style: normalStyle\n  }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"numberFormat\"])(mileage), \"km\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    style: priceStyle\n  }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"numberFormat\"])(price), \"-CHF\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    item: true,\n    xs: 6\n  }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"renderStars\"])(rating)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductInfo);\n\n//# sourceURL=webpack:///./src/components/Home/ProductCard/ProductInfo.js?");

/***/ }),

/***/ "./src/components/Home/SidePart.js":
/*!*****************************************!*\
  !*** ./src/components/Home/SidePart.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Filter_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter/Filter */ \"./src/components/Home/Filter/Filter.js\");\n/* harmony import */ var _Sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sorter */ \"./src/components/Home/Sorter.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst gridStyle = {\n  width: '100%',\n  color: \"#7f8c8d\",\n  marginLeft: 0\n};\n\nconst SidePart = ({\n  setSorter,\n  setRating,\n  setRegistration,\n  setPrice\n}) => {\n  const them = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__[\"useTheme\"])();\n  const largeScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(them.breakpoints.up('md'));\n  const smallScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(them.breakpoints.between('xs', 'sm'));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    container: true,\n    direction: largeScreen ? \"column\" : \"row-reverse\",\n    spacing: largeScreen ? 0 : 2,\n    style: { ...gridStyle,\n      alignItems: largeScreen ? 'stretch' : 'center',\n      justifyContent: smallScreen ? 'space-between' : 'flex-start',\n      paddingLeft: largeScreen ? '5%' : 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sorter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setSorter: setSorter\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    item: true,\n    style: {\n      paddingLeft: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter_Filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    setRating: setRating,\n    setPrice: setPrice,\n    setRegistration: setRegistration\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidePart);\n\n//# sourceURL=webpack:///./src/components/Home/SidePart.js?");

/***/ }),

/***/ "./src/components/Home/Sorter.js":
/*!***************************************!*\
  !*** ./src/components/Home/Sorter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst menuItemStyle = {\n  paddingTop: '8px',\n  paddingBottom: '8px',\n  display: 'block',\n  paddingLeft: '8px'\n};\n\nconst Sorter = ({\n  setSorter\n}) => {\n  const [type, setType] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('');\n  const them = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"useTheme\"])();\n  const largeScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()(them.breakpoints.up('md'));\n\n  const handleChange = event => {\n    setType(event.target.value);\n    setSorter(event.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: {\n      marginBottom: largeScreen ? 3 : 0\n    }\n  }, largeScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    variant: \"h7\"\n  }, \"Sorting\") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"FormControl\"], {\n    fullWidth: true,\n    sx: {\n      marginTop: largeScreen ? 1.5 : 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"InputLabel\"], {\n    id: \"demo-simple-select-label\"\n  }, \"Default\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Select\"], {\n    labelId: \"demo-simple-select-label\",\n    id: \"demo-simple-select\",\n    value: type,\n    label: \"Default\",\n    style: {\n      width: largeScreen ? 'auto' : '100px'\n    },\n    sx: {\n      '& .MuiOutlinedInput-root:hover': {\n        outline: 'none'\n      }\n    },\n    onChange: handleChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"MenuItem\"], {\n    style: menuItemStyle,\n    value: \"ascending\"\n  }, \"Ascending\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"MenuItem\"], {\n    style: menuItemStyle,\n    value: \"descending\"\n  }, \"Descending\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sorter);\n\n//# sourceURL=webpack:///./src/components/Home/Sorter.js?");

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_DirectionsCarFilled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/DirectionsCarFilled */ \"@mui/icons-material/DirectionsCarFilled\");\n/* harmony import */ var _mui_icons_material_DirectionsCarFilled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DirectionsCarFilled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst screenSizeMapPadding = {\n  'lg': 10,\n  'md': 10,\n  'sm': 8\n};\n\nconst Layout = ({\n  children\n}) => {\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"useTheme\"])();\n  const largeScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('md')) ? 'lg' : null;\n  const mediumScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('sm')) ? 'md' : null;\n  const smallScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('xs')) ? 'sm' : null;\n  const screenSize = largeScreen || mediumScreen || smallScreen;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    disableGutters: true,\n    sx: {\n      paddingX: 5,\n      paddingTop: screenSizeMapPadding[screenSize],\n      paddingBottom: '100px'\n    },\n    maxWidth: \"xl\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: {\n      display: 'flex',\n      alignItems: 'center',\n      position: 'absolute',\n      top: 15\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_DirectionsCarFilled__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    sx: {\n      color: '#7f8c8d',\n      marginRight: '15px'\n    },\n    fontSize: \"large\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\",\n    sx: {\n      color: '#7f8c8d',\n      paddingTop: '5px'\n    }\n  }, \"My awesome car\")), children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/components/Layout.js?");

/***/ }),

/***/ "./src/components/Product/Contact.js":
/*!*******************************************!*\
  !*** ./src/components/Product/Contact.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst gridStyle = {\n  position: 'fixed',\n  top: '100%',\n  transform: 'translate(0, -100%)',\n  left: 0,\n  width: '100%',\n  padding: '10px 0 10px 40px',\n  backgroundColor: '#ecf0f1'\n};\n\nconst Contact = ({\n  contact: {\n    sellerName,\n    sellerCompany,\n    sellerEmail,\n    sellerPhone\n  }\n}) => {\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"])();\n  const largeScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.up('md'));\n  const smallScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.between('xs', 'sm'));\n  const largeScreenContact = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 1,\n    style: {\n      marginTop: '50px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Seller\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, sellerCompany), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h7\"\n  }, sellerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    style: {\n      width: '100%',\n      marginTop: '30px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    href: `mailto:${sellerEmail}`,\n    style: {\n      width: '80%'\n    },\n    variant: \"outlined\"\n  }, \"Mail\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    href: `tel:${sellerPhone}`,\n    style: {\n      width: '80%'\n    },\n    variant: \"outlined\"\n  }, \"Call\"))));\n  const smallScreenContact = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    alignItems: \"center\",\n    container: true,\n    style: gridStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 6,\n    sm: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    href: `mailto:${sellerEmail}`,\n    style: {\n      width: '80%'\n    },\n    variant: \"outlined\"\n  }, \"Mail\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 6,\n    sm: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    href: `tel:${sellerPhone}`,\n    style: {\n      width: '80%'\n    },\n    variant: \"outlined\"\n  }, \"Call\")), smallScreen ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    style: {\n      display: 'flex',\n      flexDirection: 'column'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h7\"\n  }, sellerCompany), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h7\"\n  }, sellerName)));\n  return largeScreen ? largeScreenContact : smallScreenContact;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/components/Product/Contact.js?");

/***/ }),

/***/ "./src/components/Product/Description.js":
/*!***********************************************!*\
  !*** ./src/components/Product/Description.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Description = ({\n  description\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    variant: \"h6\",\n    style: {\n      marginBottom: 15\n    }\n  }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    variant: \"h7\"\n  }, description));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\n//# sourceURL=webpack:///./src/components/Product/Description.js?");

/***/ }),

/***/ "./src/components/Product/Equipment.js":
/*!*********************************************!*\
  !*** ./src/components/Product/Equipment.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Equipment = ({\n  equipment\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Equipment\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    container: true,\n    spacing: 1,\n    style: {\n      marginTop: 10\n    }\n  }, equipment.sort().map(equipment => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"], {\n    key: equipment,\n    item: true,\n    xs: 6,\n    sm: 4,\n    md: 3,\n    direction: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], null, \"- \", equipment.charAt(0).toUpperCase().concat(equipment.slice(1)))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Equipment);\n\n//# sourceURL=webpack:///./src/components/Product/Equipment.js?");

/***/ }),

/***/ "./src/components/Product/Gallery.js":
/*!*******************************************!*\
  !*** ./src/components/Product/Gallery.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_ProductCard_ProductImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/ProductCard/ProductImage */ \"./src/components/Home/ProductCard/ProductImage.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: '80%',\n  boxShadow: 24,\n  p: 4,\n  padding: 0\n};\n\nconst Gallery = () => {\n  const {\n    pathname\n  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"useLocation\"])();\n  const id = Number(pathname.split('/').pop());\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__[\"useTheme\"])();\n  const tabletScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.between('sm', 'md'));\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n\n  const handleOpen = () => setOpen(true);\n\n  const handleClose = () => setOpen(false);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    style: {\n      margin: 0,\n      width: '100%',\n      alignItems: 'flex-start'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    onClick: handleOpen,\n    item: true,\n    xs: 12,\n    sm: 6,\n    md: 12,\n    style: {\n      paddingTop: 0,\n      paddingLeft: 0,\n      paddingRight: tabletScreen ? 10 : 0,\n      cursor: 'pointer'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_ProductCard_ProductImage__WEBPACK_IMPORTED_MODULE_2__[\"ImageHolder\"], {\n    id: 1,\n    number: 1\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    spacing: 2,\n    style: {\n      paddingLeft: tabletScreen ? 10 : 0,\n      paddingTop: tabletScreen ? 0 : 10\n    },\n    container: true,\n    xs: 12,\n    sm: 5.9,\n    md: 12\n  }, Array.from(Array(tabletScreen ? 4 : 3)).map((_, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    key: i,\n    item: true,\n    xs: 4,\n    sm: 6,\n    md: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_ProductCard_ProductImage__WEBPACK_IMPORTED_MODULE_2__[\"ImageHolder\"], {\n    id: id,\n    number: i + 2\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    open: open,\n    onClose: handleClose,\n    \"aria-labelledby\": \"modal-modal-title\",\n    \"aria-describedby\": \"modal-modal-description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_ProductCard_ProductImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    modal: true,\n    id: id\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\n//# sourceURL=webpack:///./src/components/Product/Gallery.js?");

/***/ }),

/***/ "./src/components/Product/Info.js":
/*!****************************************!*\
  !*** ./src/components/Product/Info.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home_ProductCard_ProductInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Home/ProductCard/ProductInfo */ \"./src/components/Home/ProductCard/ProductInfo.js\");\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.js */ \"./src/components/Product/Contact.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst Info = ({\n  products\n}) => {\n  const {\n    pathname\n  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useLocation\"])();\n  const productId = Number(pathname.split('/').pop());\n  const product = products.find(item => item.id === productId);\n  const {\n    make,\n    model,\n    price,\n    rating,\n    carRegAt,\n    mileage,\n    version,\n    sellerName,\n    sellerCompany,\n    sellerEmail,\n    sellerPhone\n  } = product;\n  const productInfo = {\n    make,\n    model,\n    price,\n    rating,\n    carRegAt,\n    mileage,\n    version\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_ProductCard_ProductInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    productInfo: productInfo\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    contact: {\n      sellerName,\n      sellerCompany,\n      sellerEmail,\n      sellerPhone\n    }\n  }));\n};\n\nconst mapStateToProps = state => ({\n  products: state\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps)(Info));\n\n//# sourceURL=webpack:///./src/components/Product/Info.js?");

/***/ }),

/***/ "./src/components/Product/Main.js":
/*!****************************************!*\
  !*** ./src/components/Product/Main.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery */ \"./src/components/Product/Gallery.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Info */ \"./src/components/Product/Info.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst Main = () => {\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"useTheme\"])();\n  const largeScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.up('md'));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    container: true,\n    spacing: 2,\n    style: {\n      width: '100%',\n      marginLeft: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    xs: 12,\n    md: 7,\n    item: true,\n    style: {\n      paddingLeft: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gallery__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    xs: 12,\n    md: 5,\n    item: true,\n    style: {\n      paddingLeft: largeScreen ? '16px' : '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/components/Product/Main.js?");

/***/ }),

/***/ "./src/components/Product/NavigationButtons.js":
/*!*****************************************************!*\
  !*** ./src/components/Product/NavigationButtons.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst NavigationButtons = () => {\n  const {\n    pathname\n  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useLocation\"])();\n  const id = Number(pathname.split('/').pop());\n  const prevRoute = id - 1 > 0 ? `/products/${id - 1}` : '/';\n  const nextRoute = `/products/${id + 1}`;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: prevRoute\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    variant: \"outlined\"\n  }, \"Prev\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: nextRoute\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    variant: \"outlined\"\n  }, \"Next\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationButtons);\n\n//# sourceURL=webpack:///./src/components/Product/NavigationButtons.js?");

/***/ }),

/***/ "./src/components/Product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/Product/Product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavigationButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationButtons */ \"./src/components/Product/NavigationButtons.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ \"./src/components/Product/Main.js\");\n/* harmony import */ var _Equipment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Equipment */ \"./src/components/Product/Equipment.js\");\n/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Description */ \"./src/components/Product/Description.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"@material-ui/core/useMediaQuery\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst Product = ({\n  products\n}) => {\n  const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"useTheme\"])();\n  const smallScreen = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7___default()(theme.breakpoints.between('xs', 'sm'));\n  const {\n    pathname\n  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"useLocation\"])();\n  const productId = Number(pathname.split('/').pop());\n  const product = products.find(item => item.id === productId);\n  const {\n    equipment,\n    description,\n    sellerName,\n    sellerCompany\n  } = product;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    spacing: 5\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationButtons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Equipment__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    equipment: equipment\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    description: description\n  }), smallScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Seller\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, sellerCompany), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h7\"\n  }, sellerName)));\n};\n\nconst mapStateToProps = state => ({\n  products: state\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_8__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"connect\"])(mapStateToProps)(Product)));\n\n//# sourceURL=webpack:///./src/components/Product/Product.js?");

/***/ }),

/***/ "./src/shared/fetchData.js":
/*!*********************************!*\
  !*** ./src/shared/fetchData.js ***!
  \*********************************/
/*! exports provided: fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPopularRepos\", function() { return fetchPopularRepos; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fetchPopularRepos = () => {\n  const url = 'http://localhost:5000/DB.json';\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(data => data.data).catch(error => {\n    console.warn(error);\n    return null;\n  });\n};\n\n//# sourceURL=webpack:///./src/shared/fetchData.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/shared/fetchData.js\");\n/* harmony import */ var react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-topbar-progress-indicator */ \"react-topbar-progress-indicator\");\n/* harmony import */ var react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/Home */ \"./src/components/Home/Home.js\");\n/* harmony import */ var _components_Product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Product/Product */ \"./src/components/Product/Product.js\");\n/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! exenv */ \"exenv\");\n/* harmony import */ var exenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(exenv__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst lazyLoading = (importFunc, {\n  fallback = null\n}) => {\n  const LazyComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"lazy\"])(importFunc);\n  return props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__[\"Suspense\"], {\n    fallback: fallback\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LazyComponent, props));\n};\n\nconst HomeLazyLoad = lazyLoading(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/Home/Home */ \"./src/components/Home/Home.js\")), {\n  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_1___default.a, null)\n});\nconst ProductLazyLoad = lazyLoading(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/Product/Product */ \"./src/components/Product/Product.js\")), {\n  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_1___default.a, null)\n});\nreact_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_1___default.a.config({\n  barColors: {\n    \"0\": \"grey\",\n    \"1.0\": \"grey\"\n  }\n});\nconst Home = exenv__WEBPACK_IMPORTED_MODULE_5___default.a.canUseDOM ? HomeLazyLoad : _components_Home_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nconst Product = exenv__WEBPACK_IMPORTED_MODULE_5___default.a.canUseDOM ? ProductLazyLoad : _components_Product_Product__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst routes = [{\n  path: '/',\n  component: Home,\n  fetchInitialData: () => Object(_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"fetchPopularRepos\"])(),\n  name: 'Home'\n}, {\n  path: '/products/:id',\n  component: Product,\n  name: 'Product'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/*! exports provided: setProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProducts\", function() { return setProducts; });\nconst setProducts = products => ({\n  type: 'products/set',\n  payload: products\n});\n\n//# sourceURL=webpack:///./src/store/actions/index.js?");

/***/ }),

/***/ "./src/store/reducers/reducer.js":
/*!***************************************!*\
  !*** ./src/store/reducers/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst reducer = (state = [], action) => {\n  switch (action.type) {\n    case 'products/set':\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/store/reducers/reducer.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: registrationYears, priceList, numberFormat, formatDate, formatYear, renderStars, sortProductsByNameAscending, sortProductsByNameDescending, sortProducts, filterProducts, filterProductionsByRating, filterProductsByRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registrationYears\", function() { return registrationYears; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"priceList\", function() { return priceList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numberFormat\", function() { return numberFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatYear\", function() { return formatYear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderStars\", function() { return renderStars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortProductsByNameAscending\", function() { return sortProductsByNameAscending; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortProductsByNameDescending\", function() { return sortProductsByNameDescending; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortProducts\", function() { return sortProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterProducts\", function() { return filterProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterProductionsByRating\", function() { return filterProductionsByRating; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterProductsByRegistration\", function() { return filterProductsByRegistration; });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Star */ \"@mui/icons-material/Star\");\n/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/StarBorder */ \"@mui/icons-material/StarBorder\");\n/* harmony import */ var _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst _ = __webpack_require__(/*! lodash */ \"lodash\");\n\nconst registrationYears = (() => {\n  let max = new Date().getFullYear();\n  let min = max - 50;\n  let years = [];\n\n  for (let i = max; i >= min; i--) {\n    years.push(i);\n  }\n\n  return years;\n})();\nconst priceList = _.range(10000, 50000, 1000);\nconst numberFormat = val => {\n  const formatter = new Intl.NumberFormat('de-DE');\n  return formatter.format(val);\n};\nconst formatDate = val => {\n  return val.split('-').slice(0, 2).reverse().join('.');\n};\nconst formatYear = val => {\n  return Number(val.split('-')[0]);\n};\nconst renderStars = rating => {\n  return new Array(5).fill(0).map((_, i) => {\n    if (i + 1 <= Math.round(rating)) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Icon\"], {\n        component: _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_2___default.a\n      });\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__[\"Icon\"], {\n        component: _mui_icons_material_StarBorder__WEBPACK_IMPORTED_MODULE_3___default.a\n      });\n    }\n  });\n}; //\n//****\n//****Sort products functions\n//****\n//\n\nconst sortProductsByNameAscending = products => {\n  products.sort((a, b) => {\n    var _a$make, _b$make;\n\n    const nameA = (_a$make = a.make) === null || _a$make === void 0 ? void 0 : _a$make.toUpperCase();\n    const nameB = (_b$make = b.make) === null || _b$make === void 0 ? void 0 : _b$make.toUpperCase();\n\n    if (nameA < nameB) {\n      return -1;\n    }\n\n    if (nameA > nameB) {\n      return 1;\n    }\n\n    return 0;\n  });\n  return products;\n};\nconst sortProductsByNameDescending = products => {\n  products.sort((a, b) => {\n    var _a$make2, _b$make2;\n\n    const nameA = (_a$make2 = a.make) === null || _a$make2 === void 0 ? void 0 : _a$make2.toUpperCase();\n    const nameB = (_b$make2 = b.make) === null || _b$make2 === void 0 ? void 0 : _b$make2.toUpperCase();\n\n    if (nameA < nameB) {\n      return 1;\n    }\n\n    if (nameA > nameB) {\n      return -1;\n    }\n\n    return 0;\n  });\n  return products;\n};\nconst sortProducts = (sorter, newProducts, setProducts) => {\n  switch (sorter) {\n    case 'default':\n      return setProducts([...newProducts]);\n\n    case 'ascending':\n      newProducts = sortProductsByNameAscending([...newProducts]);\n      return setProducts(newProducts);\n\n    case 'descending':\n      newProducts = sortProductsByNameDescending([...newProducts]);\n      return setProducts(newProducts);\n  }\n}; //\n//****\n//****Filter products functions\n//****\n//\n\nconst filterProducts = (rating, registration, price, db, setProducts) => {\n  let newProducts = db.items; //Filter products by rating\n\n  if (rating && Object.values(rating).some(val => val)) {\n    newProducts = db.items.filter(product => rating[Math.round(product.rating)]);\n  } //Filter products by registration year\n\n\n  if (Object.values(registration).every(key => key)) {\n    newProducts = newProducts.filter(product => registration.from < formatYear(product.carRegAt) && registration.to > formatYear(product.carRegAt));\n    setProducts(newProducts);\n  } //Filter products by price\n\n\n  if (Object.values(price).every(key => key)) {\n    newProducts = newProducts.filter(product => price.from < product.price && price.to > product.price);\n    setProducts(newProducts);\n  }\n\n  setProducts(newProducts);\n};\nconst filterProductionsByRating = (rating, db, setProducts) => {\n  const newProducts = rating && Object.values(rating).some(val => val) ? db.items.filter(product => rating[Math.round(product.rating)]) : db.items;\n  setProducts(newProducts);\n};\nconst filterProductsByRegistration = (registration, db, setProducts) => {\n  if (Object.values(registration).every(key => key)) {\n    const newProduct = db.items.filter(product => registration.from < formatYear(product.carRegAt) && registration.to > formatYear(product.carRegAt));\n    setProducts(newProduct);\n  }\n};\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/useMediaQuery\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/useMediaQuery%22?");

/***/ }),

/***/ "@mui/icons-material/AddRoad":
/*!**********************************************!*\
  !*** external "@mui/icons-material/AddRoad" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/AddRoad\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/AddRoad%22?");

/***/ }),

/***/ "@mui/icons-material/ArrowBackIosNew":
/*!******************************************************!*\
  !*** external "@mui/icons-material/ArrowBackIosNew" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/ArrowBackIosNew\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/ArrowBackIosNew%22?");

/***/ }),

/***/ "@mui/icons-material/ArrowForwardIos":
/*!******************************************************!*\
  !*** external "@mui/icons-material/ArrowForwardIos" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/ArrowForwardIos\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/ArrowForwardIos%22?");

/***/ }),

/***/ "@mui/icons-material/DateRange":
/*!************************************************!*\
  !*** external "@mui/icons-material/DateRange" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/DateRange\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/DateRange%22?");

/***/ }),

/***/ "@mui/icons-material/DirectionsCarFilled":
/*!**********************************************************!*\
  !*** external "@mui/icons-material/DirectionsCarFilled" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/DirectionsCarFilled\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/DirectionsCarFilled%22?");

/***/ }),

/***/ "@mui/icons-material/Star":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Star" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/Star\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/Star%22?");

/***/ }),

/***/ "@mui/icons-material/StarBorder":
/*!*************************************************!*\
  !*** external "@mui/icons-material/StarBorder" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/icons-material/StarBorder\");\n\n//# sourceURL=webpack:///external_%22@mui/icons-material/StarBorder%22?");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material\");\n\n//# sourceURL=webpack:///external_%22@mui/material%22?");

/***/ }),

/***/ "@mui/material/Checkbox":
/*!*****************************************!*\
  !*** external "@mui/material/Checkbox" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/Checkbox\");\n\n//# sourceURL=webpack:///external_%22@mui/material/Checkbox%22?");

/***/ }),

/***/ "@mui/material/FormControlLabel":
/*!*************************************************!*\
  !*** external "@mui/material/FormControlLabel" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/FormControlLabel\");\n\n//# sourceURL=webpack:///external_%22@mui/material/FormControlLabel%22?");

/***/ }),

/***/ "@mui/material/FormGroup":
/*!******************************************!*\
  !*** external "@mui/material/FormGroup" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/FormGroup\");\n\n//# sourceURL=webpack:///external_%22@mui/material/FormGroup%22?");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/styles\");\n\n//# sourceURL=webpack:///external_%22@mui/material/styles%22?");

/***/ }),

/***/ "@mui/material/useMediaQuery":
/*!**********************************************!*\
  !*** external "@mui/material/useMediaQuery" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mui/material/useMediaQuery\");\n\n//# sourceURL=webpack:///external_%22@mui/material/useMediaQuery%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "exenv":
/*!************************!*\
  !*** external "exenv" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"exenv\");\n\n//# sourceURL=webpack:///external_%22exenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-material-ui-carousel":
/*!*********************************************!*\
  !*** external "react-material-ui-carousel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-material-ui-carousel\");\n\n//# sourceURL=webpack:///external_%22react-material-ui-carousel%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-topbar-progress-indicator":
/*!**************************************************!*\
  !*** external "react-topbar-progress-indicator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-topbar-progress-indicator\");\n\n//# sourceURL=webpack:///external_%22react-topbar-progress-indicator%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });