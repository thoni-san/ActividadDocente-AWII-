import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { Servicios } from './shared/servicios/servicios';
import { Consultas } from './features/consultas/consultas';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'acerca', component:Servicios},
    {path:'consultas', component:Consultas},

    {path:'**', component:Pagina404}
];
