import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, private toastr: ToastrService) { }
  sw: number;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit(){
    this.sw = 0;
    this.usuarioService.registrarUsuario().subscribe(
      (respuesta: any) => {
        if (respuesta.Succeeded){
          this.usuarioService.formularioRegistroUsuario.reset();
          this.toastr.success( 'Usuario creado exitosamente' );
          this.sw = 1;
        }else{
          respuesta.Errors.forEach(element => {
            switch (element.Code){
              case 'DuplicateUserName':
                  this.toastr.error('El nombre de usario ya existe', 'Registro fallido');
                  this.sw = 1;
                  break ;
              case 'DuplicateEmail':
                  this.toastr.error('El email ya existe', 'Registro fallido');
                  this.sw = 1;
              // tslint:disable-next-line: no-switch-case-fall-through
              default:
                if (this.sw === 0){
                  this.toastr.error(element.Description, 'Registro fallido');
                }
                break;
            }
          });
      }
    });
  }

}
