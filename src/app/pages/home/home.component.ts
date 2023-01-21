import { Component, OnInit } from '@angular/core';
import { LolserverService } from 'src/app/services/lolserver.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  list:any[]=[];
  constructor(private services : LolserverService){

  }
  ngOnInit(): void {
    this.list=this.services.mostrarHeroes();
  }
}
