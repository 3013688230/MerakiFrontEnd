import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionService } from './Modulos/login/configuracion.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RegistrarPropietarioComponent } from './Modulos/login/registrar-propietario/registrar-propietario.component';
import { GestionRegistroService } from './Modulos/login/gestion-registro.service';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioComponent } from './Modulos/login/usuario/usuario.component';
import { RegistroUsuarioComponent } from './Modulos/login/usuario/registro-usuario/registro-usuario.component';
import { LoginComponent } from './Modulos/login/usuario/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    BoardAdminComponent,
    RegistrarPropietarioComponent,
    UsuarioComponent,
    RegistroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    ToastrModule.forRoot()
  ],
  providers: [GestionRegistroService, ConfiguracionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
