import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent implements OnInit {
contactoList:any;
  constructor(private datos:PorfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.contactoList=data.datosC
    })
  }

}
