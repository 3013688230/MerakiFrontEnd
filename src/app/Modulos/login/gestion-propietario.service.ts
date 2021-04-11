import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Propietario } from './propietario';
import { ConfiguracionService } from './configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class GestionPropietarioService {

  constructor(private http: HttpClient, private configuracionService: ConfiguracionService, private formBuilder: FormBuilder,
  private toastr:ToastrService) { }

  propietario:Propietario;
  listarPropietario:Propietario[];
  filtroPropietario:'';

  formularioRegistroPropietarios = this.formBuilder.group({
    IdPropietario: [0],
    IdTipoDocumento: [""],
    IdGenero: [""],
    IdBarrio: [""],
    Nombre: ["", [Validators.required, Validators.pattern(this.configuracionService.exRegularLetras)]],
    Apellido: ["", [Validators.required, Validators.pattern(this.configuracionService.exRegularLetras)]],
    numeroDocumento:[0, [Validators.required,Validators.pattern(this.configuracionService.exRegularNumeros) , Validators.minLength(5), Validators.maxLength(15)]],
    Direccion:["", [Validators.required, Validators.maxLength(10)]],
    Celular:[0],
    Correo:["", [Validators.required, Validators.pattern(this.configuracionService.exRegularCorreo)]]
  })

  get Nombre(){
    return this.formularioRegistroPropietarios.controls["Nombre"];
  }

  get Apellido(){
    return this.formularioRegistroPropietarios.controls["Apellido"];
  }

  get IdTipoDocumento(){
    return this.formularioRegistroPropietarios.controls["IdTipoDocumento"];
  }

  get IdGenero(){
    return this.formularioRegistroPropietarios.controls["IdGenero"];
  }

  get IdBarrio(){
    return this.formularioRegistroPropietarios.controls["IdBarrio"];
  }

  get numeroDocumento(){
    return this.formularioRegistroPropietarios.controls["numeroDocumento"];
  }

  get Direccion(){
    return this.formularioRegistroPropietarios.controls["Direccion"];
  }

  get Celular(){
    return this.formularioRegistroPropietarios.controls["Celular"];
  }

  get Correo(){
    return this.formularioRegistroPropietarios.controls["Correo"];
  }




  guardarPropietario(){

    if(this.propietario.IdPropietario==null)
      this.propietario.IdPropietario=0;

    return this.http.post(this.configuracionService.rootURL + '/Propietarios', this.propietario);
  }

  editarPropietario(){
    console.log(this.propietario);
    return this.http.put(this.configuracionService.rootURL + '/propietarios/' + this.propietario.IdPropietario, this.propietario);
  }

  eliminarPropietario(id){
    return this.http.delete(this.configuracionService.rootURL + '/propietarios/' + id);
  }

  listarPropietarios(){
    this.http.get(this.configuracionService.rootURL + '/propietarios')
    .toPromise()
    .then(res=> this.listarPropietario = res as Propietario[])
  }
}
