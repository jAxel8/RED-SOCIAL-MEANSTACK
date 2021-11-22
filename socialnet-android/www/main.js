(self["webpackChunksocialnet"] = self["webpackChunksocialnet"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/registro/registro.component */ 43);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);






const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    },
    {
        path: 'registro',
        component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_1__.RegistroComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registro/registro.component */ 43);
/* harmony import */ var _components_fotos_show_foto_show_foto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/fotos/show-foto/show-foto.component */ 8988);
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/date-ago.pipe */ 742);
/* harmony import */ var _components_fotos_new_image_new_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fotos/new-image/new-image.component */ 5484);
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/perfil/perfil.component */ 673);
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ 9557);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_3__.RegistroComponent, _components_fotos_show_foto_show_foto_component__WEBPACK_IMPORTED_MODULE_4__.ShowFotoComponent, _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__.DateAgoPipe, _components_fotos_new_image_new_image_component__WEBPACK_IMPORTED_MODULE_6__.NewImageComponent, _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_7__.PerfilComponent, _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__.EditProfileComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot({ backButtonText: '', backButtonIcon: 'arrow-back-outline', hardwareBackButton: true }), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9557:
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": () => (/* binding */ EditProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-profile.component.html */ 7243);
/* harmony import */ var _edit_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.component.scss */ 9517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);








let EditProfileComponent = class EditProfileComponent {
    constructor(_userService, alertController, router) {
        this._userService = _userService;
        this.alertController = alertController;
        this.router = router;
        this.user = {};
        this.token = localStorage.getItem('token');
        this.identity = JSON.parse(localStorage.getItem('identity'));
    }
    ngOnInit() {
        this.obtener_usuario();
    }
    update(actualizarForm) {
        if (actualizarForm.valid) {
            if (this.profileImageFile) {
                this.load_response = true;
                if (this.load_response = true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        text: 'Actualizando....',
                        showConfirmButton: false,
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().showLoading();
                }
                const fd = new FormData();
                fd.append('imagenperfil', this.profileImageFile);
                fd.append('username', this.user.username);
                fd.append('password', this.user.password);
                fd.append('name', this.user.name);
                fd.append('surname', this.user.surname);
                fd.append('email', this.user.email);
                this._userService.actualizar_usuario(this.profileid, fd).subscribe(response => {
                    this.load_response = false;
                    this._userService.obtener_usuario(this.profileid, this.token).subscribe(response2 => {
                        this.user = response2.data;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().close();
                        localStorage.setItem('identity', JSON.stringify(this.user));
                        this.obtener_usuario();
                    });
                }, error => {
                    console.log(error);
                });
            }
            else {
                const fd = new FormData();
                fd.append('username', this.user.username);
                fd.append('password', this.user.password);
                fd.append('name', this.user.name);
                fd.append('surname', this.user.surname);
                fd.append('email', this.user.email);
                this._userService.actualizar_usuario(this.profileid, fd).subscribe(response => {
                    this.load_response = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().close();
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    this.presentAlert('Aviso', 'Sus datos han sido actualizados.');
                }, error => {
                    console.log(error);
                });
            }
        }
        else {
            this.presentAlert('Advertencia', 'Complete correctamente el formulario.');
        }
    }
    presentAlert(header, mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: mensaje,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    obtener_usuario() {
        this._userService.obtener_usuario(this.identity._id, this.token).subscribe(response => {
            this.user = response.data;
            this.imagePreview = this.user.profileImg;
            this.profileid = this.user._id;
        }, error => {
            console.log(error);
        });
    }
    subirImagen(file) {
        try {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
            this.profileImageFile = file;
        }
        catch (err) {
            console.log(err);
        }
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
EditProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProfileComponent);



/***/ }),

/***/ 5484:
/*!*******************************************************************!*\
  !*** ./src/app/components/fotos/new-image/new-image.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewImageComponent": () => (/* binding */ NewImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-image.component.html */ 9191);
/* harmony import */ var _new_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-image.component.scss */ 7533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/foto.service */ 7535);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ 3289);
/* harmony import */ var src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/GLOBAL */ 6874);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);










