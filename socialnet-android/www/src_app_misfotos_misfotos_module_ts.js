(self["webpackChunksocialnet"] = self["webpackChunksocialnet"] || []).push([["src_app_misfotos_misfotos_module_ts"],{

/***/ 3251:
/*!*****************************************************!*\
  !*** ./src/app/misfotos/misfotos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisfotosPageRoutingModule": () => (/* binding */ MisfotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _misfotos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misfotos.page */ 5742);




const routes = [
    {
        path: '',
        component: _misfotos_page__WEBPACK_IMPORTED_MODULE_0__.MisfotosPage
    }
];
let MisfotosPageRoutingModule = class MisfotosPageRoutingModule {
};
MisfotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MisfotosPageRoutingModule);



/***/ }),

/***/ 2037:
/*!*********************************************!*\
  !*** ./src/app/misfotos/misfotos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisfotosPageModule": () => (/* binding */ MisfotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _misfotos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misfotos-routing.module */ 3251);
/* harmony import */ var _misfotos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misfotos.page */ 5742);







let MisfotosPageModule = class MisfotosPageModule {
};
MisfotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _misfotos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisfotosPageRoutingModule
        ],
        declarations: [_misfotos_page__WEBPACK_IMPORTED_MODULE_1__.MisfotosPage]
    })
], MisfotosPageModule);



/***/ }),

/***/ 5742:
/*!*******************************************!*\
  !*** ./src/app/misfotos/misfotos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisfotosPage": () => (/* binding */ MisfotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_misfotos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./misfotos.page.html */ 8611);
/* harmony import */ var _misfotos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misfotos.page.scss */ 3214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/GLOBAL */ 6874);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ 3289);
/* harmony import */ var _services_foto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/foto.service */ 7535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);









let MisfotosPage = class MisfotosPage {
    constructor(_fotoService, alertController) {
        this._fotoService = _fotoService;
        this.alertController = alertController;
        this.fotos = [];
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(_services_GLOBAL__WEBPACK_IMPORTED_MODULE_2__.GLOBALSOCKET.url, { transports: ['websocket'], upgrade: false });
        this.token = localStorage.getItem('token');
        this.identity = JSON.parse(localStorage.getItem('identity'));
    }
    ngOnInit() {
        this.socket.on('get-data', (data) => {
            this.obtener_fotos_user();
        });
        this.socket.on('get-comments', (data) => {
            this.obtener_fotos_user();
        });
        this.socket.on('get-images', (data) => {
            this.obtener_fotos_user();
        });
        this.obtener_fotos_user();
    }
    obtener_fotos_user() {
        this._fotoService.obtener_fotos_user(this.token).subscribe(response => {
            this.fotos = response.data;
            this.likes = response.user_likes;
        }, error => {
            console.log(error);
        });
    }
    like_imagen(fotoid) {
        this._fotoService.like_foto(fotoid, this.token).subscribe(response => {
            this.socket.emit('like-image', { data: response.dislike });
            var search = this.likes.indexOf(fotoid);
            if (search != -1) {
                this.likes.splice(search, 1);
            }
            else {
                this.likes.push(fotoid);
            }
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                icon: 'error',
                title: 'ERROR!',
                text: error.error.message
            });
        });
    }
    eliminar_foto(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmación',
                message: 'Estas seguro de eliminar esta imagen?',
                buttons: [
                    {
                        text: 'Si,eliminar',
                        handler: () => {
                            this._fotoService.eliminar_foto(id, this.token).subscribe(response => {
                                this.obtener_fotos_user();
                            }, error => {
                                console.log(error);
                            });
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            console.log('No se elimino');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MisfotosPage.ctorParameters = () => [
    { type: _services_foto_service__WEBPACK_IMPORTED_MODULE_4__.FotosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
MisfotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-misfotos',
        template: _raw_loader_misfotos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_misfotos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MisfotosPage);



/***/ }),

/***/ 3214:
/*!*********************************************!*\
  !*** ./src/app/misfotos/misfotos.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-card {\n  background-color: #242526;\n}\n\nion-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2ZvdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoibWlzZm90b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XHJcbiAgfVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59Il19 */");

/***/ }),

/***/ 8611:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/misfotos/misfotos.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n  <ion-toolbar>\n\n      <ion-text class=\"ms-3 text-light fw-bold\">Tus fotos</ion-text>\n    <ion-buttons  slot=\"end\"  >\n      <ion-icon [routerLink]=\"['/tabs/mis-fotos/new-foto']\"  class=\"me-3 text-light\" name=\"add-circle\"></ion-icon>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n<ng-container *ngIf=\"fotos.length != 0\" >\n\n<div *ngFor=\"let item of fotos\"> \n  \n  <ion-card style=\"background-color: #242526;\" >\n\n      <div class=\"ms-2 mt-3 mb-2  d-flex justify-content-start\">\n        <ion-avatar [routerLink]=\"['/myprofile']\" routerLinkActive=\"router-link-active\"  style=\"max-height: 35px; max-width: 35px;\">\n          <img  src=\"{{item.user.profileImg}}\">\n        </ion-avatar>\n        \n        <ion-label class=\"mt-2 mb-2 text-light fw-bold\"> &nbsp; {{item.user.username}}</ion-label>\n        <ion-icon (click)=\"eliminar_foto(item._id)\"  class=\"ms-auto me-2\" color=\"danger\" name=\"trash-bin\"></ion-icon>\n      </div>\n\n    <img width=\"100%\" src=\"{{item.imagen}}\" alt=\"\">\n\n    <ion-row class=\"cardfooter\">\n      <ion-col>\n            <div class=\"ms-1 mb-1 mt-1 d-flex justify-content-start\">\n              <ion-icon (click)=\"like_imagen(item._id)\" *ngIf=\"likes.indexOf(item._id) >= 0\" color=\"danger\" class=\"text-light\" name=\"heart\"></ion-icon>    \n              <ion-icon (click)=\"like_imagen(item._id)\" *ngIf=\"likes.indexOf(item._id)< 0\" class=\"text-light\" name=\"heart-outline\"></ion-icon>                \n              <ion-icon class=\"text-light ms-3\"   [routerLink]=\"['/tabs/mis-fotos/comentarios',item._id]\" name=\"chatbubble-outline\"></ion-icon>\n              \n            \n            </div>\n            <div *ngIf=\"item.likes != 0\" class=\"text-light fw-bold ms-2\">\n              {{item.likes}} Me gusta\n            </div>\n            <div class=\"ms-2\">\n             <a class=\"text-light fw-bold\" style=\"text-decoration: none;\">{{item.user.username}}</a> <ion-text class=\"text-light ms-1\">{{item.descripcion}}</ion-text>\n            </div>\n            <div *ngIf=\"item.comentarios != 0\" class=\"ms-2\">\n              \n              <a [routerLink]=\"['/tabs/mis-fotos/comentarios',item._id]\" style=\"text-decoration: none;color: #999999;\" >Ver los {{item.comentarios}} comentarios</a>\n            </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n </div> \n\n</ng-container>\n\n\n\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_misfotos_misfotos_module_ts.js.map