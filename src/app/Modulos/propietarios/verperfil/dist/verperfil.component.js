"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VerperfilComponent = void 0;
var core_1 = require("@angular/core");
var VerperfilComponent = /** @class */ (function () {
    function VerperfilComponent(router, servicioPropitario) {
        this.router = router;
        this.servicioPropitario = servicioPropitario;
    }
    // tslint:disable-next-line: typedef
    VerperfilComponent.prototype.cerrarSesion = function () {
        localStorage.removeItem('token');
        this.router.navigateByUrl('usuario/login');
    };
    VerperfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioPropitario.obtenerPerfil().subscribe(function (res) {
            _this.perfilUsuario = res;
        }, function (err) {
            console.log(err);
        });
    };
    VerperfilComponent = __decorate([
        core_1.Component({
            selector: 'app-verperfil',
            templateUrl: './verperfil.component.html',
            styleUrls: ['./verperfil.component.sass']
        })
    ], VerperfilComponent);
    return VerperfilComponent;
}());
exports.VerperfilComponent = VerperfilComponent;