let NewImageComponent = class NewImageComponent {
    constructor(_fotoService, loadingController, _router) {
        this._fotoService = _fotoService;
        this.loadingController = loadingController;
        this._router = _router;
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__.io)(src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_5__.GLOBALSOCKET.url, { transports: ['websocket'], upgrade: false });
        this.token = localStorage.getItem('token');
        this.identity = JSON.parse(localStorage.getItem('identity'));
        this.nombre = '';
        this.descripcion = '';
        this.imagePreview = 'assets/img/default-img.png';
    }
    ngOnInit() {
    }
    subir_foto(fotoForm) {
        if (fotoForm.valid && this.ImageFile) {
            const fd = new FormData();
            fd.append('nombre', this.nombre);
            fd.append('descripcion', this.descripcion);
            fd.append('imagen', this.ImageFile);
            fd.append('user', this.identity._id);
            this.limpiarForm();
            this.load_response = true;
            this.presentLoading();
            this._fotoService.subir_foto(fd).subscribe(response => {
                this.loadingController.dismiss();
                this.load_response = false;
                this._router.navigate(['/tabs/mis-fotos/']);
                this.socket.emit('new-image', { data: response.data });
            }, error => {
                console.log(error);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: 'AVISO',
                icon: 'warning',
                text: 'Completa correctamente el formulario',
                confirmButtonText: 'De acuerdo'
            });
        }
    }
    subirImagen(file) {
        try {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
            this.ImageFile = file;
        }
        catch (err) {
            console.log(err);
        }
    }
    limpiarForm() {
        this.nombre = '';
        this.descripcion = '';
        this.imagePreview = 'assets/img/default-img.png';
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Subiendo...'
            });
            yield loading.present();
        });
    }
};
NewImageComponent.ctorParameters = () => [
    { type: src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__.FotosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
NewImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-new-image',
        template: _raw_loader_new_image_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_image_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewImageComponent);



/***/ }),

/***/ 8988:
/*!*******************************************************************!*\
  !*** ./src/app/components/fotos/show-foto/show-foto.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowFotoComponent": () => (/* binding */ ShowFotoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_show_foto_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-foto.component.html */ 1004);
/* harmony import */ var _show_foto_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-foto.component.scss */ 9287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comentario.service */ 9203);
/* harmony import */ var src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/foto.service */ 7535);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ 3289);
/* harmony import */ var src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/GLOBAL */ 6874);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);











let ShowFotoComponent = class ShowFotoComponent {
    constructor(_activatedRoute, _fotoService, _comentarioService, alertController) {
        this._activatedRoute = _activatedRoute;
        this._fotoService = _fotoService;
        this._comentarioService = _comentarioService;
        this.alertController = alertController;
        this.comentario = {};
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.io)(src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_6__.GLOBALSOCKET.url, { transports: ['websocket'], upgrade: false });
        this.foto = {};
        //Paginacion
        this.page = 1;
        this.pageSize = 10;
        this.token = localStorage.getItem('token');
        this.identity = JSON.parse(localStorage.getItem('identity'));
        _activatedRoute.params.subscribe(params => {
            this.FotoId = params['id'];
            this._fotoService.show_foto(this.FotoId, this.token).subscribe(response => {
                this.foto = response.data;
                console.log(this.foto);
            });
        });
    }
    ngOnInit() {
        this.socket.on('get-comments', (data) => {
            this.get_comentarios();
        });
        this.get_comentarios();
    }
    get_comentarios() {
        this._comentarioService.get_comentarios(this.FotoId, this.token).subscribe(response => {
            this.comentarios = response.data;
            console.log(this.comentarios);
        });
    }
    agregar_comentario() {
        if (this.comentario.comentario) {
            this.comentario.imagen_id = this.FotoId;
            this._comentarioService.agregar_comentario(this.comentario, this.token).subscribe(response => {
                this.socket.emit('comment-image');
                this.obtener_comentarios();
                this.comentario.comentario = '';
            }, error => {
                console.log(error);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                icon: 'warning',
                title: 'Error',
                text: 'Debes escribir un comentario!'
            });
        }
    }
    obtener_comentarios() {
        this._comentarioService.get_comentarios(this.FotoId, this.token).subscribe(response => {
            this.comentarios = response.data;
        });
    }
    eliminar_comentario(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmación',
                message: 'Quieres eliminar el comentario?',
                buttons: [
                    {
                        text: 'Si,eliminar',
                        handler: () => {
                            this._comentarioService.eliminar_comentario(id, this.token).subscribe(response => {
                                this.socket.emit('comment-image');
                                this.get_comentarios();
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
ShowFotoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_3__.FotosService },
    { type: src_app_services_comentario_service__WEBPACK_IMPORTED_MODULE_2__.ComentarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
ShowFotoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-show-foto',
        template: _raw_loader_show_foto_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_foto_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowFotoComponent);



/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 7104);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 2965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);







let LoginComponent = class LoginComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.token = localStorage.getItem('token');
    }
    ngOnInit() {
        if (this.token) {
            this._router.navigate(['/']);
        }
        else {
        }
    }
    login(loginForm) {
        if (loginForm.valid) {
            this._userService.login_user(this.username, this.password).subscribe(response => {
                this.identity = response.data;
                response.data.password = undefined;
                this._userService.mantener_sesion(response.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));
                this._router.navigate(['/']);
            }, error => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.error.message
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                icon: 'error',
                title: 'Error',
                text: 'Llene correctamente los campos'
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginComponent);



/***/ }),

/***/ 673:
/*!*******************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilComponent": () => (/* binding */ PerfilComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_perfil_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./perfil.component.html */ 820);
/* harmony import */ var _perfil_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.component.scss */ 9999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/foto.service */ 7535);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ 3289);
/* harmony import */ var src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/GLOBAL */ 6874);










