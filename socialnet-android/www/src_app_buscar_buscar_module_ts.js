(self["webpackChunksocialnet"] = self["webpackChunksocialnet"] || []).push([["src_app_buscar_buscar_module_ts"],{

/***/ 8859:
/*!*************************************************!*\
  !*** ./src/app/buscar/buscar-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageRoutingModule": () => (/* binding */ BuscarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar.page */ 1053);




const routes = [
    {
        path: '',
        component: _buscar_page__WEBPACK_IMPORTED_MODULE_0__.BuscarPage
    }
];
let BuscarPageRoutingModule = class BuscarPageRoutingModule {
};
BuscarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuscarPageRoutingModule);



/***/ }),

/***/ 2540:
/*!*****************************************!*\
  !*** ./src/app/buscar/buscar.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPageModule": () => (/* binding */ BuscarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-routing.module */ 8859);
/* harmony import */ var _buscar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page */ 1053);







let BuscarPageModule = class BuscarPageModule {
};
BuscarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buscar_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuscarPageRoutingModule
        ],
        declarations: [_buscar_page__WEBPACK_IMPORTED_MODULE_1__.BuscarPage]
    })
], BuscarPageModule);



/***/ }),

/***/ 1053:
/*!***************************************!*\
  !*** ./src/app/buscar/buscar.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarPage": () => (/* binding */ BuscarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_buscar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buscar.page.html */ 9469);
/* harmony import */ var _buscar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar.page.scss */ 1685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_foto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/foto.service */ 7535);
/* harmony import */ var _services_GLOBAL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/GLOBAL */ 6874);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ 3289);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);










let BuscarPage = class BuscarPage {
    constructor(_userService, _activatedRoute, _fotoService) {
        this._userService = _userService;
        this._activatedRoute = _activatedRoute;
        this._fotoService = _fotoService;
        this.load_data = true;
        this.fotos = [];
        this.usuarios = [];
        this.selected = '1';
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.io)(_services_GLOBAL__WEBPACK_IMPORTED_MODULE_3__.GLOBALSOCKET.url, { transports: ['websocket'], upgrade: false });
        this.token = localStorage.getItem('token');
    }
    ngOnInit() {
    }
    buscar() {
        this._userService.buscar_usuarios(this.termino, this.token).subscribe(response => {
            this.load_data = false;
            this.usuarios = response;
            console.log(this.usuarios);
        }, error => {
            console.log(error);
        });
        this._fotoService.buscar_fotos(this.termino, this.token).subscribe(response => {
            this.fotos = response.data;
            this.likes = response.user_likes;
            console.log(this.fotos);
            this.load_data = false;
        }, error => {
            console.log(error);
        });
    }
    like_imagen(fotoid) {
        this._fotoService.like_foto(fotoid, this.token).subscribe(response => {
            var search = this.likes.indexOf(fotoid);
            if (search != -1) {
                this.likes.splice(search, 1);
            }
            else {
                this.likes.push(fotoid);
            }
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                icon: 'error',
                title: 'ERROR!',
                text: error.error.message
            });
        });
    }
    segmentChanged(event) {
        this.selected = event.detail.value;
    }
};
BuscarPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_foto_service__WEBPACK_IMPORTED_MODULE_2__.FotosService }
];
BuscarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-buscar',
        template: _raw_loader_buscar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buscar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BuscarPage);



/***/ }),

