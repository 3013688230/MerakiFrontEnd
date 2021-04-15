import { CrearPropietarioComponent } from './Modulos/propietarios/crear-propietario/crear-propietario.component';
import { RegistroComponent } from './registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarPropitariosComponent } from './Modulos/propietarios/listar-propitarios/listar-propitarios.component';
import { DetallpropitarioComponent } from './Modulos/propietarios/detallpropitario/detallpropitario.component';
import { EditarPropietarioComponent } from './Modulos/propietarios/editar-propietario/editar-propietario.component';
import { RegistrarPropietarioComponent } from './Modulos/login/registrar-propietario/registrar-propietario.component';
import { UsuarioComponent } from './Modulos/login/usuario/usuario.component';
import { RegistroUsuarioComponent } from './Modulos/login/usuario/registro-usuario/registro-usuario.component';
import { LoginComponent } from './Modulos/login/usuario/login/login.component';
import { HomelhComponent } from './Modulos/login/homelh/homelh.component';
import { VerperfilComponent } from './Modulos/propietarios/verperfil/verperfil.component';
import { PropietarioauthGuard } from './Components/auth/propietarioauth.guard';

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
  { path: 'login', component: LoginComponent},
  { path: 'propietarios',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'Listar'
      },
      {
        path: 'Listar',
        component : ListarPropitariosComponent
      },
      {
        path: 'Detalle/:variable',
        component : DetallpropitarioComponent
      },
      {
        path: 'Crear',
        component: CrearPropietarioComponent
      },
      {
        path: 'Editar/:variable',
        component: EditarPropietarioComponent
      },
      {
        path: 'ver',
        component: VerperfilComponent,
        canActivate: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
