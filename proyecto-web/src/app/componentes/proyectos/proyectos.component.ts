import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList:any;
  constructor(private datos: PorfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.proyectosList=data.proyectos
    })
  }

}