let PerfilComponent = class PerfilComponent {
    constructor(_activatedRoute, _userService, _fotoService, router) {
        this._activatedRoute = _activatedRoute;
        this._userService = _userService;
        this._fotoService = _fotoService;
        this.router = router;
        this.user = {};
        this.fotos = [];
        this.seguidores = [];
        this.siguiendo = [];
        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.io)(src_app_services_GLOBAL__WEBPACK_IMPORTED_MODULE_6__.GLOBALSOCKET.url, { transports: ['websocket'], upgrade: false });
        this.url = router.url;
        this.token = localStorage.getItem('token');
        this.identity = JSON.parse(localStorage.getItem('identity'));
        this._activatedRoute.params.subscribe(params => {
            this.userid = params['id'];
            this._userService.obtener_usuario(this.userid, this.token).subscribe(response => {
                this.user = response.data;
                this.obtener_seguidores();
                this.obtener_siguiendo();
            }, error => {
                console.log(error);
            });
        });
    }
    ngOnInit() {
        this.socket.on('get-data', (data) => {
            this.get_fotos_user_id();
        });
        this.socket.on('get-comments', (data) => {
            this.get_fotos_user_id();
        });
        this.get_fotos_user_id();
        this.get_url_parts();
    }
    get_fotos_user_id() {
        this._fotoService.get_fotos_user_id(this.userid, this.token).subscribe(response => {
            this.fotos = response.data;
            this.likes = response.user_likes;
        }, error => {
            console.log(error);
        });
    }
    seguir_usuario() {
        this._userService.seguir_usuario(this.userid, this.token).subscribe(response => {
            this.obtener_seguidores();
        }, error => {
            console.log(error);
        });
    }
    obtener_seguidores() {
        this._userService.obtener_seguidores_user(this.userid, this.token).subscribe(response => {
            this.seguidores = response.follows;
            var isFollowing = this.seguidores.find(x => x.user._id == this.identity._id);
            if (isFollowing) {
                this.following = true;
            }
            else {
                this.following = false;
            }
        }, error => {
            console.log(error);
        });
    }
    obtener_siguiendo() {
        this._userService.obtener_siguiendo_user(this.userid, this.token).subscribe(response => {
            this.siguiendo = response.following;
            var followingyou = this.siguiendo.find(x => x.followed._id == this.identity._id);
            if (followingyou) {
                this.followyou = true;
            }
            else {
                this.followyou = false;
            }
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                icon: 'error',
                title: 'ERROR!',
                text: error.error.message
            });
        });
    }
    get_url_parts() {
        let parts = this.url.split('/');
        this.url_tab = parts[2];
    }
    go_to_comments(id) {
        this.router.navigate(['/tabs', this.url_tab, 'comentarios', id]);
    }
};
PerfilComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__.FotosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
PerfilComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-perfil',
        template: _raw_loader_perfil_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_perfil_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PerfilComponent);



/***/ }),

/***/ 43:
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroComponent": () => (/* binding */ RegistroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.component.html */ 8990);
/* harmony import */ var _registro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.component.scss */ 2926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);







