"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicioPropietarioService = void 0;
var core_1 = require("@angular/core");
var ServicioPropietarioService = /** @class */ (function () {
    function ServicioPropietarioService(http) {
        this.http = http;
        this.rootUrl = 'http://localhost:60382/api';
    }
    ServicioPropietarioService.prototype.ListarPropitarios = function () {
        var _this = this;
        this.http.get(this.rootUrl + '/Propietarios')
            .toPromise()
            .then(function (res) { return _this.listaPropitarios = res; });
    };
    ServicioPropietarioService.prototype.detallesPropitario = function (id) {
        var _this = this;
        this.http.get(this.rootUrl + '/Propietarios/' + id)
            .toPromise()
            .then(function (res) { return _this.DetallePropietario = res; });
    };
    ServicioPropietarioService.prototype.guardarEmpleado = function () {
        this.Propietario = this.FormularioRegistro.value;
        Number(this.Propietario.IdTipoDocumento);
        Number(this.Propietario.IdGenero);
        if (this.Propietario.IdPropietario == null) {
            this.Propietario.IdPropietario = 0;
        }
        console.log(this.Propietario);
        return this.http.post(this.rootUrl + '/Propietarios', this.Propietario);
    };
    ServicioPropietarioService.prototype.EditarPropietario = function () {
        this.Propietario = this.FormularioRegistro.value;
        Number(this.Propietario.IdTipoDocumento);
        Number(this.Propietario.IdGenero);
        if (this.Propietario.IdPropietario == null) {
            this.Propietario.IdPropietario = 0;
        }
        console.log(this.Propietario);
        return this.http.put(this.rootUrl + '/Propietarios/' + this.Propietario.IdPropietario, this.Propietario);
    };
    ServicioPropietarioService.prototype.ListaTipoDocumento = function () {
        var _this = this;
        this.http.get(this.rootUrl + '/Propietarios/ListaDocumento')
            .toPromise()
            .then(function (res) { return _this.TiposDocuentos = res; });
    };
    ServicioPropietarioService.prototype.ListaBarrio = function () {
        var _this = this;
        this.http.get(this.rootUrl + '/Propietarios/ListaBarrio')
            .toPromise()
            .then(function (res) { return _this.Barrios = res; });
    };
    ServicioPropietarioService.prototype.ListaGenero = function () {
        var _this = this;
        this.http.get(this.rootUrl + '/Propietarios/ListaGenero')
            .toPromise()
            .then(function (res) { return _this.Genero = res; });
    };
    ServicioPropietarioService.prototype.DetalleSinPropietario = function (id) {
        var _this = this;
        this.http.get(this.rootUrl + '/Propietarios/DetallePropietario/' + id)
            .toPromise()
            .then(function (res) { return _this.SinPropietario = res; });
    };
    ServicioPropietarioService.prototype.EditarEstado = function (Idrol, IdUsuario) {
        return this.http.put(this.rootUrl + '/Propietarios/EditarEstado/' + Idrol, IdUsuario);
    };
    ServicioPropietarioService.prototype.obtenerPerfil = function () {
        return this.http.get(this.rootUrl + '/Usuarios/Perfil/Propietario');
    };
    ServicioPropietarioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServicioPropietarioService);
    return ServicioPropietarioService;
}());
exports.ServicioPropietarioService = ServicioPropietarioService;
