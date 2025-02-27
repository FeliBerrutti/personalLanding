import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonModule, NgIf } from '@angular/common';
import { CertificationsComponent } from './certifications/certifications.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, 
            PresentationComponent, TechnologiesComponent,
            ProyectsComponent, FooterComponent, 
            ContactUsComponent, CertificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  _isContactUsVisible: boolean = false;

  _showContact(): void{
    this._isContactUsVisible = !this._isContactUsVisible;
  };
}
