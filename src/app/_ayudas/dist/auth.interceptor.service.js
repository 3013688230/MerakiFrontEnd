"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.authInterceptorProviders = exports.AuthInterceptorService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var TOKEN_HEADER_KEY = 'x-access-token';
var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(token) {
        this.token = token;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Conector ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptorService = __decorate([
        core_1.Injectable()
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());
exports.AuthInterceptorService = AuthInterceptorService;
exports.authInterceptorProviders = [
    { provide: http_1.HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
];
