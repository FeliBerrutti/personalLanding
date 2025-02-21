import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isMenuVisible: boolean = false;

  handleMenuClick(): void{
    this.isMenuVisible ?
    this.isMenuVisible = false :
    this.isMenuVisible = true
  };

  menuOptionsList: Array<string> = ['Tecnologías','Proyectos',
                                    'Contacto','Para reclutadores',
                                    'Quiero una web','Acerca de mi'];

handleOptionClick(aux: number): void{
  this.handleMenuClick();
  aux === 0 ?
  document.getElementById('cardContainer')?.scrollIntoView({behavior: 'smooth', block: 'center'}) :
  aux === 1 ?
  document.getElementById('proyectsCardContainer')?.scrollIntoView({behavior:'smooth', block:'center'}) :
  console.log('Opcion 3.')
};
}
