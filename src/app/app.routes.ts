import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'about', 
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) 
  },
  { 
    path: '**', 
    redirectTo: '/home' 
  }
];
