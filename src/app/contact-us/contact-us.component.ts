import { Component, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser'

@Component({
  selector: 'contact-us',
  imports: [NgIf],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  isContactUsVisible: boolean = true;
  isContactUsOptionsVisible: boolean = false;
  isContactMailVisible: boolean = true;

  @Input() set showContactUs(value: boolean){
    console.log('Ejecutando');
    this.isContactUsVisible = !this.isContactUsVisible;
    // this.isContactUsOptionsVisible = true;
    this.isContactMailVisible = !this.isContactMailVisible;
  };

  // handleContactUsClick(): void{
  //   this.isContactUsVisible = !this.isContactUsVisible;
  // };

  closeContactUs(): void{
    this.isContactUsOptionsVisible = false;
    this.isContactMailVisible = false;
    this.isContactUsVisible = false;
  }

  // handleIMG(aux: number): string{
  //   return this.contactIMGList[aux];
  // };

  handleContactMailButton(): void{
    this.isContactUsOptionsVisible = !this.isContactUsOptionsVisible;
    this.isContactMailVisible = !this.isContactMailVisible;
  };

  handleContactWppButton(): void{
    this.isContactUsVisible = !this.isContactUsVisible;
  };

  handleContactOptionClick(aux:number): void{
    aux === 0 ?
    this.handleContactMailButton() :
    this.handleContactWppButton();
  };

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm('ID02', 'TID02', e.target as HTMLFormElement, {
        publicKey: 'GDb63PqAmervkXikd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.isContactMailVisible = !this.isContactMailVisible;
          this.isContactUsVisible = !this.isContactUsVisible;
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }



  // contactList: Array<string> = ['Mail','Whatsapp'];
  // contactIMGList: Array<string> = ['MAIL.png','WPP.png'];
}
