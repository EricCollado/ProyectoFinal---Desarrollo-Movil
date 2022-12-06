import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'albergues',
    loadChildren: () => import('./albergues/albergues.module').then( m => m.AlberguesPageModule)
  },
  {
    path: 'miembros',
    loadChildren: () => import('./miembros/miembros.module').then( m => m.MiembrosPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'medidas',
    loadChildren: () => import('./medidas/medidas.module').then( m => m.MedidasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
