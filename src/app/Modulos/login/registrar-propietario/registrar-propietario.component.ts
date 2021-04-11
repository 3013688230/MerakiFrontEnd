import { FormBuilder } from '@angular/forms';
import { GestionRegistroService } from './../gestion-registro.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GestionPropietarioService } from '../gestion-propietario.service';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registrar-propietario',
  templateUrl: './registrar-propietario.component.html',
  styleUrls: ['./registrar-propietario.component.sass']
})
export class RegistrarPropietarioComponent implements OnInit {

  constructor(public gestionPropietarioService:GestionPropietarioService, private toastr:ToastrService) { }

  ngOnInit(): void {

  }

  resetearFormulario() {
    this.gestionPropietarioService.formularioRegistroPropietarios.reset();
  }

  onSubmit() {
    this.gestionPropietarioService.propietario = this.gestionPropietarioService.formularioRegistroPropietarios.value;

    if (this.gestionPropietarioService.propietario.IdPropietario == 0 || this.gestionPropietarioService.propietario.IdPropietario == null)
      this.guardarPropietario();
      //this.editarPropietario();
  }

  guardarPropietario() {
    this.gestionPropietarioService.guardarPropietario().subscribe(
      res => {
        this.gestionPropietarioService.formularioRegistroPropietarios.reset();
        this.toastr.info("Se actualizaron datos de Propietario", "Actualizar Propietario")
        this.gestionPropietarioService.listarPropietarios();
      },
      err => {
        console.log(err)
        this.toastr.error("Error")
      }
    );
  }

}
