import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/Modulos/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioService:UsuarioService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
      this.router.navigateByUrl('homelh');

  }

  onSubmit(){
    this.usuarioService.login().subscribe(
      (res:any)=>{
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('home');
      },
      error =>{
        if(error.status == 400){
          this.toastr.error('Nombre de usuario o contraseña incorrectos');
        }else{
          console.log(error);
        }

      }
    )
  }

}