let RegistroComponent = class RegistroComponent {
    constructor(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this.token = localStorage.getItem('token');
        this.imagePreview = 'assets/img/default-user.jpeg';
        this.username = '';
        this.name = '';
        this.surname = '';
        this.password = '';
        this.email = '';
    }
    ngOnInit() {
        if (this.token) {
            this.router.navigate(['/']);
        }
        else {
        }
    }
    registro(registroForm) {
        if (registroForm.valid) {
            const fd = new FormData();
            fd.append('profileImage', this.profileImageFile);
            fd.append('username', this.username);
            fd.append('password', this.password);
            fd.append('name', this.name);
            fd.append('surname', this.surname);
            fd.append('email', this.email);
            this._userService.registro_usuario(fd).subscribe(response => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    icon: 'success',
                    title: 'Te haz registrado con exito!',
                    showConfirmButton: true,
                });
                this.router.navigate(['/login']);
            }, error => {
                console.log(error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    icon: 'error',
                    text: error.error.message
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: 'Error!',
                text: 'Completa correctamente el formulario',
                icon: 'error',
                confirmButtonText: 'De acuerdo'
            });
        }
    }
    subirImagen(file) {
        try {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
            this.profileImageFile = file;
        }
        catch (err) {
            console.log(err);
        }
    }
};
RegistroComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
RegistroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroComponent);



/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3071);




let AuthGuard = class AuthGuard {
    constructor(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    canActivate() {
        if (this._userService.isauth()) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 742:
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Ahora';
            const intervals = {
                'año': 31536000,
                'mes': 2592000,
                'semana': 604800,
                'día': 86400,
                'hora': 3600,
                'minuto': 60,
                'segundo': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return 'Hace' + ' ' + counter + ' ' + i; // singular (1 day ago)
                    }
                    else {
                        return 'Hace' + ' ' + counter + ' ' + i + 's'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateAgo',
        pure: true
    })
], DateAgoPipe);



/***/ }),

/***/ 6874:
/*!************************************!*\
  !*** ./src/app/services/GLOBAL.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLOBAL": () => (/* binding */ GLOBAL),
/* harmony export */   "GLOBALSOCKET": () => (/* binding */ GLOBALSOCKET)
/* harmony export */ });
var GLOBAL = {
    url: 'https://backend-socialnet.herokuapp.com/api/',
};
var GLOBALSOCKET = {
    url: 'https://backend-socialnet.herokuapp.com'
};
//https://backend-socialnet.herokuapp.com/


/***/ }),

/***/ 9203:
/*!************************************************!*\
  !*** ./src/app/services/comentario.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioService": () => (/* binding */ ComentarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLOBAL */ 6874);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);




let ComentarioService = class ComentarioService {
    constructor(_http) {
        this._http = _http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.url;
        this.token = localStorage.getItem('token');
    }
    agregar_comentario(data, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.post(this.url + 'agregar_comentario/', data, { headers: headers });
    }
    get_comentarios(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'get_comentarios/' + id, { headers: headers });
    }
    eliminar_comentario(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.delete(this.url + 'delete_comment/' + id, { headers: headers });
    }
};
ComentarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ComentarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ComentarioService);



/***/ }),

/***/ 7535:
/*!******************************************!*\
  !*** ./src/app/services/foto.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosService": () => (/* binding */ FotosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLOBAL */ 6874);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);




let FotosService = class FotosService {
    constructor(_http) {
        this._http = _http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.url;
        this.token = localStorage.getItem('token');
    }
    subir_foto(data) {
        return this._http.post(this.url + 'subir_foto/', data);
    }
    obtener_fotos_user(token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + "obtener_fotos_user/", { headers: headers });
    }
    show_foto(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'show_foto/' + id, { headers: headers });
    }
    eliminar_foto(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.delete(this.url + 'eliminar_foto/' + id, { headers: headers });
    }
    get_fotos_home(token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'get_fotos/', { headers: headers });
    }
    get_fotos_user_id(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'get_fotos_user/' + id, { headers: headers });
    }
    buscar_fotos(termino, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'buscar_fotos/' + termino, { headers: headers });
    }
    //LIKES
    like_foto(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.post(this.url + 'like_imagen/', { id }, { headers: headers });
    }
    get_likes(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'get_likes/' + id, { headers: headers });
    }
};
FotosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
FotosService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FotosService);



/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _GLOBAL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLOBAL */ 6874);




