import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicioPropietarioService } from './Servicios/servicio-propietario.service';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ListarPropitariosComponent } from './listar-propitarios/listar-propitarios.component';
import { DetallpropitarioComponent } from './detallpropitario/detallpropitario.component';
import {DataTablesModule} from 'angular-datatables';
import { PaginatePipe } from './Pipes/paginate.pipe';
import {  MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './paginator-es';
import {MatCardModule} from '@angular/material/card';
import { CrearPropietarioComponent } from './crear-propietario/crear-propietario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarPropietarioComponent } from './editar-propietario/editar-propietario.component';
import { VerperfilComponent } from './verperfil/verperfil.component';
import { AuthInterceptorService } from 'src/app/_ayudas/auth.interceptor.service';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ListarPropitariosComponent, DetallpropitarioComponent, PaginatePipe, CrearPropietarioComponent, EditarPropietarioComponent, VerperfilComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    ListarPropitariosComponent
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class PropietariosModule { }
