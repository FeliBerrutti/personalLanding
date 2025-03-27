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
  proyectsList: Array<string> = ['El 10 de Villa Pueyrredón','CRM - Versión Operador','Homepage','Restaurante Las Victorias','Espartanos Gym'];

  proyectsImgList: Array<string> = ['EL10VP.gif','CRM.gif','landingShow.gif','restaurantGIF.gif','mGYM.gif'];

  proyectTextList: Array<string> = [` Landing page para negocio de alquiler de volquetes.`,
                                    `Sistema de gestión de relaciones con clientes.
                                    Usuario y contraseña: prueba`,
                                    `Mi pagina personal, link al repositorio de GitHub.`,
                                    `Simulación de pagina web para restaurantes.`,
                                    `Simulación de pagina web para gymnasios.`];

  handleIMG(aux: number): string{
    return this.proyectsImgList[aux];
  };

  handleCardClick(aux: number): void{
    aux === 0 ?
    window.open('https://feliberrutti.github.io/EL-10-VP', '_blank') :
    aux === 1 ?
    window.open('https://feliberrutti.github.io/velCRM/', '_blank') :
    aux === 2 ?
    window.open('https://github.com/FeliBerrutti/personalLanding', '_blank') :
    aux === 3 ?
    window.open('https://lbsoftwaredevs.github.io/muestraRestaurante/', '_blank') :
    window.open('https://lbsoftwaredevs.github.io/muestraGym/', '_blank');
  };
}
