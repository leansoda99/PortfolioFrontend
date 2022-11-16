import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencias-yeducacion',
  templateUrl: './experiencias-yeducacion.component.html',
  styleUrls: ['./experiencias-yeducacion.component.css']
})
export class ExperienciasYEducacionComponent implements OnInit {
  experienciasList:any;
  educacionList:any;
  constructor(private datos: PorfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.experienciasList=data.experiencias;
    })
    this.datos.obtenerDatos().subscribe(data=>{
      this.educacionList=data.educacion;
    })
  }

}
