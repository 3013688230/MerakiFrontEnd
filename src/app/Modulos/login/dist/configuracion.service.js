"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfiguracionService = void 0;
var core_1 = require("@angular/core");
var ConfiguracionService = /** @class */ (function () {
    function ConfiguracionService() {
        this.exRegularLetras = "^[a-zA-Z ]*$";
        this.exRegularCorreo = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
        this.exRegularNumeros = "^[0-9]*$";
        this.exRegularPassword = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d*[$@#$!%*?&].{5,19}";
        this.exLetrasNumeros = "^[0-9a-zA-Z]+$";
        this.rootURL = "http://localhost:60382/api";
    }
    ConfiguracionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ConfiguracionService);
    return ConfiguracionService;
}());
exports.ConfiguracionService = ConfiguracionService;
