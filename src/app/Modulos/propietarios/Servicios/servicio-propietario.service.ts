import { Propietario } from './../Interfaces/propietario';
import { Genero } from './../Interfaces/genero';
import { TipoDocumento } from './../Interfaces/tipo-documento';
import { FormGroup } from '@angular/forms';
import { DetallePropietario } from './../Interfaces/detalle-propietario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPropietarios } from '../Interfaces/list-propietarios';
import { Barrio } from '../Interfaces/barrio';

@Injectable({
  providedIn: 'root'
})
export class ServicioPropietarioService {

  readonly rootUrl = 'http://localhost:60382/api';
  listaPropitarios: ListPropietarios[];
  DetallePropietario: DetallePropietario;
  FormularioRegistro: FormGroup;
  TiposDocuentos: TipoDocumento[];
  Barrios: Barrio[];
  Genero: Genero[];
  Propietario: Propietario;
  SinPropietario: Propietario;
  constructor(private http: HttpClient) { }
  ListarPropitarios(){
    this.http.get(this.rootUrl + '/Propietarios')
    .toPromise()
    .then(res => this.listaPropitarios = res as ListPropietarios[]);
  }
  detallesPropitario(id: number){
    this.http.get(this.rootUrl + '/Propietarios/' + id)
    .toPromise()
    .then(res => this.DetallePropietario = res as DetallePropietario);
  }
  guardarEmpleado(){
    this.Propietario = this.FormularioRegistro.value;
    Number(this.Propietario.IdTipoDocumento);
    Number(this.Propietario.IdGenero);
    if (this.Propietario.IdPropietario == null) {
        this.Propietario.IdPropietario = 0;
    }
    console.log(this.Propietario);
    return this.http.post(this.rootUrl + '/Propietarios', this.Propietario);
  }
  EditarPropietario(){
    this.Propietario = this.FormularioRegistro.value;
    Number(this.Propietario.IdTipoDocumento);
    Number(this.Propietario.IdGenero);
    if (this.Propietario.IdPropietario == null) {
        this.Propietario.IdPropietario = 0;
    }
    console.log(this.Propietario);
    return this.http.put(this.rootUrl + '/Propietarios/' + this.Propietario.IdPropietario,this.Propietario);
  }
  ListaTipoDocumento(){
    this.http.get(this.rootUrl + '/Propietarios/ListaDocumento')
    .toPromise()
    .then(res => this.TiposDocuentos = res as TipoDocumento[]);
  }
  ListaBarrio(){
    this.http.get(this.rootUrl + '/Propietarios/ListaBarrio')
    .toPromise()
    .then(res => this.Barrios = res as Barrio[]);
  }
  ListaGenero(){
    this.http.get(this.rootUrl + '/Propietarios/ListaGenero')
    .toPromise()
    .then(res => this.Genero = res as Genero[]);
  }
  DetalleSinPropietario(id: number){
    this.http.get(this.rootUrl + '/Propietarios/DetallePropietario/' + id)
    .toPromise()
    .then(res => this.SinPropietario = res as Propietario);
  }
  EditarEstado(Idrol: string, IdUsuario){
     return this.http.put(this.rootUrl + '/Propietarios/EditarEstado/' + Idrol, IdUsuario);
  }
  obtenerPerfil(){
    return this.http.get(this.rootUrl + '/Usuarios/Perfil/Propietario');
   }
}
