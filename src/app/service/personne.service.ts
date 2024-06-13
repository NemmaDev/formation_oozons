
import { Injectable } from '@angular/core';
import { Person } from '../models/model-personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor() { }

  private personnes: Person[] = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', age: 30 },
    { id: 2, nom: 'Martin', prenom: 'Marie', age: 25 },
    { id: 3, nom: 'Ozon', prenom: 'Toto', age: 1 }
  ];
  

  listPersone():Person[]{
      return this.personnes;
  }
  PersonneParId(id:number):Person | undefined{
    return this.personnes.find(p=> p.id=id);
  }
  ajouterPersonne(person:Person):void{
     this.personnes.push(person);
  }
  updatePersonne(person:Person):void{
    const index= this.personnes.findIndex (p=>p.id=person.id);
    if(index!==-1){
      this.personnes[index]=person;
    }
  }

  deletePersonne(id:number):void{
    this.personnes=this.personnes.filter(p=>p.id !== id);
  }

}
