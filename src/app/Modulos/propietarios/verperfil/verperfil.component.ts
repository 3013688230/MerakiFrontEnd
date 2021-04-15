import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPropietarioService } from '../Servicios/servicio-propietario.service';
@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.component.html',
  styleUrls: ['./verperfil.component.sass']
})
export class VerperfilComponent implements OnInit {

  constructor(private router: Router, public servicioPropitario: ServicioPropietarioService) { }
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

}
