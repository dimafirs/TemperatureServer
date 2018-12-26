(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/weather-view/weather-view.module": [
		"./src/app/components/weather-view/weather-view.module.ts",
		"components-weather-view-weather-view-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"application__header _head-color mat-elevation-z6\">\n  <p class=\"mat-display-1\">WEATHER OBSERVER</p>\n  <p class=\"mat-h1 mat-headline\">Current Version: {{currentVersion | async}}</p>\n</div>\n<div class=\"application__body mat-app-background\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.classes = 'application mat-app-background';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])(['metadata', 'currentVersion']),
        __metadata("design:type", String)
    ], AppComponent.prototype, "currentVersion", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ../assets/components/app.component.scss */ "./src/assets/components/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_measurement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/measurement.service */ "./src/app/services/measurement.service.ts");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _store_reducers_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/reducers/reducers */ "./src/app/store/reducers/reducers.ts");
/* harmony import */ var _services_epics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/epics.service */ "./src/app/services/epics.service.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _store_epics_epics_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/epics/epics.module */ "./src/app/store/epics/epics.module.ts");
/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/metadata.service */ "./src/app/services/metadata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = /** @class */ (function () {
    function AppModule(appRef, ngRedux, ngReduxRouter, devTools, epicsService) {
        this.appRef = appRef;
        this.ngRedux = ngRedux;
        this.ngReduxRouter = ngReduxRouter;
        this.devTools = devTools;
        this.epicsService = epicsService;
        var epics = this.epicsService.getEpics();
        var middleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_7__["createEpicMiddleware"])();
        var enhancers = [];
        if (devTools.isEnabled()) {
            enhancers = [devTools.enhancer()];
        }
        ngRedux.configureStore(_store_reducers_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], {}, [middleware, redux_thunk__WEBPACK_IMPORTED_MODULE_10__["default"], Object(redux_logger__WEBPACK_IMPORTED_MODULE_11__["createLogger"])()], enhancers);
        ngReduxRouter.initialize();
        middleware.run(epics);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgReduxModule"],
                _angular_redux_router__WEBPACK_IMPORTED_MODULE_4__["NgReduxRouterModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRouting"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _store_epics_epics_module__WEBPACK_IMPORTED_MODULE_14__["EpicsModule"]
            ],
            providers: [_services_measurement_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementService"],
                _services_metadata_service__WEBPACK_IMPORTED_MODULE_15__["MetadataService"],
                _services_epics_service__WEBPACK_IMPORTED_MODULE_9__["EpicsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"],
            _angular_redux_router__WEBPACK_IMPORTED_MODULE_4__["NgReduxRouter"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["DevToolsExtension"],
            _services_epics_service__WEBPACK_IMPORTED_MODULE_9__["EpicsService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES, AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ROUTES = [
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    },
    {
        path: 'weather',
        loadChildren: './components/weather-view/weather-view.module#WeatherViewModule'
    }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/model/duration.ts":
/*!***********************************!*\
  !*** ./src/app/model/duration.ts ***!
  \***********************************/
/*! exports provided: DURATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DURATIONS", function() { return DURATIONS; });
var DURATIONS = [
    { value: 3, name: '3 hours' },
    { value: 6, name: '6 hours' },
    { value: 12, name: '12 hours' },
    { value: 24, name: 'Day' },
    { value: 168, name: 'Week' }
];


/***/ }),

/***/ "./src/app/services/epics.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/epics.service.ts ***!
  \*******************************************/
