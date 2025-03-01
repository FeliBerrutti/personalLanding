import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologiesList: Array<string> = ['C#','PostgreSQL',
                                      'Typescript', 'HTML',
                                      'CSS','Vue.js','Angular'];
                                      
  technologiesIMGList: Array<string> = ['CSHARP.png','Postgre.png',
                                        'TS.png','HTML.png',
                                        'CSS.png','VUEJS.png',
                                        'ANGULAR.png'
  ];

  handleIMG(aux: number): string{
    return this.technologiesIMGList[aux];
  }
}
