import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home'},
    { title: 'Historia', url: '/historia', icon: 'globe'},
    { title: 'Servicios', url: '/servicios', icon: 'build'},
    { title: 'Noticias', url: '/noticias', icon: 'newspaper'},
    { title: 'Videos', url: '/videos', icon: 'videocam'},
    { title: 'Albergues', url: '/albergues', icon: 'bed'},
    { title: 'Mapa', url: '/mapa', icon: 'map'},
    { title: 'Medidas', url: '/medidas', icon: 'list'},
    { title: 'Miembros', url: '/miembros', icon: 'people'},
    { title: 'Voluntario', url: '/voluntario', icon: 'person-add'},
    { title: 'Acerca de', url: '/acerca-de', icon: 'information-circle'},
    { title: 'Iniciar Sesion', url: '/login', icon: 'log-in'},

  ];
  public appPages2 = [
    { title: 'Noticias', url: '/noticias', icon: 'newspaper'},
    { title: 'Reporta Situaciones', url: '/reportar-situa', icon: 'videocam'},
    { title: 'Mis Situaciones', url: '/situaciones', icon: 'bed'},
    { title: 'Mapa De Situaciones', url: '/mapa-reporte', icon: 'map'},
    { title: 'Cambiar Contraseña', url: '/cambiar-p', icon: 'list'}

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

