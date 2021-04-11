import { UserService } from './../_services/user.service';
import { AppService } from './../app.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs/internal/Observable';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  tarjetas = [];
  TarjetasWeb = [];

    isHandset: boolean = false;
    isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }

      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    public appService: AppService,
    private userService: UserService) { }

  ngOnInitH(): void {
    this.userService.getContenidoPublico().subscribe(
      data => {
        this.content = data;
      },
      err => {
      this.content = JSON.parse(err.error).message;
      }
    );
  }

  ngOnInit() {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.cargarTarjetas();
    });

    this.appService.getUbicacion().subscribe(
      response => {
        this.tarjetas = response.tarjetas;
        this.TarjetasWeb = response.TarjetasWeb;
        this.cargarTarjetas();
      },
      error => {
        alert('Hubo un error al recibir datos del servidor. Por favor intente de nuevo más tarde;');
      }
    );
  }

  cargarTarjetas() {
    this.cards = this.isHandset ? this.tarjetas : this.TarjetasWeb;
  }

  getImage(imageName: string): string {
    return 'url(' + 'http://localhost:3000/images/' + imageName+ '.jpg' +')';
  }
}
