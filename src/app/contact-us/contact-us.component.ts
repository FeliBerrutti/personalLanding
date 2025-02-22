import { Component, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'contact-us',
  imports: [NgIf],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  isContactUsVisible: boolean = false;
  isContactUsOptionsVisible: boolean = true;
  isContactMailVisible: boolean = false;

  @Input() set showContactUs(value: boolean){
    this.isContactUsVisible = true;
    this.isContactUsOptionsVisible = true;
  };

  // handleContactUsClick(): void{
  //   this.isContactUsVisible = !this.isContactUsVisible;
  // };

  closeContactUs(): void{
    this.isContactUsOptionsVisible = false;
    this.isContactMailVisible = false;
    this.isContactUsVisible = false;
  }

  handleIMG(aux: number): string{
    return this.contactIMGList[aux];
  };

  handleContactMailButton(): void{
    this.isContactUsOptionsVisible = !this.isContactUsOptionsVisible;
    this.isContactMailVisible = !this.isContactMailVisible;
  };

  handleContactWppButton(): void{
    this.isContactUsVisible = !this.isContactUsVisible;
    window.open('https://wa.me/541157381951', '_blank');
  };

  handleContactOptionClick(aux:number): void{
    aux === 0 ?
    this.handleContactMailButton() :
    this.handleContactWppButton();
  };



  contactList: Array<string> = ['Mail','Whatsapp'];
  contactIMGList: Array<string> = ['MAIL.png','WPP.png'];
}
