"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var crear_propietario_component_1 = require("./Modulos/propietarios/crear-propietario/crear-propietario.component");
var registro_component_1 = require("./registro/registro.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var listar_propitarios_component_1 = require("./Modulos/propietarios/listar-propitarios/listar-propitarios.component");
var detallpropitario_component_1 = require("./Modulos/propietarios/detallpropitario/detallpropitario.component");
var editar_propietario_component_1 = require("./Modulos/propietarios/editar-propietario/editar-propietario.component");
var registrar_propietario_component_1 = require("./Modulos/login/registrar-propietario/registrar-propietario.component");
var usuario_component_1 = require("./Modulos/login/usuario/usuario.component");
var registro_usuario_component_1 = require("./Modulos/login/usuario/registro-usuario/registro-usuario.component");
var login_component_1 = require("./Modulos/login/usuario/login/login.component");
var homelh_component_1 = require("./Modulos/login/homelh/homelh.component");
var verperfil_component_1 = require("./Modulos/propietarios/verperfil/verperfil.component");
var routes = [
    { path: '', redirectTo: 'usuario/login', pathMatch: 'full' },
    { path: 'usuario', component: usuario_component_1.UsuarioComponent,
        children: [
            { path: 'registro', component: registro_usuario_component_1.RegistroUsuarioComponent },
            { path: 'login', component: login_component_1.LoginComponent }
        ]
    },
    { path: 'homelh', component: homelh_component_1.HomelhComponent, canActivate: [] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'propietario', component: registrar_propietario_component_1.RegistrarPropietarioComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'registro', component: registro_component_1.RegistroComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'propietarios',
        children: [
            {
                path: '',
                pathMatch: 'prefix',
                redirectTo: 'Listar'
            },
            {
                path: 'Listar',
                component: listar_propitarios_component_1.ListarPropitariosComponent
            },
            {
                path: 'Detalle/:variable',
                component: detallpropitario_component_1.DetallpropitarioComponent
            },
            {
                path: 'Crear',
                component: crear_propietario_component_1.CrearPropietarioComponent
            },
            {
                path: 'Editar/:variable',
                component: editar_propietario_component_1.EditarPropietarioComponent
            },
            {
                path: 'VerPerfil',
                component: verperfil_component_1.VerperfilComponent,
                canActivate: []
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
