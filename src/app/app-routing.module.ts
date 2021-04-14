import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrarClienteComponent } from './Modulos/clientes/registrar-cliente/registrar-cliente.component';
import { ListarClienteComponent } from './Modulos/clientes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './Modulos/clientes/editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './Modulos/clientes/detalle-cliente/detalle-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'clientes',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'Listar'
      },
      {
        path: 'Listar',
        component: ListarClienteComponent
      },
      {
        path: 'Crear',
        component: RegistrarClienteComponent
      },
      {
        path: 'Editar/:variable',
        component: EditarClienteComponent
      },
      {
        path: 'Detalle/:variable',
        component: DetalleClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
