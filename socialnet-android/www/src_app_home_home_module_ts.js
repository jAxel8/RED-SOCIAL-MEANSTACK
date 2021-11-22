(self["webpackChunksocialnet"] = self["webpackChunksocialnet"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_foto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/foto.service */ 7535);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ 3289);
/* harmony import */ var src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/GLOBAL */ 6874);








let HomePage = class HomePage {
    constructor(_fotoService) {
        this._fotoService = _fotoService;
        this.fotos = [];
        this.fotosnuevas = [];
        this.load_data = true;
        this.likes = [];
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io)(src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_5__.GLOBALSOCKET.url, { transports: ['websocket'], upgrade: false });
        this.token = localStorage.getItem('token');
        this.identity = JSON.parse(localStorage.getItem('identity'));
    }
    ngOnInit() {
        this.socket.on('get-data', (data) => {
            this.get_fotos();
        });
        this.socket.on('get-comments', (data) => {
            this.get_fotos();
        });
        this.get_fotos();
    }
    get_fotos() {
        this._fotoService.get_fotos_home(this.token).subscribe(response => {
            this.fotos = response.data;
            this.likes = response.user_likes;
            this.load_data = false;
        }, error => {
            console.log(error);
        });
    }
    like_imagen(fotoid) {
        this._fotoService.like_foto(fotoid, this.token).subscribe(response => {
            this.socket.emit('like-image', response);
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'ERROR!',
                text: error.error.message
            });
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.get_fotos();
            event.target.complete();
        }, 2000);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_foto_service__WEBPACK_IMPORTED_MODULE_3__.FotosService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQU9BO0VBQ0UsZUFBQTtBQUpGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar translucent>\n    <ion-title class=\"text-light\">\n        <h3>Inicio</h3>\n        \n\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n   <ng-container *ngIf=\"fotos.length >= 1\"  >\n     <div *ngFor=\"let item of fotos\"> \n\n      <ion-card style=\"background-color: #242526;\" >\n\n          <div class=\"ms-2 mt-3 mb-2  d-flex justify-content-start\">\n            <ion-avatar [routerLink]=\"['/tabs/home/perfil',item.user._id]\"   style=\"max-height: 35px; max-width: 35px;\">\n              <img  src=\"{{item.user.profileImg}}\">\n            </ion-avatar>\n            <ion-label [routerLink]=\"['/tabs/home/perfil',item.user._id]\" class=\"mt-2 mb-2 text-light fw-bold\"> &nbsp; {{item.user.username}}</ion-label>\n          </div>\n\n        <img width=\"100%\" src=\"{{item.imagen}}\" alt=\"\">\n  \n        <ion-row class=\"cardfooter\">\n          <ion-col>\n                <div class=\"ms-1 mb-1 mt-1 d-flex justify-content-start\">\n                  <ion-icon (click)=\"like_imagen(item._id)\" *ngIf=\"likes.indexOf(item._id) >= 0\" color=\"danger\" class=\"text-light\" name=\"heart\"></ion-icon>    \n                  <ion-icon (click)=\"like_imagen(item._id)\" *ngIf=\"likes.indexOf(item._id)< 0\" class=\"text-light\" name=\"heart-outline\"></ion-icon>               \n                  <ion-icon class=\"text-light ms-3\" [routerLink]=\"['/tabs/home/comentarios',item._id]\" name=\"chatbubble-outline\"></ion-icon>\n                  \n\n                </div>\n                <div *ngIf=\"item.likes != 0\" class=\"text-light fw-bold ms-2\">\n                  {{item.likes}} Me gusta\n                </div>\n                <div class=\"ms-2\">\n                 <a class=\"text-light fw-bold\" [routerLink]=\"['/perfil',item.user._id]\" style=\"text-decoration: none;\">{{item.user.username}}</a> <ion-text class=\"text-light ms-1\">{{item.descripcion}}</ion-text>\n                </div>\n                <div *ngIf=\"item.comentarios != 0\" class=\"ms-2\">\n                  \n                  <a [routerLink]=\"['/tabs/home/comentarios',item._id]\" style=\"text-decoration: none;color: #999999;\" >Ver los {{item.comentarios}} comentarios</a>\n                </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n     </div>\n    \n   </ng-container>\n    \n   <ng-container *ngIf=\"fotos.length == 0 && !load_data \">\n    <h1 class=\"mt-5 text-center text-light\">NO HAY FOTOS SUBIDAS</h1>\n  </ng-container>\n\n\n\n</ion-content>\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map