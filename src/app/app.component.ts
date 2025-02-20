import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProyectsComponent } from './proyects/proyects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, 
            PresentationComponent, TechnologiesComponent,
            ProyectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyLanding';
}
