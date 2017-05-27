webpackJsonp([1,4],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"assignment == 1 || assignment == 0\">\n  <h1>Skyeng test assignment 1</h1>\n  <ul>\n    <li *ngFor=\"let test of tests\">\n      <label>{{test.caption}}</label>\n      <app-select [test]=\"test\"></app-select>\n    </li>\n  </ul>\n  <app-result></app-result>\n</div>\n\n<div *ngIf=\"assignment == 2 || assignment == 0\">\n  <h1>Skyeng test assignment #2</h1>\n  <app-translations [translations]=\"translations\"></app-translations>\n</div>\n\n<h3>View sources on Github</h3>\n<a href=\"https://github.com/RomanLubushkin/skyeng-test-assignment\" target=\"_blank\">https://github.com/RomanLubushkin/skyeng-test-assignment</a>\n"

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = "<span>Result: {{correctValue}}/{{[totalValue]}}</span>\n"

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<select #select (change)=\"onSelect(select.value)\">\n  <option value=\"\" disabled selected>Choose...</option>\n  <option *ngFor=\"let op of test.options\" value=\"{{op.value}}\">{{op.value}}</option>\n</select>\n\n\n\n\n\n"

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let tx of translations; let i = index;\" [style.display]=\"(i == txIndex) ? '' : 'none' \">\n    <span>{{myVal}} {{tx.word}}</span> | <span>{{tx.translation}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* unused harmony export TestOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Test; });
/* unused harmony export TranslationOption */
/* unused harmony export TRANSLATION_LIST */
/* unused harmony export TEST_LIST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestOption = (function () {
    function TestOption() {
    }
    return TestOption;
}());

var Test = (function () {
    function Test() {
    }
    return Test;
}());

var TranslationOption = (function () {
    function TranslationOption() {
    }
    return TranslationOption;
}());

var TRANSLATION_LIST = [
    { word: 'Apple', translation: 'Яблоко' },
    { word: 'Banana', translation: 'Банан' },
    { word: 'Garlic', translation: 'Чеснок' },
    { word: 'Tomato', translation: 'Помидор' }
];
var TEST_LIST = [
    {
        caption: 'Find fruit', options: [
            { value: 'Pepper', correct: false },
            { value: 'Apple', correct: true },
            { value: 'Garlic', correct: false }
        ]
    },
    {
        caption: 'Find vegetable', options: [
            { value: 'Apple', correct: false },
            { value: 'Banana', correct: false },
            { value: 'Tomato', correct: true }
        ]
    },
    {
        caption: 'Find berry', options: [
            { value: 'Tomato', correct: false },
            { value: 'Apple', correct: false },
            { value: 'Strawberry', correct: true }
        ]
    }
];
var AppService = (function () {
    function AppService() {
        this.answers = {};
        this.changesEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    AppService.prototype.getTranslations = function () {
        return TRANSLATION_LIST;
    };
    AppService.prototype.getTests = function () {
        return TEST_LIST;
    };
    AppService.prototype.getTotalTestsCount = function () {
        return TEST_LIST.length;
    };
    AppService.prototype.getCorrectTestsCount = function () {
        var result = 0;
        for (var key in this.answers) {
            if (this.answers[key]) {
                result++;
            }
        }
        return result;
    };
    AppService.prototype.processTestResult = function (caption, correct) {
        this.answers[caption] = correct;
        this.changesEmitter.emit();
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], AppService);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    assignment: 1
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 67;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(49);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.assignment = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].assignment === undefined ? 0 : __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].assignment;
        this.tests = [];
        this.translations = [];
        this.tests = this.appService.getTests();
        this.translations = this.appService.getTranslations();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(131)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_select_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_result_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__translations_translations_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__select_select_component__["a" /* SelectComponent */], __WEBPACK_IMPORTED_MODULE_5__result_result_component__["a" /* ResultComponent */], __WEBPACK_IMPORTED_MODULE_6__translations_translations_component__["a" /* TranslationsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = (function () {
    function ResultComponent(appService) {
        this.appService = appService;
        this.totalValue = 0;
        this.correctValue = 0;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.update();
        var binding = this.update.bind(this);
        this.subscription = this.appService.changesEmitter.subscribe(binding);
    };
    ResultComponent.prototype.update = function () {
        this.totalValue = this.appService.getTotalTestsCount();
        this.correctValue = this.appService.getCorrectTestsCount();
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-result',
        template: __webpack_require__(136),
        styles: [__webpack_require__(132)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], ResultComponent);

var _a;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectComponent = (function () {
    function SelectComponent(appService) {
        this.appService = appService;
    }
    SelectComponent.prototype.onSelect = function (value) {
        var count = this.test.options.length;
        var correct = false;
        var op;
        for (var i = 0; i < count; i++) {
            op = this.test.options[i];
            if (op.value === value && op.correct) {
                correct = true;
                break;
            }
        }
        this.appService.processTestResult(this.test.caption, correct);
    };
    return SelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* Test */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["b" /* Test */]) === "function" && _a || Object)
], SelectComponent.prototype, "test", void 0);
SelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-select',
        template: __webpack_require__(137),
        styles: [__webpack_require__(133)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _b || Object])
], SelectComponent);

var _a, _b;
//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TranslationsComponent = (function () {
    function TranslationsComponent() {
        this.txIndex = 0;
    }
    TranslationsComponent.prototype.onKeyDown = function (event) {
        if (event.key === 'ArrowLeft') {
            this.txIndex--;
            this.txIndex = Math.max(this.txIndex - 1, 0);
        }
        else if (event.key === 'ArrowRight') {
            this.txIndex++;
            this.txIndex = Math.min(this.txIndex + 1, this.translations.length - 1);
        }
    };
    TranslationsComponent.prototype.ngOnInit = function () {
    };
    return TranslationsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TranslationsComponent.prototype, "translations", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TranslationsComponent.prototype, "onKeyDown", null);
TranslationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-translations',
        template: __webpack_require__(138),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [])
], TranslationsComponent);

//# sourceMappingURL=translations.component.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map