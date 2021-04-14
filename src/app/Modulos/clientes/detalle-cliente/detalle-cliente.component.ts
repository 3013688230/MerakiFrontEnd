import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionClienteService } from 'src/app/services/gestion-cliente.service';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.sass']
})
export class DetalleClienteComponent implements OnInit {
  id: any;
  idConvert: number;
  constructor(public gestionClienteService:GestionClienteService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.idConvert = Number(this.id);
    this.gestionClienteService.detallesCliente(this.idConvert);
  }

}
