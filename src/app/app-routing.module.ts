import { CrearPropietarioComponent } from './Modulos/propietarios/crear-propietario/crear-propietario.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarPropitariosComponent } from './Modulos/propietarios/listar-propitarios/listar-propitarios.component';
import { DetallpropitarioComponent } from './Modulos/propietarios/detallpropitario/detallpropitario.component';
import { EditarPropietarioComponent } from './Modulos/propietarios/editar-propietario/editar-propietario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
