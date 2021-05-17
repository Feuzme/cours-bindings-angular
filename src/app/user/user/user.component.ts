import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  texte:string = "Hello world";
  image = "https://picsum.photos/100/100";
  date = Date.now();//donne le time stamp de la date actuelle 
  users = [
    {nom:"Feuzme", prenom:"Fif", age:28},
    {nom:"Rock", prenom:"Sham", age:31},
    {nom:"BoulAF", prenom:"Isma", age: 29},
    {nom:"Xel", prenom:"Clac", age:32},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  direBonjour(user) : void{
    alert(`Bonjour ${user.prenom}`);
  }
}