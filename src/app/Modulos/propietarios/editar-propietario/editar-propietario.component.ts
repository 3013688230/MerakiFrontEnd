import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioPropietarioService } from '../Servicios/servicio-propietario.service';

@Component({
  selector: 'app-editar-propietario',
  templateUrl: './editar-propietario.component.html',
  styleUrls: ['./editar-propietario.component.sass']
})
export class EditarPropietarioComponent implements OnInit {
  id: any;
  idConvert: number;
  constructor(
    public ServicioPropitario: ServicioPropietarioService,
    private rutaActiva: ActivatedRoute,
    private formbuilder: FormBuilder,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.idConvert = Number(this.id);
    this.ServicioPropitario.DetalleSinPropietario(this.idConvert);
    this.ServicioPropitario.ListaTipoDocumento();
    this.ServicioPropitario.ListaBarrio();
    this.ServicioPropitario.ListaGenero();
    this.ServicioPropitario.FormularioRegistro = this.formbuilder.group({
      IdPropietario: [this.idConvert],
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
  onSubmit(){
    this.ServicioPropitario.EditarPropietario().subscribe(
      res => {
        this.ServicioPropitario.FormularioRegistro.reset();
        this.toast.success('Se Actualizado el propietario');
      },
      err => {
        this.toast.error('error');
      }
    );
  }
}
