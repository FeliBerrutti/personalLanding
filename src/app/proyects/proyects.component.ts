import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'proyects',
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {
  proyectsList: Array<string> = ['Landing Page','CRM'];

  proyectsImgList: Array<string> = ['EL10VP.gif','CRM.gif'];

  proyectTextList: Array<string> = [`Vue.js, CSS3, HTML5, javaScript.`,
                                    `Vue.js, CSS3, HTML5, javaScript, C# .NET, PostgreSQL.`]

  handleIMG(aux: number): string{
    return this.proyectsImgList[aux];
  };
}
