import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicioPropietarioService } from './../Servicios/servicio-propietario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-propietario',
  templateUrl: './crear-propietario.component.html',
  styleUrls: ['./crear-propietario.component.sass']
})
export class CrearPropietarioComponent implements OnInit {
  constructor(public ServicioPropitario: ServicioPropietarioService, private formbuilder: FormBuilder, private toast: ToastrService) { }
  ngOnInit(): void {
    this.ServicioPropitario.ListaTipoDocumento();
    this.ServicioPropitario.ListaBarrio();
    this.ServicioPropitario.ListaGenero();
    this.ServicioPropitario.FormularioRegistro = this.formbuilder.group({
      IdPropietario: [0],
      Nombre: ['', [Validators.required, Validators.pattern(this.exRegularLetras), Validators.maxLength(50)]],
      Apellido: ['', [Validators.required, Validators.pattern(this.exRegularLetras), Validators.maxLength(50)]],
      Correo: ['', [Validators.required, Validators.pattern(this.exRegularCorreo), Validators.maxLength(80)]],
      NumeroDocumento: ['', [Validators.required, Validators.pattern(this.exRegularNumeros)]],
      Celular: ['', [Validators.required, Validators.pattern(this.exRegularNumeros)]],
      IdGenero: ['', [Validators.required]],
      IdBarrio: ['', [Validators.required]],
      IdTipoDocumento: ['', [Validators.required]]
    });
  }
  // tslint:disable-next-line: member-ordering
  exRegularLetras: any = '^[a-zA-Z ]*$';
  // tslint:disable-next-line: member-ordering
  exRegularCorreo: any = '\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*';
  // tslint:disable-next-line: member-ordering
  exRegularNumeros: any = '^[0-9]*$';


  // tslint:disable-next-line: typedef
  get Nombre(){
    return this.ServicioPropitario.FormularioRegistro.controls.Nombre;
  }
  // tslint:disable-next-line: typedef
  get Apellido(){
    return this.ServicioPropitario.FormularioRegistro.controls.Apellido;
  }
  // tslint:disable-next-line: typedef
  get Correo(){
    return this.ServicioPropitario.FormularioRegistro.controls.Correo;
  }
  // tslint:disable-next-line: typedef
  get NumeroDocumento(){
    return this.ServicioPropitario.FormularioRegistro.controls.NumeroDocumento;
  }
  // tslint:disable-next-line: typedef
  get Celular(){
    return this.ServicioPropitario.FormularioRegistro.controls.Celular;
  }
  // tslint:disable-next-line: typedef
  get IdGenero(){
    return this.ServicioPropitario.FormularioRegistro.controls.IdGenero;
  }
  // tslint:disable-next-line: typedef
  get IdBarrio(){
    return this.ServicioPropitario.FormularioRegistro.controls.IdBarrio;
  }
  // tslint:disable-next-line: typedef
  get IdTipoDocumento(){
    return this.ServicioPropitario.FormularioRegistro.controls.IdTipoDocumento;
  }
  // tslint:disable-next-line: typedef
  onSubmit(){
    this.ServicioPropitario.guardarEmpleado().subscribe(
      res => {
        this.ServicioPropitario.FormularioRegistro.reset();
        this.toast.success('Se registro el propietario');
      },
      err => {
        this.toast.error('error');
      }
    );
  }
}
