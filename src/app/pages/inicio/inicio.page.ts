import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action sheet',
      redirecTo: "/action-sheet"
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: "/alert"
     },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirecTo: "/avatar"
    },
    {
      icon: 'calendar-outline',
      name: 'Datetine',
      redirecTo: "/datetime"
    },
    {
      icon: 'document-text-outline',
      name: 'Input',
      redirecTo: "/input"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
