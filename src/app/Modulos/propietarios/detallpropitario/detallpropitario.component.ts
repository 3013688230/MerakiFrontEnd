import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { ServicioPropietarioService } from '../Servicios/servicio-propietario.service';

@Component({
  selector: 'app-detallpropitario',
  templateUrl: './detallpropitario.component.html',
  styleUrls: ['./detallpropitario.component.sass']
})
export class DetallpropitarioComponent implements OnInit {
  id: any;
  idConvert: number;
  constructor(public serviciosPropietario: ServicioPropietarioService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.idConvert = Number(this.id);
    this.serviciosPropietario.detallesPropitario(this.idConvert);
  }



}
