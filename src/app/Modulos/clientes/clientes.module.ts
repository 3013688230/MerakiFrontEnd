import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    RegistrarClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    ToastrModule.forRoot()
  ],
  exports: [
    RegistrarClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent
  ]
})
export class ClientesModule { }
