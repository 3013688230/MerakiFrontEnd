"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuarioService = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http, configuracion, formBuilder) {
        this.http = http;
        this.configuracion = configuracion;
        this.formBuilder = formBuilder;
        this.formularioRegistroUsuario = this.formBuilder.group({
            NombreUsuario: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(20), forms_1.Validators.pattern(this.configuracion.exLetrasNumeros)]],
            Email: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(40), forms_1.Validators.pattern(this.configuracion.exRegularCorreo)]],
            Nombre: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(40), forms_1.Validators.pattern(this.configuracion.exRegularLetras)]],
            IdEstado: ["", [forms_1.Validators.required]],
            IdRol: ["", [forms_1.Validators.required]],
            IdUsuario: ["", [forms_1.Validators.required]],
            Password: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(20), forms_1.Validators.pattern(this.configuracion.exRegularPassword)]],
            ConfirmarPassword: ["", [forms_1.Validators.required]]
        }, { validator: this.compararPasswords.bind(this) });
        this.formularioLogin = this.formBuilder.group({
            NombreUsuario: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(20), forms_1.Validators.pattern(this.configuracion.exLetrasNumeros)]],
            Password: ["", [forms_1.Validators.required, forms_1.Validators.maxLength(20)]]
        });
    }
    Object.defineProperty(UsuarioService.prototype, "NombreUsuarioLogin", {
        get: function () {
            return this.formularioLogin.controls["NombreUsuario"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "PasswordLogin", {
        get: function () {
            return this.formularioLogin.controls["Password"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "Email", {
        get: function () {
            return this.formularioRegistroUsuario.controls["Email"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "Nombre", {
        get: function () {
            return this.formularioRegistroUsuario.controls["Nombre"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "NombreUsuario", {
        get: function () {
            return this.formularioRegistroUsuario.controls["NombreUsuario"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "IdUsuario", {
        get: function () {
            return this.formularioRegistroUsuario.controls["IdUsuario"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "IdEstado", {
        get: function () {
            return this.formularioRegistroUsuario.controls["IdEstado"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "IdRol", {
        get: function () {
            return this.formularioRegistroUsuario.controls["IdRol"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "Password", {
        get: function () {
            return this.formularioRegistroUsuario.controls["Password"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioService.prototype, "ConfirmarPassword", {
        get: function () {
            return this.formularioRegistroUsuario.controls["ConfirmarPassword"];
        },
        enumerable: false,
        configurable: true
    });
    UsuarioService.prototype.compararPasswords = function (formGroup) {
        var password = formGroup.get('Password');
        var confirmarPassword = formGroup.get('ConfirmarPassword');
        if (confirmarPassword.errors == null || 'passwordsDiferentes' in confirmarPassword)
            if (password.value != confirmarPassword.value) {
                confirmarPassword.setErrors({ passwordsDiferentes: true });
            }
            else {
                confirmarPassword.setErrors(null);
            }
    };
    UsuarioService.prototype.registrarUsuario = function () {
        this.usuario = this.formularioRegistroUsuario.value;
        delete this.usuario['ConfirmarPassword'];
        return this.http.post(this.configuracion.rootURL + '/Usuarios/Registro', this.usuario);
    };
    UsuarioService.prototype.login = function () {
        this.usuario = this.formularioLogin.value;
        delete this.usuario['ID_USUARIO'];
        delete this.usuario['Email'];
        delete this.usuario['Nombre'];
        return this.http.post(this.configuracion.rootURL + '/Usuarios/Login', this.usuario);
    };
    UsuarioService.prototype.obtenerPerfil = function () {
        return this.http.get(this.configuracion.rootURL + '/Usuarios/Perfil');
    };
    UsuarioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
