webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h3>Search for a song:</h3>\n<md-input-container>\n\t<input mdInput #searchBox type=\"text\" placeholder=\"Song Title\" (keyup)=\"search(searchBox.value)\">\n</md-input-container>\n<div *ngFor=\"let song of songs | async\">\n\t<div class=\"song\" style=\"cursor: pointer;\" (click)=\"addToApproval(song)\">\n        <h3>{{song.title}}</h3>\n        <p>{{song.artists}}</p>\n   \t</div>\n</div>\n<md-dialog-actions>\n\t<button md-button md-dialog-close>Back</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__songs_service__ = __webpack_require__("../../../../../src/app/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__token_manager_service__ = __webpack_require__("../../../../../src/app/token-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["b" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["c" /* PasswordDialog */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* AddDialog */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["d" /* RemoveDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["b" /* DashboardComponent */]
                },
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
            ])
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["c" /* PasswordDialog */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* AddDialog */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["d" /* RemoveDialog */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__songs_service__["a" /* SongsService */], __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__token_manager_service__["a" /* TokenManagerService */],],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (password) {
        return this.http.post('/api/login', { pwd: password }).toPromise().then(function (response) { return response; }).catch(function (error) { return error; });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".admin-card {\n  height: 40px;\n}\n\n.admin-header-image-aneesh {\n  background-image: url('https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-1/c81.2.576.576/s240x240/19990602_1211450042294917_4529691436982963607_n.jpg?oh=c07af0634152f3dc609de7ce8f7cf085&oe=5A39867B');\n  background-size: cover;\n}\n\n.admin-header-image-vineeth {\n  background-image: url('https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-1/p240x240/20139867_1764268663603170_2318540232609548452_n.jpg?oh=00a449d7e161d5de752483a6cf330b8f&oe=5A29E061');\n  background-size: cover;\n}\n\n.admin-header-image-shashank {\n  background-image: url('https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-1/p240x240/15267837_905509496252217_1813902590597918452_n.jpg?oh=37e03c675a60c6f1db6b53bba8d698d8&oe=5A2E0373');\n  background-size: cover;\n}\n\n.admin-header-image-revanth {\n  background-image: url('https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-1/p240x240/19875365_721960544655758_5179151076055769010_n.jpg?oh=7ab7d5acbbd5531aaa75d2823edd10e5&oe=5A2A71E1');\n  background-size: cover;\n}\n\n.admin-header-image-aditya {\n  background-image: url('https://scontent.fewr1-2.fna.fbcdn.net/v/t31.0-1/c604.124.751.751/s240x240/14047235_494663340742071_6256025585448799763_o.jpg?oh=49de5ac8990c71e8893e101d725b7173&oe=5A273F30');\n  background-size: cover;\n}\n\n.new-song {\n\tfloat: right;\n}\n\n.container {\n\tpadding: 50px;\n}\n\n.login {\n\tfloat: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n\n<div class=\"container\">\n\n\t<button md-button class=\"login\" (click)=\"openDialog()\" *ngIf=\"!admin\">Log in as Admin</button>\n\n\t<br>\n\t<br>\n\t<br>\n\n\t<section class=\"mat-typography\">\n\t\t<md-card>\n\t\t<md-card-title>Your admins</md-card-title>\n\t\t  <md-grid-list cols=\"3\" rowHeight=\"140\">\n\t\t    <md-grid-tile>\n\t\t\t\t<md-card class=\"admin-card\">\n\t\t\t\t\t<md-card-header>\n\t\t\t\t\t    <div md-card-avatar class=\"admin-header-image-aneesh\"></div>\n\t\t\t\t\t    <md-card-title>Aneesh Deshpande</md-card-title>\n\t\t\t\t\t    <md-card-subtitle>Owner</md-card-subtitle>\n\t\t\t\t \t</md-card-header>\n\t\t\t\t</md-card>\n\t\t    </md-grid-tile>\n\t\t    <md-grid-tile>\n\t\t    \t<md-card class=\"admin-card\">\n\t\t\t\t\t<md-card-header>\n\t\t\t\t\t    <div md-card-avatar class=\"admin-header-image-vineeth\"></div>\n\t\t\t\t\t    <md-card-title>Vineeth Puli</md-card-title>\n\t\t\t\t\t    <md-card-subtitle>Contributor</md-card-subtitle>\n\t\t\t\t \t</md-card-header>\n\t\t\t\t</md-card>\n\t\t    </md-grid-tile>\n\t\t    <md-grid-tile>\n\t\t\t    <md-card class=\"admin-card\">\n\t\t\t\t\t<md-card-header>\n\t\t\t\t\t    <div md-card-avatar class=\"admin-header-image-shashank\"></div>\n\t\t\t\t\t    <md-card-title>Shashank Sharma</md-card-title>\n\t\t\t\t\t    <md-card-subtitle>Contributor</md-card-subtitle>\n\t\t\t\t \t</md-card-header>\n\t\t\t \t</md-card>\n\t\t    </md-grid-tile>\n\t\t    <md-grid-tile>\n\t\t\t    <md-card class=\"admin-card\">\n\t\t\t\t\t<md-card-header>\n\t\t\t\t\t    <div md-card-avatar class=\"admin-header-image-aditya\"></div>\n\t\t\t\t\t    <md-card-title>Aditya Shastri</md-card-title>\n\t\t\t\t\t    <md-card-subtitle>Contributor</md-card-subtitle>\n\t\t\t\t \t</md-card-header>\n\t\t\t \t</md-card>\n\t\t    </md-grid-tile>\n\t\t    <md-grid-tile>\n\t\t\t    <md-card class=\"admin-card\">\n\t\t\t    \t<md-card-header>\n\t\t\t\t\t    <div md-card-avatar class=\"admin-header-image-revanth\"></div>\n\t\t\t\t\t    <md-card-title>Revanth Korrapolu</md-card-title>\n\t\t\t\t\t    <md-card-subtitle>Contributor</md-card-subtitle>\n\t\t\t\t \t</md-card-header>\n\t\t\t \t</md-card>\n\t\t    </md-grid-tile>\n\t\t  </md-grid-list>\t\n\t\t </md-card>\n\t\t <br>\n\t\t <br>\n\t\t <md-card>\n\t\t \t<md-card-title>Approval Queue<span class=\"new-song\"><button md-button (click)=\"searchDialog()\"><md-icon>add_circle</md-icon></button></span></md-card-title>\n\t\t \t<md-list>\n\t\t \t\t<md-list-item>\n\t \t\t\t    <md-card *ngFor=\"let song of songs\">\n\t \t\t\t    \t<md-card-header>\n\t \t\t\t    \t\t<md-card-title>{{song.title}}<span><a [href]=\"song.url\"><md-icon>play_arrow</md-icon></a></span></md-card-title>\n\t \t\t\t    \t\t<md-card-subtitle>{{song.artists}}</md-card-subtitle>\n\t \t\t\t    \t</md-card-header>\n\t \t\t\t    \t<md-card-content>\n\t \t\t\t    \t\t<p>Approvals: {{song.approvals}}</p>\n\t \t\t\t    \t\t<p>Disapprovals: {{song.nonapprovals}}</p>\n\t \t\t\t    \t</md-card-content>\n\t \t\t\t    \t<md-card-actions *ngIf=\"admin\">\n\t \t\t\t    \t\t<button md-button (click)=\"approve(song)\"><md-icon>check_circle</md-icon></button>\n\t \t\t\t    \t\t<button md-button (click)=\"nonApprove(song)\"><md-icon>cancel</md-icon></button>\n\t \t\t\t    \t</md-card-actions>\n\t \t\t\t    </md-card>\n\t\t \t\t</md-list-item>\n\t\t \t</md-list>\n\t\t </md-card>\n\t\t <br>\n\t\t <br>\n\t\t <md-card>\n\t\t \t<md-card-title>Approved Songs</md-card-title>\n\t \t\t \t<md-list>\n\t \t\t \t\t<md-list-item>\n\t \t \t\t\t    <md-card *ngFor=\"let song of approves\">\n\t \t \t\t\t    \t<md-card-header>\n\t \t \t\t\t    \t\t<md-card-title>{{song.title}}<span><a [href]=\"song.url\"><md-icon>play_arrow</md-icon></a></span></md-card-title>\n\t \t \t\t\t    \t\t<md-card-subtitle>{{song.artists}}</md-card-subtitle>\n\t \t \t\t\t    \t</md-card-header>\n\t \t \t\t\t    </md-card>\n\t \t\t \t\t</md-list-item>\n\t \t\t \t</md-list>\n\t\t </md-card>\n\t\t <br>\n\t\t <br>\n\t\t <md-card>\n\t\t \t<md-card-title>Removal Queue<span class=\"new-song\"><button md-button (click)=\"searchPlaylistDialog()\"><md-icon>add_circle</md-icon></button></span></md-card-title>\n\t\t \t<md-list>\n\t\t \t\t<md-list-item>\n\t \t\t\t    <md-card *ngFor=\"let song of rems\">\n\t \t\t\t    \t<md-card-header>\n\t \t\t\t    \t\t<md-card-title>{{song.title}}<span><a [href]=\"song.url\"><md-icon>play_arrow</md-icon></a></span></md-card-title>\n\t \t\t\t    \t\t<md-card-subtitle>{{song.artists}}</md-card-subtitle>\n\t \t\t\t    \t</md-card-header>\n\t \t\t\t    \t<md-card-content>\n\t \t\t\t    \t\t<p>Approvals: {{song.disapprovals}}</p>\n\t \t\t\t    \t\t<p>Disapprovals: {{song.nondisapprovals}}</p>\n\t \t\t\t    \t</md-card-content>\n\t \t\t\t    \t<md-card-actions *ngIf=\"admin\">\n\t \t\t\t    \t\t<button md-button (click)=\"disapprove(song)\"><md-icon>check_circle</md-icon></button>\n\t \t\t\t    \t\t<button md-button (click)=\"nonDisapprove(song)\"><md-icon>cancel</md-icon></button>\n\t \t\t\t    \t</md-card-actions>\n\t \t\t\t    </md-card>\n\t\t \t\t</md-list-item>\n\t\t \t</md-list>\n\t\t </md-card>\n\t\t <br>\n\t\t <br>\n\t\t <md-card>\n\t\t \t<md-card-title>Removed Songs</md-card-title>\n\t \t\t \t<md-list>\n\t \t\t \t\t<md-list-item>\n\t \t \t\t\t    <md-card *ngFor=\"let song of dels\">\n\t \t \t\t\t    \t<md-card-header>\n\t \t \t\t\t    \t\t<md-card-title>{{song.title}}<span><a [href]=\"song.url\"><md-icon>play_arrow</md-icon></a></span></md-card-title>\n\t \t \t\t\t    \t\t<md-card-subtitle>{{song.artists}}</md-card-subtitle>\n\t \t \t\t\t    \t</md-card-header>\n\t \t \t\t\t    </md-card>\n\t \t\t \t\t</md-list-item>\n\t \t\t \t</md-list>\n\t\t </md-card>\n\t</section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PasswordDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RemoveDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__songs_service__ = __webpack_require__("../../../../../src/app/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token_manager_service__ = __webpack_require__("../../../../../src/app/token-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DashboardComponent = (function () {
    function DashboardComponent(dialog, songsService, tokenManagerService, ref) {
        this.dialog = dialog;
        this.songsService = songsService;
        this.tokenManagerService = tokenManagerService;
        this.ref = ref;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin = false;
        this.songsService.getApprovalQueue().then(function (data) { _this.songs = data; console.log(data); }).catch(function (err) { return console.log(err); });
        this.songsService.getRemovalQueue().then(function (data) { _this.rems = data; console.log(data); }).catch(function (err) { return console.log(err); });
        this.songsService.getApprovedSongs().then(function (data) { _this.approves = data; console.log(data); }).catch(function (err) { return console.log(err); });
        this.songsService.getRemovedSongs().then(function (data) { _this.dels = data; console.log(data); }).catch(function (err) { return console.log(err); });
        this.refreshState();
    };
    DashboardComponent.prototype.refreshState = function () {
        this.token = this.tokenManagerService.retrieveToken();
        console.log(this.token);
        if (!(this.token == '' || this.token == null)) {
            this.admin = true;
        }
        else {
            this.admin = false;
        }
        this.who = this.tokenManagerService.retrieveMe();
    };
    DashboardComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(PasswordDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.tokenManagerService.store(result.token, result.loggedIn);
            if (!(result.token == '' || result.token == null)) {
                _this.admin = true;
            }
        });
    };
    DashboardComponent.prototype.searchDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.songsService.getApprovalQueue().then(function (data) { return _this.songs = data; }).catch(function (err) { return console.log(err); });
        });
    };
    DashboardComponent.prototype.searchPlaylistDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(RemoveDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.songsService.getRemovalQueue().then(function (data) { return _this.rems = data; }).catch(function (err) { return console.log(err); });
        });
    };
    DashboardComponent.prototype.approve = function (song) {
        var _this = this;
        this.refreshState();
        this.songsService.approve(song.spotifyid, this.who, this.token);
        this.songsService.getApprovalQueue().then(function (data) { return _this.songs = data; }).catch(function (err) { return console.log(err); });
        this.ref.detectChanges();
    };
    DashboardComponent.prototype.nonApprove = function (song) {
        var _this = this;
        this.refreshState();
        console.log(song);
        this.songsService.nonApprove(song.spotifyid, this.who, this.token);
        this.songsService.getApprovalQueue().then(function (data) { return _this.songs = data; }).catch(function (err) { return console.log(err); });
        this.ref.detectChanges();
    };
    DashboardComponent.prototype.disapprove = function (song) {
        var _this = this;
        this.refreshState();
        this.songsService.disapprove(song.spotifyid, this.who, this.token);
        this.songsService.getRemovalQueue().then(function (data) { return _this.rems = data; }).catch(function (err) { return console.log(err); });
        this.ref.detectChanges();
    };
    DashboardComponent.prototype.nonDisapprove = function (song) {
        var _this = this;
        this.refreshState();
        this.songsService.nonDisapprove(song.spotifyid, this.who, this.token);
        this.songsService.getRemovalQueue().then(function (data) { return _this.rems = data; }).catch(function (err) { return console.log(err); });
        this.ref.detectChanges();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__songs_service__["a" /* SongsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__token_manager_service__["a" /* TokenManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__token_manager_service__["a" /* TokenManagerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object])
], DashboardComponent);

var PasswordDialog = (function () {
    function PasswordDialog(dialogRef, authService) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.incorrectPassword = false;
    }
    PasswordDialog.prototype.checkPassword = function () {
        var _this = this;
        this.authService.login(this.password).
            then(function (data) {
            if (data.loggedIn == "Aditya" || data.loggedIn == "Vineeth" || data.loggedIn == "Aneesh" || data.loggedIn == "Shashank" || data.loggedIn == "Revanth") {
                _this.dialogRef.close({ token: data.token, loggedIn: data.loggedIn });
            }
            else {
                _this.incorrectPassword = true;
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    return PasswordDialog;
}());
PasswordDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'password-dialog',
        template: __webpack_require__("../../../../../src/app/password-dialog.html"),
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], PasswordDialog);

var AddDialog = (function () {
    function AddDialog(dialogRef, songsService) {
        this.dialogRef = dialogRef;
        this.songsService = songsService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    AddDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.songs = this.searchTerms
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.songsService.search(term) : __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]);
        });
    };
    AddDialog.prototype.search = function (title) {
        this.searchTerms.next(title);
    };
    AddDialog.prototype.addToApproval = function (song) {
        console.log(song);
        this.songsService.addToApproval(song.spotifyid);
        this.dialogRef.close();
    };
    return AddDialog;
}());
AddDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'add-dialog',
        template: __webpack_require__("../../../../../src/app/add-dialog.html")
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__songs_service__["a" /* SongsService */]) === "function" && _h || Object])
], AddDialog);

