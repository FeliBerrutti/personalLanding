import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  followList: Array<string> = ['LinkedIn','GitHub'];
  contactList: Array<string> = ['Mail','Whatsapp'];
  aboutList: Array<string> = ['Quien soy','Intereses'];
}
