import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-homelh',
  templateUrl: './homelh.component.html',
  styleUrls: ['./homelh.component.sass']
})
export class HomelhComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  perfilUsuario;

  // tslint:disable-next-line: typedef
  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('usuario/login');
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.usuarioService.obtenerPerfil().subscribe(
      res => {
        this.perfilUsuario = res;
        console.log(localStorage.getItem('Rol'));
      },
      err => {
        console.log(err);
      }
    );
  }

}
