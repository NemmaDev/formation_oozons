import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonneComponent } from "./components/personne/personne.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PersonneComponent]
})
export class AppComponent {
[x: string]: any;
  title = 'formation_oozons';
}
