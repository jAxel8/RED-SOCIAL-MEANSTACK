(self["webpackChunksocialnet"] = self["webpackChunksocialnet"] || []).push([["src_app_mi-perfil_mi-perfil_module_ts"],{

/***/ 7457:
/*!*******************************************************!*\
  !*** ./src/app/mi-perfil/mi-perfil-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiPerfilPageRoutingModule": () => (/* binding */ MiPerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mi_perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mi-perfil.page */ 7567);




const routes = [
    {
        path: '',
        component: _mi_perfil_page__WEBPACK_IMPORTED_MODULE_0__.MiPerfilPage
    }
];
let MiPerfilPageRoutingModule = class MiPerfilPageRoutingModule {
};
MiPerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MiPerfilPageRoutingModule);



/***/ }),

/***/ 3423:
/*!***********************************************!*\
  !*** ./src/app/mi-perfil/mi-perfil.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiPerfilPageModule": () => (/* binding */ MiPerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _mi_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mi-perfil-routing.module */ 7457);
/* harmony import */ var _mi_perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mi-perfil.page */ 7567);







let MiPerfilPageModule = class MiPerfilPageModule {
};
MiPerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mi_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.MiPerfilPageRoutingModule
        ],
        declarations: [_mi_perfil_page__WEBPACK_IMPORTED_MODULE_1__.MiPerfilPage]
    })
], MiPerfilPageModule);



/***/ }),

/***/ 7567:
/*!*********************************************!*\
  !*** ./src/app/mi-perfil/mi-perfil.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiPerfilPage": () => (/* binding */ MiPerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mi_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mi-perfil.page.html */ 6999);
/* harmony import */ var _mi_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mi-perfil.page.scss */ 3089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_foto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/foto.service */ 7535);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 3071);








let MiPerfilPage = class MiPerfilPage {
    constructor(_fotoService, _userService, alertController, userService, router) {
        this._fotoService = _fotoService;
        this._userService = _userService;
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.fotos = [];
        this.seguidores = [];
        this.siguiendo = [];
        this.token = localStorage.getItem('token');
    }
    ngOnInit() {
        this.get_identity();
        this.obtener_fotos();
        this.obtener_seguidores();
        this.obtener_siguiendo();
    }
    ngDoCheck() {
        this.identity = this.userService.get_identity();
    }
    obtener_fotos() {
        this._fotoService.obtener_fotos_user(this.token).subscribe(response => {
            this.fotos = response.data;
        }, error => {
            console.log(error);
        });
    }
    obtener_seguidores() {
        this._userService.obtener_seguidores_user(this.userid, this.token).subscribe(response => {
            this.seguidores = response.follows;
        }, error => {
            console.log(error);
        });
    }
    obtener_siguiendo() {
        this._userService.obtener_siguiendo_user(this.userid, this.token).subscribe(response => {
            this.siguiendo = response.following;
        }, error => {
            console.log(error);
        });
    }
    get_identity() {
        this.identity = JSON.parse(localStorage.getItem('identity'));
        this.userid = this.identity._id;
    }
    cerrar_sesion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmación',
                message: 'Quieres cerrar sesión?',
                buttons: [
                    {
                        text: 'Si,salir',
                        handler: () => {
                            localStorage.clear();
                            this.router.navigate(['/login']);
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            console.log('No se cerro la sesión.');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MiPerfilPage.ctorParameters = () => [
    { type: _services_foto_service__WEBPACK_IMPORTED_MODULE_2__.FotosService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
MiPerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mi-perfil',
        template: _raw_loader_mi_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mi_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MiPerfilPage);



/***/ }),

/***/ 3089:
/*!***********************************************!*\
  !*** ./src/app/mi-perfil/mi-perfil.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".image-center {\n  margin: 0 auto;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-card {\n  background-color: #242526;\n}\n\nion-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pLXBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUU7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBQ047O0FBRUU7RUFDSSx5QkFBQTtBQUNOOztBQUVFO0VBQ0UsZUFBQTtBQUNKIiwiZmlsZSI6Im1pLXBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY2VudGVye1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgOnJvb3Qge1xyXG4gICAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIGlvbi1jYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNTI2O1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 6999:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mi-perfil/mi-perfil.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"text-light\" (click)=\"cerrar_sesion()\" >\n        <ion-icon  name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-text class=\"ms-3 text-light fw-bold\">{{identity.username}}</ion-text>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"mt-5\">\n    <ion-avatar class=\"image-center mt-2\" style=\"min-height: 150px; min-width: 150px;\">\n      <img src=\"{{identity.profileImg}}\">\n    </ion-avatar>\n  \n    <div class=\"ion-text-center\">\n      <h4 class=\"name mt-3 text-light \"> {{identity.name + ' ' + identity.surname}}   </h4>\n      <p class=\"nick text-light\"> {{'' + identity.username}} </p>\n    </div>\n\n\n  \n    <div class=\"ion-text-center mb-3\">\n  \n      <ion-button color=\"tertiary\" [routerLink]=\"['/tabs/mi-perfil/editprofile']\" >Editar perfil</ion-button>\n    </div>\n  \n    <div class=\"d-flex justify-content-center align-items-center\">\n      <h2  class=\"fs-6 text-center text-light\" [routerLink]=\"['/fotos']\" routerLinkActive=\"router-link-active\"  >{{fotos.length}} Publicaciones     </h2>\n      <hr>\n      <h2  class=\"fs-6 text-center ps-2 text-light \" style=\"cursor: pointer;\"> &nbsp; {{seguidores.length}} Seguidores </h2 >\n  \n      <h2 class=\"fs-6  text-center ps-2 text-light \"  style=\"cursor: pointer;\">&nbsp;{{siguiendo.length}} Seguidos</h2>          \n    </div>\n  \n  </div>\n   \n\n\n\n\n\n</ion-content>\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mi-perfil_mi-perfil_module_ts.js.map