/*! exports provided: EpicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpicsService", function() { return EpicsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var _store_epics_measurements_epic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/epics/measurements.epic */ "./src/app/store/epics/measurements.epic.ts");
/* harmony import */ var _store_epics_metadata_epic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/epics/metadata.epic */ "./src/app/store/epics/metadata.epic.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EpicsService = /** @class */ (function () {
    function EpicsService(measurementsEpic, metadataEpic) {
        this.measurementsEpic = measurementsEpic;
        this.metadataEpic = metadataEpic;
    }
    EpicsService.prototype.getEpics = function () {
        return Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["combineEpics"])(this.measurementsEpic.fetchMeasurements$, this.measurementsEpic.getAverageMeasurement$, this.measurementsEpic.getLastMeasurement$, this.metadataEpic.getVersion$);
    };
    EpicsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_store_epics_measurements_epic__WEBPACK_IMPORTED_MODULE_2__["MeasurementsEpic"],
            _store_epics_metadata_epic__WEBPACK_IMPORTED_MODULE_3__["MetadataEpic"]])
    ], EpicsService);
    return EpicsService;
}());



/***/ }),

/***/ "./src/app/services/measurement.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/measurement.service.ts ***!
  \*************************************************/
/*! exports provided: MeasurementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementService", function() { return MeasurementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeasurementService = /** @class */ (function () {
    function MeasurementService(http) {
        this.http = http;
        this.API_MEASUREMENT_URL = 'api/measurement/';
        this.MEASUREMENTS_URL = this.API_MEASUREMENT_URL + 'interval';
        this.CURRENT_MEASUREMENT_URL = this.API_MEASUREMENT_URL + 'current';
        this.DAY_AVERAGE_URL = this.API_MEASUREMENT_URL + 'average';
    }
    MeasurementService.prototype.fetchMeasurements = function (duration) {
        return this.http.get(this.MEASUREMENTS_URL, {
            params: {
                duration: duration.value.toString(),
                unit: 'h'
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (measurements) { return measurements.map(function (measurement) { return (__assign({}, measurement, { measurementTime: new Date(measurement.measurementTime) })); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
    };
    MeasurementService.prototype.getLastMeasurement = function () {
        return this.http.get(this.CURRENT_MEASUREMENT_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
    };
    MeasurementService.prototype.getDayAverage = function () {
        return this.http.get(this.DAY_AVERAGE_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
    };
    MeasurementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeasurementService);
    return MeasurementService;
}());



/***/ }),

/***/ "./src/app/services/metadata.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/metadata.service.ts ***!
  \**********************************************/
/*! exports provided: MetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataService", function() { return MetadataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetadataService = /** @class */ (function () {
    function MetadataService(http) {
        this.http = http;
        this.CURRENT_VERSION_URL = "api/version/current";
    }
    MetadataService.prototype.getCurrentVersion = function () {
        return this.http.get(this.CURRENT_VERSION_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    MetadataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetadataService);
    return MetadataService;
}());



/***/ }),

/***/ "./src/app/store/actions/current-view.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/actions/current-view.actions.ts ***!
  \*******************************************************/
/*! exports provided: CHANGE_DURATION, changeDurationAction, changeDurationThunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_DURATION", function() { return CHANGE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDurationAction", function() { return changeDurationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDurationThunk", function() { return changeDurationThunk; });
/* harmony import */ var _measurement_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./measurement.actions */ "./src/app/store/actions/measurement.actions.ts");

var CHANGE_DURATION = '[Current view] Change duration';
function changeDurationAction(duration) {
    return {
        type: CHANGE_DURATION,
        payload: { duration: duration }
    };
}
function changeDurationThunk(duration) {
    return function (dispatch) {
        dispatch(changeDurationAction(duration));
        return dispatch(Object(_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["fetchMeasurementsAction"])(duration));
    };
}


/***/ }),

/***/ "./src/app/store/actions/measurement.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/store/actions/measurement.actions.ts ***!
  \******************************************************/
/*! exports provided: FETCH_MEASUREMENTS, FETCH_MEASUREMENTS_SUCCESS, FETCH_MEASUREMENTS_FAILURE, GET_LAST_MEASUREMENT, GET_LAST_MEASUREMENT_SUCCESS, GET_LAST_MEASUREMENT_FAILURE, GET_AVERAGE_MEASUREMENT, GET_AVERAGE_MEASUREMENT_SUCCESS, GET_AVERAGE_MEASUREMENT_FAILURE, fetchMeasurementsAction, fetchMeasurementsSuccessAction, fetchMeasurementsFailureAction, getLastMeasurementAction, getLastMeasurementSuccesAction, getLastMeasurementFailureAction, getAverageMeasurementAction, getAverageMeasurementSuccessAction, getAverageMeasurementFailureAction, initMeasutementsThunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MEASUREMENTS", function() { return FETCH_MEASUREMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MEASUREMENTS_SUCCESS", function() { return FETCH_MEASUREMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MEASUREMENTS_FAILURE", function() { return FETCH_MEASUREMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_MEASUREMENT", function() { return GET_LAST_MEASUREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_MEASUREMENT_SUCCESS", function() { return GET_LAST_MEASUREMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_MEASUREMENT_FAILURE", function() { return GET_LAST_MEASUREMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AVERAGE_MEASUREMENT", function() { return GET_AVERAGE_MEASUREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AVERAGE_MEASUREMENT_SUCCESS", function() { return GET_AVERAGE_MEASUREMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_AVERAGE_MEASUREMENT_FAILURE", function() { return GET_AVERAGE_MEASUREMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMeasurementsAction", function() { return fetchMeasurementsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMeasurementsSuccessAction", function() { return fetchMeasurementsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMeasurementsFailureAction", function() { return fetchMeasurementsFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastMeasurementAction", function() { return getLastMeasurementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastMeasurementSuccesAction", function() { return getLastMeasurementSuccesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastMeasurementFailureAction", function() { return getLastMeasurementFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverageMeasurementAction", function() { return getAverageMeasurementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverageMeasurementSuccessAction", function() { return getAverageMeasurementSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverageMeasurementFailureAction", function() { return getAverageMeasurementFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMeasutementsThunk", function() { return initMeasutementsThunk; });
var FETCH_MEASUREMENTS = '[Measurements] Fetch';
var FETCH_MEASUREMENTS_SUCCESS = '[Measurements] Fetch success';
var FETCH_MEASUREMENTS_FAILURE = '[Measurements] Fetch failed';
var GET_LAST_MEASUREMENT = '[Measurements] Get last';
var GET_LAST_MEASUREMENT_SUCCESS = '[Measurements] Get last success';
var GET_LAST_MEASUREMENT_FAILURE = '[Measurements] Get last failed';
var GET_AVERAGE_MEASUREMENT = '[Measurements] Get average';
var GET_AVERAGE_MEASUREMENT_SUCCESS = '[Measurements] Get average success';
var GET_AVERAGE_MEASUREMENT_FAILURE = '[Measurements] Get average failed';
function fetchMeasurementsAction(duration) {
    return {
        type: FETCH_MEASUREMENTS,
        payload: { duration: duration }
    };
}
function fetchMeasurementsSuccessAction(measurements) {
    return {
        type: FETCH_MEASUREMENTS_SUCCESS,
        payload: { measurements: measurements }
    };
}
function fetchMeasurementsFailureAction() {
    return {
        type: FETCH_MEASUREMENTS_FAILURE
    };
}
function getLastMeasurementAction() {
    return {
        type: GET_LAST_MEASUREMENT
    };
}
function getLastMeasurementSuccesAction(measurement) {
    return {
        type: GET_LAST_MEASUREMENT_SUCCESS,
        payload: { measurement: measurement }
    };
}
function getLastMeasurementFailureAction() {
    return {
        type: GET_LAST_MEASUREMENT_FAILURE
    };
}
function getAverageMeasurementAction() {
    return {
        type: GET_AVERAGE_MEASUREMENT
    };
}
function getAverageMeasurementSuccessAction(measurement) {
    return {
        type: GET_AVERAGE_MEASUREMENT_SUCCESS,
        payload: { measurement: measurement }
    };
}
function getAverageMeasurementFailureAction() {
    return {
        type: GET_AVERAGE_MEASUREMENT_FAILURE
    };
}
function initMeasutementsThunk() {
    return function (dispatch, getState) {
        dispatch(fetchMeasurementsAction(getState().currentView.duration));
        dispatch(getLastMeasurementAction());
        return dispatch(getAverageMeasurementAction());
    };
}


/***/ }),

