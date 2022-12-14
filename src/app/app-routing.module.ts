import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Se Configura el Lazy load para que los modulos se carguen solo cuando son solicitados
 * 
 */
const routes: Routes = [

  
  { 
    path: 'auth',
    loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'index',
    loadChildren:()=>import('./pages/pages.module').then(m => m.PagesModule)
  },

  /**
 * Se Configura la ruta si no se especifica una
 * 
 */
  { 
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
