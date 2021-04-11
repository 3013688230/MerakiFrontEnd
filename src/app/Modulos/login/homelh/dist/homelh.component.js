"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomelhComponent = void 0;
var core_1 = require("@angular/core");
var HomelhComponent = /** @class */ (function () {
    function HomelhComponent(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    HomelhComponent.prototype.cerrarSesion = function () {
        localStorage.removeItem('token');
        this.router.navigateByUrl('usuario/login');
    };
    HomelhComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.obtenerPerfil().subscribe(function (res) {
            _this.perfilUsuario = res;
        }, function (err) {
            console.log(err);
        });
    };
    HomelhComponent = __decorate([
        core_1.Component({
            selector: 'app-homelh',
            templateUrl: './homelh.component.html',
            styleUrls: ['./homelh.component.sass']
        })
    ], HomelhComponent);
    return HomelhComponent;
}());
exports.HomelhComponent = HomelhComponent;
