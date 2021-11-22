(self["webpackChunksocialnet"] = self["webpackChunksocialnet"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/edit-profile/edit-profile.component */ 9557);
/* harmony import */ var _components_fotos_new_image_new_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/fotos/new-image/new-image.component */ 5484);
/* harmony import */ var _components_fotos_show_foto_show_foto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fotos/show-foto/show-foto.component */ 8988);
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/perfil/perfil.component */ 673);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/auth.guard */ 5107);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ 7942);









const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_5__.TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule),
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    }, {
                        path: 'perfil/:id',
                        component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__.PerfilComponent,
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    },
                    {
                        path: 'comentarios/:id',
                        component: _components_fotos_show_foto_show_foto_component__WEBPACK_IMPORTED_MODULE_2__.ShowFotoComponent,
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    }
                ]
            },
            {
                path: 'buscar',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_buscar_buscar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../buscar/buscar.module */ 2540)).then(m => m.BuscarPageModule),
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    },
                    {
                        path: 'comentarios/:id',
                        component: _components_fotos_show_foto_show_foto_component__WEBPACK_IMPORTED_MODULE_2__.ShowFotoComponent,
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    },
                    {
                        path: 'perfil/:id',
                        component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__.PerfilComponent,
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    }
                ]
            },
            {
                path: 'mis-fotos',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_misfotos_misfotos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../misfotos/misfotos.module */ 2037)).then(m => m.MisfotosPageModule),
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    },
                    {
                        path: 'comentarios/:id',
                        component: _components_fotos_show_foto_show_foto_component__WEBPACK_IMPORTED_MODULE_2__.ShowFotoComponent,
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    },
                    {
                        path: 'new-foto',
                        component: _components_fotos_new_image_new_image_component__WEBPACK_IMPORTED_MODULE_1__.NewImageComponent,
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    }
                ]
            },
            {
                path: 'mi-perfil',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mi-perfil_mi-perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../mi-perfil/mi-perfil.module */ 3423)).then(m => m.MiPerfilPageModule),
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    },
                    {
                        path: 'editprofile',
                        component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_0__.EditProfileComponent,
                        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 7665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 4427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 3071);





let TabsPage = class TabsPage {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.identity = this.userService.get_identity();
    }
    ngDoCheck() {
        this.identity = this.userService.get_identity();
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 4427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-avatar {\n  max-height: 26px;\n  max-width: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFye1xyXG4gICAgbWF4LWhlaWdodDogMjZweDtcclxuICAgIG1heC13aWR0aDoyNnB4O1xyXG59Il19 */");

/***/ }),

/***/ 7665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs >\n\n  <ion-tab-bar slot=\"bottom\" style=\"--background: black;\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"buscar\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"mis-fotos\">\n      <ion-icon name=\"images\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"mi-perfil\">\n      <ion-avatar>\n        <img src=\"{{identity.profileImg}}\">\n      </ion-avatar>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map