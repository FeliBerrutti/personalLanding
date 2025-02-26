import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'proyects',
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {
  proyectsList: Array<string> = ['Landing Page','CRM','Mi Landing page'];

  proyectsImgList: Array<string> = ['EL10VP.gif','CRM.gif','landingShow.gif'];

  proyectTextList: Array<string> = [`Vue.js, CSS3, HTML5, javaScript.`,
                                    `Vue.js, CSS3, HTML5, javaScript, C# .NET, PostgreSQL.`,
                                    `Angular, CSS3, HTML5`];

  handleIMG(aux: number): string{
    return this.proyectsImgList[aux];
  };

  handleCardClick(aux: number): void{
    aux === 0 ?
    window.open('https://feliberrutti.github.io/EL-10-VP', '_blank') :
    console.log('Opcion 2');
  };
}
