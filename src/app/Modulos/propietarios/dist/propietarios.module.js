"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PropietariosModule = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var listar_propitarios_component_1 = require("./listar-propitarios/listar-propitarios.component");
var detallpropitario_component_1 = require("./detallpropitario/detallpropitario.component");
var angular_datatables_1 = require("angular-datatables");
var paginate_pipe_1 = require("./Pipes/paginate.pipe");
var paginator_1 = require("@angular/material/paginator");
var paginator_es_1 = require("./paginator-es");
var card_1 = require("@angular/material/card");
var crear_propietario_component_1 = require("./crear-propietario/crear-propietario.component");
var forms_1 = require("@angular/forms");
var editar_propietario_component_1 = require("./editar-propietario/editar-propietario.component");
var verperfil_component_1 = require("./verperfil/verperfil.component");
var auth_interceptor_service_1 = require("src/app/_ayudas/auth.interceptor.service");
var PropietariosModule = /** @class */ (function () {
    function PropietariosModule() {
    }
    PropietariosModule = __decorate([
        core_1.NgModule({
            // tslint:disable-next-line: max-line-length
            declarations: [listar_propitarios_component_1.ListarPropitariosComponent, detallpropitario_component_1.DetallpropitarioComponent, paginate_pipe_1.PaginatePipe, crear_propietario_component_1.CrearPropietarioComponent, editar_propietario_component_1.EditarPropietarioComponent, verperfil_component_1.VerperfilComponent],
            imports: [
                common_1.CommonModule,
                angular_datatables_1.DataTablesModule,
                paginator_1.MatPaginatorModule,
                card_1.MatCardModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule
            ],
            exports: [
                listar_propitarios_component_1.ListarPropitariosComponent
            ],
            providers: [
                {
                    provide: paginator_1.MatPaginatorIntl,
                    useClass: paginator_es_1.CustomMatPaginatorIntl
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_service_1.AuthInterceptorService,
                    multi: true
                }
            ]
        })
    ], PropietariosModule);
    return PropietariosModule;
}());
exports.PropietariosModule = PropietariosModule;
