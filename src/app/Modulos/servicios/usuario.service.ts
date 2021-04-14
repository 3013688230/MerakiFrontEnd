import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfiguracionService } from '../login/configuracion.service';
import { Usuario } from '../login/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient, private configuracion:ConfiguracionService, private formBuilder:FormBuilder) { }

  usuario:Usuario;

  formularioRegistroUsuario = this.formBuilder.group({
    NombreUsuario:["", [Validators.required,Validators.maxLength(20), Validators.pattern(this.configuracion.exLetrasNumeros)]],
    Email:["", [Validators.required, Validators.maxLength(40), Validators.pattern(this.configuracion.exRegularCorreo)]],
    Nombre:["", [Validators.required, Validators.maxLength(40), Validators.pattern(this.configuracion.exRegularLetras)]],
    IdEstado: ["", [Validators.required]],
    IdRol:["", [Validators.required]],
    IdUsuario:["", [Validators.required]],
    Password:["", [Validators.required, Validators.maxLength(20), Validators.pattern(this.configuracion.exRegularPassword)]],
    ConfirmarPassword:["", [Validators.required]]},{validator:this.compararPasswords.bind(this)}
  );

  formularioLogin = this.formBuilder.group({

    NombreUsuario:["", [Validators.required,Validators.maxLength(20), Validators.pattern(this.configuracion.exLetrasNumeros)]],
    Password:["", [Validators.required, Validators.maxLength(20)]]

  });

  get NombreUsuarioLogin(){
    return this.formularioLogin.controls["NombreUsuario"];
  }

  get PasswordLogin(){
    return this.formularioLogin.controls["Password"];
  }


  get Email(){
    return this.formularioRegistroUsuario.controls["Email"];
  }

  get Nombre(){
    return this.formularioRegistroUsuario.controls["Nombre"];
  }

  get NombreUsuario(){
    return this.formularioRegistroUsuario.controls["NombreUsuario"];
  }

  get IdUsuario(){
    return this.formularioRegistroUsuario.controls["IdUsuario"];
  }

  get IdEstado(){
    return this.formularioRegistroUsuario.controls["IdEstado"];
  }

  get IdRol(){
    return this.formularioRegistroUsuario.controls["IdRol"];
  }

  get Password(){
    return this.formularioRegistroUsuario.controls["Password"];
  }

  get ConfirmarPassword(){
    return this.formularioRegistroUsuario.controls["ConfirmarPassword"];
  }

  compararPasswords(formGroup:FormGroup){

    const password  = formGroup.get('Password');
    const confirmarPassword  = formGroup.get('ConfirmarPassword');

    if(confirmarPassword.errors == null || 'passwordsDiferentes' in confirmarPassword)

      if(password.value!=confirmarPassword.value){

        confirmarPassword.setErrors({passwordsDiferentes:true});

      }else{

        confirmarPassword.setErrors(null);

      }
  }

  registrarUsuario(){

    this.usuario = this.formularioRegistroUsuario.value;
    delete this.usuario['ConfirmarPassword'];

    return this.http.post(this.configuracion.rootURL + '/Usuarios/Registro',this.usuario)

  }

  login(){
    this.usuario = this.formularioLogin.value;
    delete this.usuario['ID_USUARIO'];
    delete this.usuario['Email'];
    delete this.usuario['Nombre'];

    return this.http.post(this.configuracion.rootURL + '/Usuarios/Login',this.usuario)
  }

  obtenerPerfil(){

    return this.http.get(this.configuracion.rootURL + '/Usuarios/Perfil');

   }
}
