import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common'; 
import { Person } from '../../models/model-personne';
import { EditPersonModalComponent } from '../../update/edit-person-modal/edit-person-modal.component';
import { PersonneService } from '../../service/personne.service';

@Component({
    selector: 'app-personne',
    standalone: true,
    templateUrl: './personne.component.html',
    styleUrls: ['./personne.component.css'],
    imports: [CommonModule, EditPersonModalComponent,NgIf,NgFor]
})
export class PersonneComponent implements OnInit{
  personnes: Person[] = [];
  selectedPersonne: Person| null = null;

  constructor(private personService: PersonneService){}

  ngOnInit(): void {
    this.personnes = this.personService.listPersone();
  }

  selectPersonne(personne: Person): void {
    this.selectedPersonne = personne;
  }

  supprimerPersonne(id: number): void {
    this.personService.deletePersonne(id);
    this.personnes = this.personService.listPersone();
  }
}