/***/ "./src/app/store/actions/metadata.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/metadata.actions.ts ***!
  \***************************************************/
/*! exports provided: GET_CURRENT_VERSION, GET_CURRENT_VERSION_SUCCESS, GET_CURRENT_VERSION_FAILURE, getCurrentVersionAction, getCurrentVersionSuccessAction, getCurrentVersionFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_VERSION", function() { return GET_CURRENT_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_VERSION_SUCCESS", function() { return GET_CURRENT_VERSION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_VERSION_FAILURE", function() { return GET_CURRENT_VERSION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentVersionAction", function() { return getCurrentVersionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentVersionSuccessAction", function() { return getCurrentVersionSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentVersionFailureAction", function() { return getCurrentVersionFailureAction; });
var GET_CURRENT_VERSION = '[Metadata] Get current version';
var GET_CURRENT_VERSION_SUCCESS = '[Metadata] Get current version success';
var GET_CURRENT_VERSION_FAILURE = '[Metadata] Get current version failed';
function getCurrentVersionAction() {
    return {
        type: GET_CURRENT_VERSION
    };
}
function getCurrentVersionSuccessAction(currentVersion) {
    return {
        type: GET_CURRENT_VERSION_SUCCESS,
        payload: { currentVersion: currentVersion }
    };
}
function getCurrentVersionFailureAction() {
    return {
        type: GET_CURRENT_VERSION_FAILURE
    };
}


/***/ }),

