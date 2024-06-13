import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Person } from '../../models/model-personne';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonneService } from '../../service/personne.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-person-modal', 
  standalone: true, 
  imports: [FormsModule, ReactiveFormsModule,NgFor], 
  templateUrl: './edit-person-modal.component.html',
  styleUrls: ['./edit-person-modal.component.css']
})
export class EditPersonModalComponent implements OnInit, OnChanges {
  @Input() personne: Person | null = null;
  @Output() personneChange = new EventEmitter<void>();  
  personneForm: FormGroup;
  personnes: Person[] = [];

  constructor(private fb: FormBuilder, private personneService: PersonneService) {
    this.personneForm = this.fb.group({
      id: [0],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(0)]]
    });
  }
  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personne'] && this.personne) {
      this.personneForm.setValue({
        id: this.personne.id,
        nom: this.personne.nom,
        prenom: this.personne.prenom,
        age: this.personne.age
      });
    }
  }
  sauvegarderPersonne(): void {
    const formValue = this.personneForm.value;
    const newPersonne: Person = {
      id: formValue.id,
      nom: formValue.nom,
      prenom: formValue.prenom,
      age: formValue.age
    };
    if (newPersonne.id === 0) {
      newPersonne.id = this.personneService.listPersone().length > 0
        ? Math.max(...this.personneService.listPersone().map(p => p.id)) + 1
        : 1;
      this.personneService.ajouterPersonne(newPersonne);
      this.personnes = this.personneService.listPersone();
    } else {
      this.personneService.updatePersonne(newPersonne);
      this.personnes = this.personneService.listPersone();
    }

    this.personneChange.emit();  // Nouvelle ligne

    this.personneForm.reset({ id: 0, nom: '', prenom: '', age: 0 });
  }
}
