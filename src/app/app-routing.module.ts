import { RegistroComponent } from './registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrarPropietarioComponent } from './Modulos/login/registrar-propietario/registrar-propietario.component';
import { UsuarioComponent } from './Modulos/login/usuario/usuario.component';
import { RegistroUsuarioComponent } from './Modulos/login/usuario/registro-usuario/registro-usuario.component';
import { LoginComponent } from './Modulos/login/usuario/login/login.component';
import { HomelhComponent } from './Modulos/login/homelh/homelh.component';


const routes: Routes = [

  {path:'',redirectTo:'usuario/login',pathMatch:'full'},

  {path: 'usuario', component: UsuarioComponent,
    children: [
      { path: 'registro', component: RegistroUsuarioComponent },
      { path: 'login', component: LoginComponent }
    ]
  },

  {path:'homelh', component:HomelhComponent, canActivate:[]},


  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'propietario', component: RegistrarPropietarioComponent},
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