let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.url = _GLOBAL__WEBPACK_IMPORTED_MODULE_0__.GLOBAL.url;
    }
    mantener_sesion(token) {
        this.token = token;
        localStorage.setItem('token', token);
    }
    get_identity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != undefined) {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }
    registro_usuario(data) {
        return this._http.post(this.url + 'registrar_usuario/', data);
    }
    actualizar_usuario(id, data) {
        return this._http.put(this.url + 'actualizar_usuario/' + id, data);
    }
    login_user(username, password) {
        return this._http.post(this.url + 'user_login/', { username, password });
    }
    obtener_usuario(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'obtener_usuario/' + id, { headers: headers });
    }
    seguir_usuario(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.post(this.url + 'seguir_usuario/', { id }, { headers: headers });
    }
    obtener_seguidores_user(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'obtener_seguidores/' + id, { headers: headers });
    }
    obtener_siguiendo_user(id, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'obtener_siguiendo/' + id, { headers: headers });
    }
    buscar_usuarios(termino, token) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.get(this.url + 'buscar_usuarios/' + termino, { headers: headers });
    }
    isauth() {
        return localStorage.getItem('token');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 9517:
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".img-fluid {\n  max-width: 100%;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 7533:
/*!*********************************************************************!*\
  !*** ./src/app/components/fotos/new-image/new-image.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 9287:
/*!*********************************************************************!*\
  !*** ./src/app/components/fotos/show-foto/show-foto.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWZvdG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 2965:
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 9999:
/*!*********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".image-center {\n  margin: 0 auto;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-card {\n  background-color: #242526;\n}\n\nion-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoicGVyZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNlbnRlcntcclxuICBtYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI1MjY7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 2926:
/*!*************************************************************!*\
  !*** ./src/app/components/registro/registro.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".img-fluid {\n  max-width: 100%;\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctZmx1aWR7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 7243:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-profile/edit-profile.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\" >\n      <ion-back-button class=\"text-light\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"text-light\">Actualizar datos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n  <form  #updateForm=\"ngForm\" (ngSubmit)=\"update(updateForm)\">\n\n    <div class=\"ion-text-center\">\n      <img width=\"150px\" height=\"200px\" class=\"img-fluid rounded-circle\" style=\"cursor: pointer;\" (click)=\"uploadImage.click()\" [src]=\"imagePreview\">\n    </div>\n\n  <ion-item class=\"text-light\" lines=\"full\">\n    <ion-label position=\"floating\">Nombre de usuario</ion-label>\n    <ion-input [(ngModel)]=\"user.username\" name='username' type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label class=\"text-light\" position=\"floating\">Nombres</ion-label>\n    <ion-input  class=\"text-light\"[(ngModel)]=\"user.name\" name='name' type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label class=\"text-light\" position=\"floating\">Apellidos</ion-label>\n    <ion-input class=\"text-light\" [(ngModel)]=\"user.surname\" name='surname' type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label class=\"text-light\" position=\"floating\">Email</ion-label>\n    <ion-input class=\"text-light\" [(ngModel)]=\"user.email\" name='email' type=\"text\" required></ion-input>\n  </ion-item>\n\n\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Actualizar</ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n\n</ion-content>\n\n\n<input type=\"file\" #uploadImage style=\"display: none;\" (change)=\"subirImagen($event.target.files[0])\" />\n\n");

/***/ }),

/***/ 9191:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fotos/new-image/new-image.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button  class=\"ms-2 text-light\" defaultHref='/home'></ion-back-button>\n    </ion-buttons>\n    <ion-text class=\"ms-3 text-light fw-bold\">Subir foto</ion-text>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n    <div class=\"container\">\n      <form #fotoForm=\"ngForm\" (ngSubmit)=\"subir_foto(fotoForm)\">\n        <div class=\"ion-text-center\">\n          <img class=\"mt-2 mb-2 img-fluid\" style=\"cursor: pointer;\" (click)=\"uploadImage.click()\" [src]=\"imagePreview\">\n        </div>\n        <ion-item lines=\"full\">\n          <ion-label class=\"text-light \" position=\"floating\">Titulo</ion-label>\n          <ion-input class=\"text-light \" [(ngModel)]=\"nombre\" name='nombre' type=\"text\" required></ion-input>\n        </ion-item>\n    \n        <ion-item lines=\"full\">\n          <ion-label class=\"text-light \" position=\"floating\">Descripción</ion-label>\n          <ion-input class=\"text-light\" [(ngModel)]=\"descripcion\" name='descripcion' type=\"text\" required></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Subir foto</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n    </div>\n  \n</ion-content>\n\n\n<input type=\"file\"  accept=\"image/*\"  #uploadImage style=\"display: none;\" (change)=\"subirImagen($event.target.files[0])\" />\n");

