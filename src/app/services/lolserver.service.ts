import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LolserverService {
  heroes = [
    {
      name:'Garen',
      id:1,
      line:'Top',
      rol:'Tanque',
      img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_13.jpg",
    },
    {
      name:'Ashe',
      id:2,
      line:'Bot',
      rol:'Tirador',
      img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_23.jpg",
    },
    {
      name:'Ahri',
      id:3,
      line:'Mid',
      rol:'Mago',
      img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg",
    },
    {
      name:'Pyke',
      id:4,
      line:'Bot',
      rol:'Soporte',
      img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_16.jpg",
    },
    {
      name:'Akali',
      id:5,
      line:'Mid',
      rol:'Asesino',
      img:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_15.jpg",
    },
  ]

  mostrarHeroes(){
    return this.heroes
  }
  mostrarporRol(roles:string){
    return this.heroes.find( heroe => heroe.rol === roles)
  }

  constructor() { }
}