/***/ 1685:
/*!*****************************************!*\
  !*** ./src/app/buscar/buscar.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-segment {\n  --background: #242526;\n}\n\nion-icon {\n  color: white;\n}\n\nion-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2Nhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImJ1c2Nhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzI0MjUyNjtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 9469:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buscar/buscar.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-searchbar (keyup.enter)=\"buscar()\" [(ngModel)]=\"termino\" name=\"termino\" class=\"mt-2 text-light\" placeholder=\"Buscar...\" style=\"margin: auto;flex-basis: 50px;width: 90%;--background:#242526\"></ion-searchbar>\n\n  </ion-toolbar>\n  <ion-segment  [value]=\"selected\" (ionChange)=\"segmentChanged($event)\"  value=\"users\">\n    <ion-segment-button value=\"1\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-icon name=\"images-outline\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  \n</ion-header>\n\n<ion-content>\n\n \n    <div *ngIf=\"selected == 1\">\n     <ng-container *ngIf=\"usuarios.length >= 1\">\n      <div *ngFor=\"let item of usuarios\"> \n        <ion-list>\n          <ion-item [routerLink]=\"['/tabs/buscar/perfil',item._id]\">\n            <ion-avatar slot=\"start\">\n              <img src=\"{{item.profileImg}}\">\n            </ion-avatar>\n            <ion-label class=\"text-light\"> {{item.name}} {{item.surname}} </ion-label>\n            \n            \n          </ion-item>\n  \n        </ion-list>\n      </div>\n     </ng-container>\n     <ng-container *ngIf=\"usuarios.length == 0 && !load_data\">\n      <h1 class=\"text-center text-light\">SIN RESULTADOS PARA <br> {{termino}} </h1>\n     </ng-container>\n  \n     </div>\n   \n     <div *ngIf=\"selected == 2\">\n      <ng-container *ngIf=\"fotos.length >= 1\"  >\n        <div *ngFor=\"let item of fotos\"> \n   \n         <ion-card style=\"background-color: #242526;\" >\n   \n             <div class=\"ms-2 mt-3 mb-2  d-flex justify-content-start\">\n               <ion-avatar [routerLink]=\"['/tabs/buscar/perfil',item.user._id]\" style=\"max-height: 35px; max-width: 35px;\">\n                 <img  src=\"{{item.user.profileImg}}\">\n               </ion-avatar>\n               <ion-label [routerLink]=\"['/tabs/buscar/perfil',item.user._id]\" class=\"mt-2 mb-2 text-light fw-bold\"> &nbsp; {{item.user.username}}</ion-label>\n             </div>\n   \n           <img width=\"100%\" src=\"{{item.imagen}}\" alt=\"\">\n     \n           <ion-row class=\"cardfooter\">\n             <ion-col>\n                   <div class=\"ms-1 mb-1 mt-1 d-flex justify-content-start\">\n                     <ion-icon (click)=\"like_imagen(item._id)\" *ngIf=\"likes.indexOf(item._id) >= 0\" color=\"danger\" class=\"text-light\" name=\"heart\"></ion-icon>    \n                     <ion-icon (click)=\"like_imagen(item._id)\" *ngIf=\"likes.indexOf(item._id)< 0\" class=\"text-light\" name=\"heart-outline\"></ion-icon>               \n                     <ion-icon class=\"text-light ms-3\" [routerLink]=\"['/fotos',item._id]\" name=\"chatbubble-outline\"></ion-icon>\n                     \n   \n                   </div>\n                   <div *ngIf=\"item.likes != 0\" class=\"text-light fw-bold ms-2\">\n                     {{item.likes}} Me gusta\n                   </div>\n                   <div class=\"ms-2\">\n                    <a class=\"text-light fw-bold\" [routerLink]=\"['/tabs/buscar/perfil',item.user._id]\" style=\"text-decoration: none;\">{{item.user.username}}</a> <ion-text class=\"text-light ms-1\">{{item.descripcion}}</ion-text>\n                   </div>\n                   <div *ngIf=\"item.comentarios != 0\" class=\"ms-2\">\n                     \n                     <a [routerLink]=\"['/tabs/buscar/comentarios',item._id]\" style=\"text-decoration: none;color: #999999;\" >Ver los {{item.comentarios}} comentarios</a>\n                   </div>\n             </ion-col>\n           </ion-row>\n         </ion-card>\n        </div>\n       \n      </ng-container>\n       \n      <ng-container *ngIf=\"fotos.length == 0 && !load_data\">\n       <h1 class=\"mt-5 text-center text-light\">SIN RESULTADOS PARA <br> {{termino}} </h1>\n     </ng-container>\n     </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_buscar_buscar_module_ts.js.map