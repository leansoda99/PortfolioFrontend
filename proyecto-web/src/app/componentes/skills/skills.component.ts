import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList:any;
  constructor(private datos: PorfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data=>{
      this.skillsList=data.skills;
    })
    
  }

}
