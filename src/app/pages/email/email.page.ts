import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  usuario = {
    email: ''
  }
  constructor() { }
  ngOnInit() {
  }
  onSubmit(email: NgForm) {
    console.log('Correo valido');
    console.log(this.usuario);
  }


}