/***/ }),

/***/ 1004:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fotos/show-foto/show-foto.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button  class=\"ms-2 text-light\" defaultHref='/home' [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-text class=\"ms-3 text-light fw-bold\">Comentarios</ion-text>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]='true' >\n\n\n<ng-container >\n  <ion-list lines='none'>\n    <ion-item-sliding *ngFor=\"let item of comentarios\">\n      <ion-item >\n        <ion-avatar  item-left>\n          <img [src]=\"item.user_id.profileImg\"/>\n        </ion-avatar>\n        <ion-label  class=\"text-light ms-2\"> <ion-text class=\"fw-bold\">{{item.user_id.username}}</ion-text> {{item.comentario}}\n          <br><small style=\"color: #999999;\"> {{item.createdAt|dateAgo}} </small>\n        </ion-label>\n        \n\n      </ion-item>\n      <ion-item-options *ngIf=\"identity._id == item.user_id._id || identity._id == foto.user._id \" side=\"end\">\n        <ion-item-option (click)=\"eliminar_comentario(item._id)\" color='danger'>Eliminar</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n    \n</ng-container>\n\n\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar style=\"--background: #242526 !important;\">\n\n    <div class=\"ms-2 mt-3 d-flex justify-content-center\">\n      <ion-avatar style=\"max-height: 35px; max-width: 35px;\">\n        <img  src=\"{{identity.profileImg}}\">\n      </ion-avatar>\n      <ion-label class=\"ms-4 text-light fw-bold\"> <ion-input required [(ngModel)]=\"comentario.comentario\" name=\"comentario\" placeholder='Escribe un comentario...'></ion-input></ion-label>\n      <ion-icon class=\"ms-4 mt-2 text-light\"  (click)=\"agregar_comentario()\" name=\"send-outline\"></ion-icon>\n    </div>\n    \n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 7104:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"text-light\" >Bienvenido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n  <ion-item class=\"text-light\">\n    <ion-label position=\"floating\">Usuario</ion-label>\n    <ion-input name='username' [(ngModel)]=\"username\" type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item class=\"text-light\">\n    <ion-label position=\"floating\">Contraseña</ion-label>\n    <ion-input name='password' [(ngModel)]=\"password\" type=\"password\" required></ion-input>\n  </ion-item>\n\n  <ion-button class=\"ion-margin-top\" type=\"submit\" expand=\"block\" style=\"--background: #333539;\" >\n    Iniciar sesión\n  </ion-button>\n\n\n\n  <ion-button color=\"danger\" expand=\"block\" class=\"mt-3\" [routerLink]=\"['/registro']\">Crear una cuenta</ion-button>\n </form>\n</ion-content>");

/***/ }),

