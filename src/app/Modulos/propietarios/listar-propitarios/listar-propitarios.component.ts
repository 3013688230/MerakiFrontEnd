import { ServicioPropietarioService } from './../Servicios/servicio-propietario.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-propitarios',
  templateUrl: './listar-propitarios.component.html',
  styleUrls: ['./listar-propitarios.component.sass']
})
export class ListarPropitariosComponent implements OnInit {
  constructor(public servicioPropitario: ServicioPropietarioService, private toast: ToastrService) { }

  title = 'Lista de propitarios';
  strLength : any = [];

  dtOptions: any = {};
  pageSizeOptions: any;
  ngOnInit(): void {
    this.servicioPropitario.ListarPropitarios();
    this.pageSizeOptions = [5, 10, 20, 50, 100];
  }
  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1
  }
  page_size: number = 5;
  page_number: number = 1;
  CambiarEstado(IdRol: number, IdUsario: number){
    this.servicioPropitario.EditarEstado(IdRol, IdUsario).subscribe(
      res => {
        this.servicioPropitario.ListarPropitarios();
        this.toast.success('Se cambio el estado');
      },
      err => {
        this.toast.error('error');
      }
    );
  }
}
