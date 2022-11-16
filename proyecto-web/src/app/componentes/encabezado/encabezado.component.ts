import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  constructor(private datos: PorfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data;
    });
  }

}
