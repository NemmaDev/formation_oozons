import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneComponent } from './personne.component';

describe('PersonneComponent', () => {
  let component: PersonneComponent;
  let fixture: ComponentFixture<PersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
