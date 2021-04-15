import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioPropietarioService } from '../Servicios/servicio-propietario.service';
@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.component.html',
  styleUrls: ['./verperfil.component.sass']
})
export class VerperfilComponent implements OnInit {

  constructor(private router: Router, public servicioPropitario: ServicioPropietarioService, private toast: ToastrService) { }
  perfilUsuario;

  // tslint:disable-next-line: typedef
  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('usuario/login');
  }

  ngOnInit(): void {
    this.servicioPropitario.obtenerPerfil().subscribe(
      res => {
        this.perfilUsuario = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line: typedef
  CambiarEstado(IdRol: string, IdUsario: string){
    this.servicioPropitario.EditarEstado(IdRol, IdUsario)
      .subscribe(
        res => {
          localStorage.removeItem('token');
          this.router.navigateByUrl('usuario/login');
        },
        err => {
          this.toast.error('error');
        }
      );
    }

}
