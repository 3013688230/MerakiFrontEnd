import { CrearPropietarioComponent } from './Modulos/propietarios/crear-propietario/crear-propietario.component';
import { RegistroComponent } from './registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


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

    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'Listar'
      },
      {
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
