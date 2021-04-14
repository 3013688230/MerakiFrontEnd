import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Tipodocumento } from '../models/tipodocumento';
import { Genero } from '../models/genero';
import { DetalleCliente} from '../models/DetalleCliente';

@Injectable({
  providedIn: 'root'
})
export class GestionClienteService {

  readonly rootURL= "http://localhost:60382/api";

  formularioRegistroCliente: FormGroup;
  cliente:Cliente;
  listaClientes:Cliente[];
  DetalleCliente:DetalleCliente;
  tipoDocumento:Tipodocumento[];
  genero:Genero[];
  SinCliente:Cliente;

  constructor(private http:HttpClient) { }

  guardarCliente() {
    this.cliente = this.formularioRegistroCliente.value;
    Number(this.cliente.IdTipoDocumento);
    Number(this.cliente.IdGenero);
    Number(this.cliente.Celular);
    Number(this.cliente.NumeroDocumento);
    if(this.cliente.IdCliente==null)
      this.cliente.IdCliente=0;
      console.log(this.cliente);

      return this.http.post(this.rootURL + '/clientes', this.cliente);
  }

  detallesCliente(id: number){
    this.http.get(this.rootURL + '/clientes/' + id)
    .toPromise()
    .then(res=> this.DetalleCliente = res as DetalleCliente);
  }

  listarClientes() {
    this.http.get(this.rootURL + '/clientes')
    .toPromise()
    .then(res=> this.listaClientes = res as Cliente[])
  }
  EditarCliente(){
    this.cliente = this.formularioRegistroCliente.value;
    Number(this.cliente.IdTipoDocumento);
    Number(this.cliente.IdGenero);
    Number(this.cliente.Celular);
    Number(this.cliente.NumeroDocumento);
    if (this.cliente.IdCliente == null){
      this.cliente.IdCliente = 0;
    }
    console.log(this.cliente);
    return this.http.put(this.rootURL + '/clientes/' + this.cliente.IdCliente,this.cliente);
  }
  DetallesSinCliente(id: number){
    this.http.get(this.rootURL + '/clientes/DetalleCliente/' + id)
    .toPromise()
    .then(res => this.SinCliente = res as Cliente);
  }

  ListaTipoDocumento(){
    this.http.get(this.rootURL + '/clientes/ListaDocumento')
    .toPromise()
    .then(res => this.tipoDocumento = res as Tipodocumento[]);
  }
  ListaGenero(){
    this.http.get(this.rootURL + '/clientes/ListaGenero')
    .toPromise()
    .then(res => this.genero = res as Genero[]);
  }
  EditarEstado(IdEstado: number, IdUsuario){
    return this.http.put(this.rootURL + '/clientes/EditarEstado/' + IdEstado, IdUsuario);
  }

}
