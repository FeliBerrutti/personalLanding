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
  proyectsList: Array<string> = ['El 10 de Villa Pueyrredón','CRM - Versión Operador','Restaurante Las Victorias','Espartanos Gym'];

  proyectsImgList: Array<string> = ['EL10VPbanner.png','CRMbanner.png','LASVICTORIASbanner.png','ESPARTANOSbanner.png'];

  handleIMG(aux: number): string{
    return this.proyectsImgList[aux];
  };

  handleCardClick(aux: number): void{
    aux === 0 ?
    window.open('https://feliberrutti.github.io/EL-10-VP', '_blank') :
    aux === 1 ?
    window.open('https://feliberrutti.github.io/velCRM/', '_blank') :
    aux === 2 ?
    window.open('https://lbsoftwaredevs.github.io/muestraRestaurante/', '_blank') :
    window.open('https://lbsoftwaredevs.github.io/muestraGym/', '_blank');
  };
}
