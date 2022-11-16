import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  miPorfolio:any;
  constructor(private datos: PorfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.miPorfolio=data.sobreMi;
    })

  }

}
