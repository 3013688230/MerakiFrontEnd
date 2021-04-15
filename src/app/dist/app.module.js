"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var auth_interceptor_1 = require("./Components/auth/auth.interceptor");
var propietarios_module_1 = require("./Modulos/propietarios/propietarios.module");
var configuracion_service_1 = require("./Modulos/login/configuracion.service");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var nav_component_1 = require("./nav/nav.component");
var layout_1 = require("@angular/cdk/layout");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var home_component_1 = require("./home/home.component");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var menu_1 = require("@angular/material/menu");
var input_1 = require("@angular/material/input");
var forms_1 = require("@angular/forms");
//import { LoginComponent } from './login/login.component';
var form_field_1 = require("@angular/material/form-field");
var registro_component_1 = require("./registro/registro.component");
var perfil_component_1 = require("./perfil/perfil.component");
var board_admin_component_1 = require("./board-admin/board-admin.component");
var registrar_propietario_component_1 = require("./Modulos/login/registrar-propietario/registrar-propietario.component");
var gestion_registro_service_1 = require("./Modulos/login/gestion-registro.service");
var ngx_toastr_1 = require("ngx-toastr");
var usuario_component_1 = require("./Modulos/login/usuario/usuario.component");
var registro_usuario_component_1 = require("./Modulos/login/usuario/registro-usuario/registro-usuario.component");
var login_component_1 = require("./Modulos/login/usuario/login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                registro_component_1.RegistroComponent,
                perfil_component_1.PerfilComponent,
                board_admin_component_1.BoardAdminComponent,
                registrar_propietario_component_1.RegistrarPropietarioComponent,
                usuario_component_1.UsuarioComponent,
                registro_usuario_component_1.RegistroUsuarioComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                layout_1.LayoutModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                menu_1.MatMenuModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                form_field_1.MatFormFieldModule,
                propietarios_module_1.PropietariosModule,
                ngx_toastr_1.ToastrModule.forRoot()
            ],
            providers: [gestion_registro_service_1.GestionRegistroService, configuracion_service_1.ConfiguracionService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