/***/ "./src/app/store/epics/epics.module.ts":
/*!*********************************************!*\
  !*** ./src/app/store/epics/epics.module.ts ***!
  \*********************************************/
/*! exports provided: EpicsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpicsModule", function() { return EpicsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _measurements_epic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./measurements.epic */ "./src/app/store/epics/measurements.epic.ts");
/* harmony import */ var _metadata_epic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata.epic */ "./src/app/store/epics/metadata.epic.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EpicsModule = /** @class */ (function () {
    function EpicsModule() {
    }
    EpicsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _measurements_epic__WEBPACK_IMPORTED_MODULE_1__["MeasurementsEpic"],
                _metadata_epic__WEBPACK_IMPORTED_MODULE_2__["MetadataEpic"]
            ]
        })
    ], EpicsModule);
    return EpicsModule;
}());



/***/ }),

/***/ "./src/app/store/epics/measurements.epic.ts":
/*!**************************************************!*\
  !*** ./src/app/store/epics/measurements.epic.ts ***!
  \**************************************************/
/*! exports provided: MeasurementsEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementsEpic", function() { return MeasurementsEpic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_measurement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/measurement.service */ "./src/app/services/measurement.service.ts");
/* harmony import */ var _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/measurement.actions */ "./src/app/store/actions/measurement.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeasurementsEpic = /** @class */ (function () {
    function MeasurementsEpic(measurementsService) {
        var _this = this;
        this.measurementsService = measurementsService;
        this.fetchMeasurements$ = function (action$) {
            return action$.ofType(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_MEASUREMENTS"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
                var payload = _a.payload;
                return _this.measurementsService
                    .fetchMeasurements(payload.duration)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (measurements) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["fetchMeasurementsSuccessAction"])(measurements)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["fetchMeasurementsFailureAction"])()); }));
            }));
        };
        this.getLastMeasurement$ = function (action$) {
            return action$.ofType(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["GET_LAST_MEASUREMENT"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
                var payload = _a.payload;
                return _this.measurementsService
                    .getLastMeasurement()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (measurement) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["getLastMeasurementSuccesAction"])(measurement)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["getLastMeasurementFailureAction"])()); }));
            }));
        };
        this.getAverageMeasurement$ = function (action$) {
            return action$.ofType(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["GET_LAST_MEASUREMENT"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
                var payload = _a.payload;
                return _this.measurementsService
                    .getDayAverage()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (measurement) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["getAverageMeasurementSuccessAction"])(measurement)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_measurement_actions__WEBPACK_IMPORTED_MODULE_2__["getAverageMeasurementFailureAction"])()); }));
            }));
        };
    }
    MeasurementsEpic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_measurement_service__WEBPACK_IMPORTED_MODULE_1__["MeasurementService"]])
    ], MeasurementsEpic);
    return MeasurementsEpic;
}());



