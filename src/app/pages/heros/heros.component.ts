import { Component, OnInit } from '@angular/core';
import { LolserverService } from 'src/app/services/lolserver.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  nombre !: any
  roles !: string

  constructor(private ServRol: LolserverService) { }

  buscarHero(rol:string){
    this.nombre = this.ServRol.mostrarporRol(rol)
  }
}
