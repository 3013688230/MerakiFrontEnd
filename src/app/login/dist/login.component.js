// import { Component, OnInit } from '@angular/core';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms'
// import { Router } from '@angular/router';
// import { map } from 'rxjs/internal/operators/map';
// import { AuthService } from '../_services/auth.service';
// import { TokenStorageService } from '../_services/token-storage.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.sass']
// })
// export class LoginComponent implements OnInit {
//   form: any = {
//     email: null,
//     password: null
//   };
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   roles: string[] = [];
//   hide: boolean = false;
//   constructor(
//     private authService: AuthService,
//     private tokenStorage: TokenStorageService,
//     private router: Router,
//     private fb: FormBuilder
//   ) { }
//   ngOnInit(): void {
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.getUser().roles;
//     }
//   }
//   onSubmit(): void {
//     const { username, password } = this.form;
//     this.authService.login(username, password).subscribe(
//       data => {
//         this.tokenStorage.guardarToken(data.accessToken);
//         this.tokenStorage.guardarUser(data);
//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         this.roles = this.tokenStorage.getUser().roles;
//         this.cargarPagina();
//       },
//       err => {
//         this.errorMessage = err.error.message;
//         this.isLoginFailed = true;
//       }
//     );
//   }
//   cargarPagina(): void {
//     window.location.reload();
//   }
//   loginForm : FormGroup = this.fb.group(
//     {
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.nullValidator, Validators.minLength(8)]]
//     }
//   );
//   onLogin() {
//     if (!this.loginForm.valid) {
//       return;
//     }
//     console.log(this.loginForm.value);
//     /*this.authService.login(this.loginForm.value).pipe(
//       map(token => this.router.navigate(['admin']))
//     ).subscribe();*/
//   }
// }
