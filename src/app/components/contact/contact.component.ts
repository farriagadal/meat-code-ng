import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
// import { ContactService } from '../services/contact/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
// import Swal from  'sweetalert2';
// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contact: Contact;
  public validateForm: FormGroup;

  constructor(
    private contactService: ContactService
  ) {}

  public ngOnInit(): void {
    this.contact = new Contact();
    this.initContactForm();
  }

  public initContactForm(): void {
    this.validateForm = new FormGroup({
      firstname: new FormControl(null, [Validators.minLength(2), Validators.required]),
      lastname: new FormControl(null, [Validators.minLength(2), Validators.required]),
      email: new FormControl(null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]),
      phone: new FormControl(null, [Validators.pattern('[0-9]+'), Validators.required]),
    });
  }

  public sendContact(e: Event): void {
    if (this.validateForm.status === 'VALID') {
      console.log(this.contact);
      this.contactService.postContact(this.contact).subscribe(data => {
        this.SuccessNotification();
      });
    } else {
      this.ErrorNotification();
      this.validateForm.markAsTouched();
    }
  }


  public ErrorNotification(): void {
    // Swal.fire(
    //   'Campos incompletos',
    //   'Por favor rellene todos los campos :)',
    //   'error'
    // )
    alert('Campos incompletos');
  }

  public SuccessNotification(): void {
    // Swal.fire(
    //   'Mensaje Enviado!',
    //   'Recibirá una respuesta en un momento  :)',
    //   'success'
    // )
    alert('Mensaje Enviado');
  }

  public ErrorServer(): void {
    // Swal.fire(
    //   'Error de servidor :(',
    //   'Intente más tarde, mientras lo solucionamos',
    //   'error'
    // )
    alert('Error de servidor');
  }

}
