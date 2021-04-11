import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarPropietarioComponent } from './registrar-propietario/registrar-propietario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario/registro-usuario.component';
import { HomeComponent } from './home/home.component';
import { HomelhComponent } from './homelh/homelh.component';



@NgModule({
  declarations: [RegistrarPropietarioComponent, UsuarioComponent, LoginComponent, RegistroUsuarioComponent, HomeComponent, HomelhComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
