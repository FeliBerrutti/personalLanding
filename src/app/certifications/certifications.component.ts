import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'certifications',
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certificationsList: Array<string> = ['Web Api .Net Core','Introducción al paradigma de Objetos',
                                        'Entity Framework y LINQ', 'Introducción a la Ciberseguridad',
                                        'Seguridad de Terminales','Conceptos básicos de Redes',
                                        'Dispositivos de Red y configuración inicial', 'Fundamentos de Python'];

  certificationsIMGList: Array<string> = ['edIT.png','edIT.png','edIT.png',
                                          'cisco.png','cisco.png','cisco.png',
                                          'cisco.png','cisco.png'];

  handleCertificationIMG(index: number): string{
    return this.certificationsIMGList[index];
  };

  handleContentClick(index: number): void{
    index === 0 ?
    window.open('https://www.educacionit.com/perfil/felipe-beriao-berrutti-973813/certificado/71349', '_blank') :
    index === 1 ?
    window.open('https://www.educacionit.com/perfil/felipe-beriao-berrutti-973813/certificado/70922', '_blank') :
    index === 2 ?
    window.open('https://www.educacionit.com/perfil/felipe-beriao-berrutti-973813/certificado/62690', '_blank') :
    index === 3 ?
    window.open('https://www.credly.com/badges/393d7c1f-ea96-4b91-94fd-499b43135ee6/linked_in?t=s1w17c', '_blank') :
    index === 4 ?
    window.open('https://www.credly.com/badges/3fd15dc0-1ac8-4043-81dd-97dc33487667/linked_in_profile', '_blank') :
    index === 5 ?
    window.open('https://www.credly.com/badges/22092b34-2081-4c27-9a2b-eb4dc05c79a7/linked_in_profile', '_blank') :
    index === 6 ?
    window.open('https://www.credly.com/badges/fd0b82c4-710d-4dcf-8207-1c696ca835e0/linked_in_profile', '_blank') :
    window.open('https://www.credly.com/badges/efcd6358-9e68-43a5-a9eb-068e7b37fef0/linked_in_profile', '_blank')
  };
}
