import { Component, Output, EventEmitter } from '@angular/core';
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
                                    'Certificaciones','Contacto'];

    @Output() auxShowContact = new EventEmitter<void>();

    showContact(): void{
      this.auxShowContact.emit();
    };  

handleOptionClick(aux: number): void{
  this.handleMenuClick();
  aux === 0 ?
  document.getElementById('cardContainer')?.scrollIntoView({behavior: 'smooth', block: 'center'}) :
  aux === 1 ?
  document.getElementById('proyectsCardContainer')?.scrollIntoView({behavior:'smooth', block:'center'}) :
  aux === 2 ?
  document.getElementById('certificationsComponent')?.scrollIntoView({behavior: 'smooth', block: 'center'}) :
  this.showContact();
};
}
