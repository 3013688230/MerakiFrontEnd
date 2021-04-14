import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GestionClienteService } from 'src/app/services/gestion-cliente.service';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.sass']
})
export class EditarClienteComponent implements OnInit {
  id: any;
  idConvert: number;
  constructor(
    public gestionClienteService:GestionClienteService,
     private rutaActiva:ActivatedRoute,
     private formBuilder:FormBuilder,
     private toastr:ToastrService) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.idConvert = Number(this.id);
    this.gestionClienteService.DetallesSinCliente(this.idConvert);
    this.gestionClienteService.ListaGenero();
    this.gestionClienteService.ListaTipoDocumento();
    this.gestionClienteService.formularioRegistroCliente = this.formBuilder.group({
      IdCliente:[this.idConvert],
      IdTipoDocumento:["", [Validators.required]],
      IdGenero:["", [Validators.required]],
      Direccion:["", [Validators.required]],
      Correo:["", [Validators.required, Validators.pattern(this.exRegularCorreo)]],
      Nombre:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(3), Validators.maxLength(30)]],
      Apellido:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(4), Validators.maxLength(50)]],
      NumeroDocumento:["", [Validators.required, Validators.pattern(this.exRegularNumeros) , Validators.minLength(5), Validators.maxLength(15)]],
      Celular:["", [Validators.required, Validators.pattern(this.exRegularNumeros), Validators.minLength(5)]]
    })
  }

  exRegularLetras: any = "^[a-zA-ZÀ -ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ -ÿ\u00f1\u00d1]*)*[a-zA-ZÀ -ÿ\u00f1\u00d1]+$";
  exRegularCorreo: any = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  exRegularNumeros: any = "^[0-9]*$";

  get IdTipoDocumento(){
    return this.gestionClienteService.formularioRegistroCliente.controls["IdTipoDocumento"];
  }

  get IdGenero(){
    return this.gestionClienteService.formularioRegistroCliente.controls["IdGenero"];
  }

  get Correo(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Correo"];
  }

  get Nombre(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Nombre"];
  }

  get Apellido(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Apellido"];
  }

  get NumeroDocumento(){
    return this.gestionClienteService.formularioRegistroCliente.controls["NumeroDocumento"];
  }

  get Celular(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Celular"];
  }

  get Direccion(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Direccion"];
  }

  onSubmit(){
    this.gestionClienteService.EditarCliente().subscribe(
      res=>{
        this.gestionClienteService.formularioRegistroCliente.reset();
        this.toastr.success("Se ha actualizado el Cliente")
      },
      err=>{
        this.toastr.error("Error")
      }
    );
  }
}
