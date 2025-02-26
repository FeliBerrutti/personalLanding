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

  handleFollowClick(index: number): void{
    index === 0 ?
    window.open('https://www.linkedin.com/in/felipeberrutti/', '_blank') :
    window.open('https://github.com/feliberrutti', '_blank');
  };
}
