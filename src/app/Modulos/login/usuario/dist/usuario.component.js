"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuarioComponent = void 0;
var core_1 = require("@angular/core");
var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(usuarioService, toastr) {
        this.usuarioService = usuarioService;
        this.toastr = toastr;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sw = 0;
        this.usuarioService.registrarUsuario().subscribe(function (respuesta) {
            if (respuesta.Succeeded) {
                _this.usuarioService.formularioRegistroUsuario.reset();
                _this.toastr.success("Usuario creado exitosamente");
                _this.sw = 1;
            }
            else {
                respuesta.Errors.forEach(function (element) {
                    switch (element.Code) {
                        case 'DuplicateUserName':
                            _this.toastr.error("El nombre de usario ya existe", "Registro fallido");
                            _this.sw = 1;
                            break;
                        case 'DuplicateEmail':
                            _this.toastr.error("El email ya existe", "Registro fallido");
                            _this.sw = 1;
                        default:
                            if (_this.sw == 0)
                                _this.toastr.error(element.Description, "Registro fallido");
                            break;
                    }
                });
            }
        });
    };
    UsuarioComponent = __decorate([
        core_1.Component({
            selector: 'app-usuario',
            templateUrl: './usuario.component.html',
            styleUrls: ['./usuario.component.sass']
        })
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
