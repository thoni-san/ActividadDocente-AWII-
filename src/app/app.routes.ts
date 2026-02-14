import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Consultas } from './features/consultas/consultas';
import { Contacto } from './features/contacto/contacto';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Login } from './features/login/login';
import { Registro } from './features/registro/registro';
import { Comic } from './shared/comic/comic';

export const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },

  { path: 'inicio', component: Home },
  { path: 'consultas', component: Consultas },
  { path: 'contacto', component: Contacto },
  { path: 'comic', component: Comic },

  { path: '**', component: Pagina404 }

];
