"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistrarPropietarioComponent = void 0;
var core_1 = require("@angular/core");
var RegistrarPropietarioComponent = /** @class */ (function () {
    function RegistrarPropietarioComponent(gestionPropietarioService, toastr) {
        this.gestionPropietarioService = gestionPropietarioService;
        this.toastr = toastr;
    }
    RegistrarPropietarioComponent.prototype.ngOnInit = function () {
    };
    RegistrarPropietarioComponent.prototype.resetearFormulario = function () {
        this.gestionPropietarioService.formularioRegistroPropietarios.reset();
    };
    RegistrarPropietarioComponent.prototype.onSubmit = function () {
        this.gestionPropietarioService.propietario = this.gestionPropietarioService.formularioRegistroPropietarios.value;
        if (this.gestionPropietarioService.propietario.IdPropietario == 0 || this.gestionPropietarioService.propietario.IdPropietario == null)
            this.guardarPropietario();
        //this.editarPropietario();
    };
    RegistrarPropietarioComponent.prototype.guardarPropietario = function () {
        var _this = this;
        this.gestionPropietarioService.guardarPropietario().subscribe(function (res) {
            _this.gestionPropietarioService.formularioRegistroPropietarios.reset();
            _this.toastr.info("Se actualizaron datos de Propietario", "Actualizar Propietario");
            _this.gestionPropietarioService.listarPropietarios();
        }, function (err) {
            console.log(err);
            _this.toastr.error("Error");
        });
    };
    RegistrarPropietarioComponent = __decorate([
        core_1.Component({
            selector: 'app-registrar-propietario',
            templateUrl: './registrar-propietario.component.html',
            styleUrls: ['./registrar-propietario.component.sass']
        })
    ], RegistrarPropietarioComponent);
    return RegistrarPropietarioComponent;
}());
exports.RegistrarPropietarioComponent = RegistrarPropietarioComponent;
