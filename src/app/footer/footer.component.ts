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
  contactList: Array<string> = ['Mail','LinkedIn'];
  aboutList: Array<string> = ['Flaticon',];

  handleFollowClick(index: number): void{
    index === 0 ?
    window.open('https://www.linkedin.com/in/felipeberrutti/', '_blank') :
    window.open('https://github.com/feliberrutti', '_blank');
  };

  handleContactClick(index: number): void{
    index === 0 ?
    console.log('Funcion 1.') : 
    window.open('https://www.linkedin.com/in/felipeberrutti/', '_blank')
  };

  handleThanksClick(index: number): void{
    index === 0 ?
    window.open('https://www.flaticon.es', '_blanked') :
    console.log('Función 2.');
  }
}