/***/ }),

/***/ "./src/app/store/epics/metadata.epic.ts":
/*!**********************************************!*\
  !*** ./src/app/store/epics/metadata.epic.ts ***!
  \**********************************************/
/*! exports provided: MetadataEpic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataEpic", function() { return MetadataEpic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_metadata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/metadata.service */ "./src/app/services/metadata.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_metadata_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/metadata.actions */ "./src/app/store/actions/metadata.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MetadataEpic = /** @class */ (function () {
    function MetadataEpic(metadataService) {
        var _this = this;
        this.metadataService = metadataService;
        this.getVersion$ = function (action$) {
            return action$.ofType(_actions_metadata_actions__WEBPACK_IMPORTED_MODULE_4__["GET_CURRENT_VERSION"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
                return _this.metadataService
                    .getCurrentVersion()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (version) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_actions_metadata_actions__WEBPACK_IMPORTED_MODULE_4__["getCurrentVersionSuccessAction"])(version.version)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
                    console.log(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_actions_metadata_actions__WEBPACK_IMPORTED_MODULE_4__["getCurrentVersionFailureAction"])());
                }));
            }));
        };
    }
    MetadataEpic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_metadata_service__WEBPACK_IMPORTED_MODULE_1__["MetadataService"]])
    ], MetadataEpic);
    return MetadataEpic;
}());



/***/ }),

/***/ "./src/app/store/reducers/current-view.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/reducers/current-view.reducer.ts ***!
  \********************************************************/
