"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var registrar_propietario_component_1 = require("./registrar-propietario/registrar-propietario.component");
var forms_1 = require("@angular/forms");
var usuario_component_1 = require("./usuario/usuario.component");
var login_component_1 = require("./usuario/login/login.component");
var registro_usuario_component_1 = require("./usuario/registro-usuario/registro-usuario.component");
var homelh_component_1 = require("./homelh/homelh.component");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [registrar_propietario_component_1.RegistrarPropietarioComponent, usuario_component_1.UsuarioComponent, login_component_1.LoginComponent, registro_usuario_component_1.RegistroUsuarioComponent, homelh_component_1.HomelhComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
