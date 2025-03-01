import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  animations: [
    trigger('menuAn', [
      state('initial', style({
        maxWidth: '0px'
      })),
      state('final',style({
        maxWidth: '100px',
        minWidth: '50%'
      })),
      transition('initial => final',
      animate('500ms')),
      transition('final => initial',
      animate('500ms'))
    ]),
    trigger('menuOptionsAn', [
      state('initial', style({
        opacity: 0
      })),
      state('final',style({
        opacity: 1
      })),
      transition('initial => final',
      animate('500ms')),
      transition('final => initial',
      animate('150ms'))
    ])
  ]
})
export class MenuComponent {
  isMenuVisible: boolean = false;
  auxAnimation = 'final';
  auxOptionsAnimation = 'final';

  openMenu(): void{
      this.auxAnimation = 'initial';
      setTimeout(() => {
        this.auxOptionsAnimation = 'initial';
      }, 0);
      this.isMenuVisible = true;

  };

  closeMenu(): void{
      this.auxAnimation = 'final';
      setTimeout(() => {
        this.auxOptionsAnimation = 'final';
      }, 500);
      this.isMenuVisible = false;
  };



  handleMenuClick(): void{
    this.isMenuVisible ?
    this.closeMenu() :
    this.openMenu()
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
