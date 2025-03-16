import { Component, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'contact-us',
  standalone: true,
  imports: [NgIf, SpinnerComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  
  isMailSendOk: boolean = false;
  isMailSendError: boolean = false;

  //VARIABLE SPINNER
  isSpinnerVisible: boolean = false;

  //FUNCIONES SPINNER
  showSpinner(): void{
    if(!this.isSpinnerVisible){
      this.closeContactUs();
      this.isSpinnerVisible = true;
    }
  };

  closeSpinner(): void{
    if(this.isSpinnerVisible){
      this.isSpinnerVisible = false;
    };
  };

  //VARIABLE FORMULARIO MAIL
  isContactMailVisible: boolean = true;

  //FUNCIONES FORMULARIO MAIL
  
  showContactUs(): void{
    if(!this.isContactMailVisible){
      this.isContactMailVisible = true;
    }
  };

  closeContactUs(): void{
    if(this.isContactMailVisible){
      this.isContactMailVisible = false;
    };
  };


  public sendEmail(e: Event) {
    this.showSpinner();
    e.preventDefault();
    emailjs
      .sendForm('ID02', 'TID02', e.target as HTMLFormElement, {
        publicKey: 'GDb63PqAmervkXikd',
      })
      .then(
        () => {
          this.closeSpinner();
          this.isMailSendOk = !this.isMailSendOk;
          setTimeout(() => {
            this.isMailSendOk = !this.isMailSendOk;
            this.isContactMailVisible = !this.isContactMailVisible;
          }, 3000);},
        (error) => {
          this.closeSpinner();
          this.isMailSendError = !this.isMailSendError;
          setTimeout(() => {
          this.isMailSendError = !this.isMailSendError;
          this.showContactUs();
          }, 3000);
          console.log((error as EmailJSResponseStatus).text);
        },
      );
  }
}
