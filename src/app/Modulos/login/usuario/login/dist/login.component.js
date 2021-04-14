"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(usuarioService, router, toastr) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('homelh');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usuarioService.login().subscribe(function (res) {
            localStorage.setItem('token', res.token);
            _this.router.navigateByUrl('home');
        }, function (error) {
            if (error.status == 400) {
                _this.toastr.error('Nombre de usuario o contraseña incorrectos');
            }
            else {
                console.log(error);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