/*! exports provided: INITIAL_STATE, currentViewReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentViewReducer", function() { return currentViewReducer; });
/* harmony import */ var _model_duration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/duration */ "./src/app/model/duration.ts");
/* harmony import */ var _actions_current_view_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/current-view.actions */ "./src/app/store/actions/current-view.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var INITIAL_STATE = {
    duration: _model_duration__WEBPACK_IMPORTED_MODULE_0__["DURATIONS"][2]
};
var currentViewReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _actions_current_view_actions__WEBPACK_IMPORTED_MODULE_1__["CHANGE_DURATION"]: {
            return __assign({}, state, { duration: action.payload.duration });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/reducers/measurements.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/reducers/measurements.reducer.ts ***!
  \********************************************************/
/*! exports provided: INITIAL_STATE, measurementsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measurementsReducer", function() { return measurementsReducer; });
/* harmony import */ var _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/measurement.actions */ "./src/app/store/actions/measurement.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var INITIAL_STATE = {
    measurements: [],
    isMeasurementsLoading: false,
    lastMeasurement: null,
    isLastLoading: false,
    averageMeasurement: null,
    isAverageLoading: false
};
var measurementsReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MEASUREMENTS"]: {
            return __assign({}, state, { isMeasurementsLoading: true });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MEASUREMENTS_SUCCESS"]: {
            return __assign({}, state, { isMeasurementsLoading: false, measurements: action.payload.measurements });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_MEASUREMENTS_FAILURE"]: {
            return __assign({}, state, { isMeasurementsLoading: false });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["GET_LAST_MEASUREMENT"]: {
            return __assign({}, state, { isLastLoading: true });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["GET_LAST_MEASUREMENT_SUCCESS"]: {
            return __assign({}, state, { isLastLoading: false, lastMeasurement: action.payload.measurement });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["GET_LAST_MEASUREMENT_FAILURE"]: {
            return __assign({}, state, { isLastLoading: false });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["GET_AVERAGE_MEASUREMENT"]: {
            return __assign({}, state, { isAverageLoading: true });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["GET_AVERAGE_MEASUREMENT_SUCCESS"]: {
            return __assign({}, state, { isAverageLoading: false, averageMeasurement: action.payload.measurement });
        }
        case _actions_measurement_actions__WEBPACK_IMPORTED_MODULE_0__["GET_AVERAGE_MEASUREMENT_FAILURE"]: {
            return __assign({}, state, { isAverageLoading: false });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/reducers/metadata.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/metadata.reducer.ts ***!
  \****************************************************/
/*! exports provided: INITIAL_STATE, metadataReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadataReducer", function() { return metadataReducer; });
/* harmony import */ var _actions_metadata_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/metadata.actions */ "./src/app/store/actions/metadata.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var INITIAL_STATE = {
    currentVersion: null,
    isVersionLoading: false
};
var metadataReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _actions_metadata_actions__WEBPACK_IMPORTED_MODULE_0__["GET_CURRENT_VERSION"]: {
            return __assign({}, state, { isVersionLoading: true });
        }
        case _actions_metadata_actions__WEBPACK_IMPORTED_MODULE_0__["GET_CURRENT_VERSION_SUCCESS"]: {
            return __assign({}, state, { currentVersion: action.payload.currentVersion, isVersionLoading: false });
        }
        case _actions_metadata_actions__WEBPACK_IMPORTED_MODULE_0__["GET_CURRENT_VERSION_FAILURE"]: {
            return __assign({}, state, { isVersionLoading: false });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/reducers/reducers.ts":
/*!********************************************!*\
  !*** ./src/app/store/reducers/reducers.ts ***!
  \********************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _current_view_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-view.reducer */ "./src/app/store/reducers/current-view.reducer.ts");
/* harmony import */ var _measurements_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./measurements.reducer */ "./src/app/store/reducers/measurements.reducer.ts");
/* harmony import */ var _metadata_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata.reducer */ "./src/app/store/reducers/metadata.reducer.ts");





var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    route: _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
    currentView: _current_view_reducer__WEBPACK_IMPORTED_MODULE_2__["currentViewReducer"],
    measurements: _measurements_reducer__WEBPACK_IMPORTED_MODULE_3__["measurementsReducer"],
    metadata: _metadata_reducer__WEBPACK_IMPORTED_MODULE_4__["metadataReducer"]
});


/***/ }),

/***/ "./src/assets/components/app.component.scss":
/*!**************************************************!*\
  !*** ./src/assets/components/app.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".application {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%; }\n  .application__header {\n    flex-grow: 0;\n    min-height: 50px;\n    height: 50px;\n    padding: 5px 40px 5px 40px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; }\n  .application__body {\n    flex-grow: 1;\n    padding: 40px 40px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kbXl0cm8vRGF0YV9kcml2ZS9TdHVkeWluZy9WSUkgc2VtZXN0ZXIvU29mdHdhcmUgSW50ZWdyYXRpb24gU3lzdGVtcy9XZWF0aGVyT2JzZXJ2ZXIvZnJvbnQvc3JjL2Fzc2V0cy9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIscUJBQW9CO0VBQ3BCLGFBQVksRUFnQmI7RUFmQztJQUNFLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLDJCQUEwQjtJQUMxQixZQUFXO0lBQ1gsY0FBYTtJQUNiLCtCQUE4QixFQUUvQjtFQUNEO0lBQ0UsYUFBWTtJQUVaLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXNzZXRzL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGxpY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwJTtcbiAgJl9faGVhZGVyIHtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICB9XG4gICZfX2JvZHkge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");






var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    // .catch(err => console.error(err));
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
        if (false) {}
        else {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
        }
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/dmytro/Data_drive/Studying/VII semester/Software Integration Systems/WeatherObserver/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map