import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-homelh',
  templateUrl: './homelh.component.html',
  styleUrls: ['./homelh.component.sass']
})
export class HomelhComponent implements OnInit {

  constructor(private router:Router, private usuarioService:UsuarioService) { }

  perfilUsuario;

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('usuario/login');
  }

  ngOnInit() {
    this.usuarioService.obtenerPerfil().subscribe(
      res=> {
        this.perfilUsuario = res;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
