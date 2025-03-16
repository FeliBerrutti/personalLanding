import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'proyects',
  standalone: true,
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {
  proyectsList: Array<string> = ['El 10 de Villa Pueyrredón','CRM - Versión Operador','Homepage'];

  proyectsImgList: Array<string> = ['EL10VP.gif','CRM.gif','landingShow.gif'];

  proyectTextList: Array<string> = [` Landing page para negocio de alquiler de volquetes.`,
                                    `Sistema de gestión de relaciones con clientes.
                                    Usuario y contraseña: prueba`,
                                    `Mi pagina personal, link al repositorio de GitHub.`];

  handleIMG(aux: number): string{
    return this.proyectsImgList[aux];
  };

  handleCardClick(aux: number): void{
    aux === 0 ?
    window.open('https://feliberrutti.github.io/EL-10-VP', '_blank') :
    aux === 1 ?
    window.open('https://feliberrutti.github.io/velCRM/') :
    window.open('https://github.com/FeliBerrutti/personalLanding', '_blank')
  };
}