/***/ 820:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/perfil/perfil.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button  class=\"ms-2 text-light\" defaultHref='/home' [icon]=\"buttonIcon\"></ion-back-button>\n    </ion-buttons>\n    <ion-text class=\"ms-3 text-light fw-bold\">{{user.username}}</ion-text>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n    <ion-avatar class=\"image-center mt-2\" style=\"min-height: 150px; min-width: 150px;\">\n      <img src=\"{{user.profileImg}}\">\n    </ion-avatar>\n\n    <div class=\"ion-text-center\">\n      <h4 class=\"name mt-3 text-light \"> {{user.name + ' ' + user.surname}}   </h4>\n      <p class=\"nick text-light\"> {{'' + user.username}} </p>\n    </div>\n\n    <div class=\"ion-text-center mb-3\" *ngIf=\"identity._id != userid\">\n\n      <ion-button color=\"dark\" *ngIf=\"followyou\" >Te sigue</ion-button> \n      &nbsp;\n      <ion-button color=\"tertiary\" *ngIf=\"!following\" (click)=\"seguir_usuario()\" >SEGUIR</ion-button>\n      <ion-button  color=\"danger\" *ngIf=\"following\" (click)=\"seguir_usuario()\" >DEJAR DE SEGUIR</ion-button>\n    </div>\n\n    <div class=\"d-flex justify-content-center align-items-center\">\n      <h2  class=\"fs-6 text-center text-light \">{{fotos.length}} Publicaciones     </h2>\n      <hr>\n      <h2  class=\"fs-6 text-center ps-2 text-light \"  data-bs-toggle=\"modal\" data-bs-target='#seguidoresModal'  style=\"cursor: pointer;\"> &nbsp; {{seguidores.length}} Seguidores </h2 >\n\n      <h2 class=\"fs-6  text-center ps-2 text-light \" data-bs-toggle=\"modal\" data-bs-target='#siguiendoModal'  style=\"cursor: pointer;\">&nbsp;{{siguiendo.length}} Seguidos</h2>          \n    </div>\n\n     \n  <ng-container *ngIf=\"fotos.length != 0\" >\n\n    <div *ngFor=\"let item of fotos\"> \n  \n      <ion-card style=\"background-color: #242526;\" >\n  \n          <div class=\"ms-2 mt-3 mb-2 d-flex justify-content-start\">\n            <ion-avatar [routerLink]=\"['/perfil',item.user._id]\" style=\"max-height: 35px; max-width: 35px;\">\n              <img  src=\"{{item.user.profileImg}}\">\n            </ion-avatar>\n            <ion-label class=\"mt-2 mb-2 text-light fw-bold\"> &nbsp; {{item.user.username}}</ion-label>\n          </div>\n  \n        <img width=\"100%\" src=\"{{item.imagen}}\" alt=\"\">\n  \n        <ion-row class=\"cardfooter\">\n          <ion-col>\n                <div class=\"ms-1 mb-1 mt-1 d-flex justify-content-start\">\n                  <ion-icon (click)=\"like_imagen(item._id)\" name=\"heart\" color=\"danger\" *ngIf=\"likes.indexOf(item._id) >= 0\" ></ion-icon>\n                  <ion-icon (click)=\"like_imagen(item._id)\" class=\"text-light\"  name=\"heart-outline\" *ngIf=\"likes.indexOf(item._id)< 0\" ></ion-icon>                 \n                  <ion-icon class=\"text-light ms-3\"   [routerLink]=\"['/fotos',item._id]\" name=\"chatbubble-outline\"></ion-icon>\n                \n                </div>\n                <div *ngIf=\"item.likes != 0\" class=\"text-light fw-bold ms-2\">\n                  {{item.likes}} Me gusta \n                </div>\n                <div class=\"ms-2\">\n                 <a class=\"text-light fw-bold\" style=\"text-decoration: none;\">{{item.user.username}}</a> <ion-text class=\"text-light ms-1\">{{item.descripcion}}</ion-text>\n                </div>\n                <div *ngIf=\"item.comentarios != 0\" class=\"ms-2\">\n                  \n                  <a (click)=\"go_to_comments(item._id)\" style=\"text-decoration: none;color: #999999;\" >Ver los {{item.comentarios}} comentarios</a>\n                </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n     </div> \n  \n  </ng-container>\n\n\n\n\n</ion-content>\n\n\n\n");

/***/ }),

/***/ 8990:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro/registro.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" >\n      <ion-back-button class=\"text-light\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"text-light\" >Registrate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #registroForm=\"ngForm\" (ngSubmit)=\"registro(registroForm)\">\n\n      <div class=\"ion-text-center\">\n        <img class=\"img-fluid rounded-circle\" style=\"cursor: pointer;\" (click)=\"uploadImage.click()\" [src]=\"imagePreview\">\n      </div>\n\n    <ion-item  class=\"text-light\" lines=\"full\">\n      <ion-label position=\"floating\">Nombre de usuario</ion-label>\n      <ion-input [(ngModel)]=\"username\" name='username' type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item class=\"text-light\" lines=\"full\">\n      <ion-label position=\"floating\">Nombres</ion-label>\n      <ion-input [(ngModel)]=\"name\" name='name' type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item class=\"text-light\" lines=\"full\">\n      <ion-label position=\"floating\">Apellidos</ion-label>\n      <ion-input [(ngModel)]=\"surname\" name='surname' type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item class=\"text-light\" lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"email\" name='email' type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item class=\"text-light\" lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [(ngModel)]=\"password\" name='password' type=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"text-light\" type=\"submit\" color=\"danger\" expand=\"block\">Registrarse</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n\n\n<input type=\"file\" #uploadImage style=\"display: none;\" (change)=\"subirImagen($event.target.files[0])\" />");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map