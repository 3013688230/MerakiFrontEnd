import { Component, OnInit } from '@angular/core';
import { GestionClienteService } from 'src/app/services/gestion-cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.sass']
})
export class ListarClienteComponent implements OnInit {

  constructor(public gestionClienteService:GestionClienteService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.gestionClienteService.listarClientes();
  }
  llenarFormularioCliente(cliente:Cliente){
    this.gestionClienteService.formularioRegistroCliente.patchValue(cliente);
  }

  CambiarEstado(IdEstado: number, IdUsuario: string){
    this.gestionClienteService.EditarEstado(IdEstado, IdUsuario).subscribe(
      res=>{
        this.gestionClienteService.listarClientes();
        this.toastr.success('Se cambio el estado');
      },
      err=>{
        this.toastr.error('Error');
      }
    );
  }

}