var RemoveDialog = (function () {
    function RemoveDialog(dialogRef, songsService) {
        this.dialogRef = dialogRef;
        this.songsService = songsService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    RemoveDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.songsService.getPlaylist().then(function (data) { _this.playlist = data; console.log(data); }).catch(function (err) { return console.log(err); });
    };
    RemoveDialog.prototype.addToRemoval = function (song) {
        this.songsService.addToRemoval(song.spotifyid);
        this.dialogRef.close();
    };
    return RemoveDialog;
}());
RemoveDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'remove-dialog',
        template: __webpack_require__("../../../../../src/app/remove-dialog.html")
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__songs_service__["a" /* SongsService */]) === "function" && _k || Object])
], RemoveDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/password-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h3>Enter the admin password:</h3>\n<md-input-container>\n\t<input mdInput type=\"password\" placeholder=\"Password\" (keyup.enter)=\"checkPassword()\" [(ngModel)]=\"password\">\n</md-input-container>\n<p *ngIf=\"incorrectPassword\" style=\"color: red\">Incorrect Password</p>\n<md-dialog-actions>\n\t<button md-button md-dialog-close>Back</button>\n\t<button md-button (click)=\"checkPassword()\">Submit</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/remove-dialog.html":
/***/ (function(module, exports) {

module.exports = "<md-dialog-content>\n<div *ngFor=\"let song of playlist\">\n\t<div class=\"song\" style=\"cursor: pointer;\" (click)=\"addToRemoval(song)\">\n        <h3>{{song.title}}</h3>\n        <p>{{song.artists}}</p>\n   \t</div>\n</div>\n</md-dialog-content>\n<md-dialog-actions>\n\t<button md-button md-dialog-close>Back</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/songs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongsService = (function () {
    function SongsService(http) {
        this.http = http;
        this.url = '/api/';
    }
    SongsService.prototype.getApprovalQueue = function () {
        return this.http.get(this.url + 'songs?status=1').toPromise().then(function (response) { return response; }).catch(function (err) { return err; });
    };
    SongsService.prototype.search = function (string) {
        return this.http.get(this.url + 'search?string=' + string).map(function (response) { console.log(response); return response; });
    };
    SongsService.prototype.addToApproval = function (id) {
        this.http.post(this.url + 'songs/action', { action: "addForApproval", id: id }).subscribe();
    };
    SongsService.prototype.approve = function (id, who, token) {
        this.http.post(this.url + 'songs/action', { action: "approve", id: id, who: who }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + token) }).subscribe();
    };
    SongsService.prototype.nonApprove = function (id, who, token) {
        this.http.post(this.url + 'songs/action', { action: "nonApprove", id: id, who: who }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + token) }).subscribe();
    };
    SongsService.prototype.disapprove = function (id, who, token) {
        this.http.post(this.url + 'songs/action', { action: "disapprove", id: id, who: who }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + token) }).subscribe();
    };
    SongsService.prototype.nonDisapprove = function (id, who, token) {
        this.http.post(this.url + 'songs/action', { action: "nonDisapprove", id: id, who: who }, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + token) }).subscribe();
    };
    SongsService.prototype.getRemovalQueue = function () {
        return this.http.get(this.url + 'songs?status=4').toPromise().then(function (response) { return response; }).catch(function (err) { return err; });
    };
    SongsService.prototype.addToRemoval = function (id) {
        this.http.post(this.url + 'songs/action', { action: "addForDisapproval", id: id }).subscribe();
    };
    SongsService.prototype.getPlaylist = function () {
        return this.http.get(this.url + 'songs?status=3').toPromise().then(function (response) { console.log(response); return response; }).catch(function (err) { return err; });
    };
    SongsService.prototype.getApprovedSongs = function () {
        return this.http.get(this.url + 'songs?status=2').toPromise().then(function (response) { console.log(response); return response; }).catch(function (err) { return err; });
    };
    SongsService.prototype.getRemovedSongs = function () {
        return this.http.get(this.url + 'songs?status=5').toPromise().then(function (response) { console.log(response); return response; }).catch(function (err) { return err; });
    };
    return SongsService;
}());
SongsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], SongsService);

var _a;
//# sourceMappingURL=songs.service.js.map

/***/ }),

/***/ "../../../../../src/app/token-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenManagerService = (function () {
    function TokenManagerService() {
    }
    TokenManagerService.prototype.store = function (content, who) {
        localStorage.setItem("token", content);
        localStorage.setItem("time", Date.now() + '');
        localStorage.setItem("who", who);
    };
    TokenManagerService.prototype.retrieveToken = function () {
        var currentTime = Date.now;
        var tokenTime = parseInt(localStorage.getItem("time"));
        if (Date.now() - tokenTime > 3599900) {
            return null;
        }
        else {
            return localStorage.getItem("token");
        }
    };
    TokenManagerService.prototype.retrieveMe = function () {
        return localStorage.getItem("who");
    };
    return TokenManagerService;
}());
TokenManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TokenManagerService);

//# sourceMappingURL=token-manager.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map