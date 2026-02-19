import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './shared/login/login';
import { authChildGuard, authGuard } from './guards/auth-guard';

export const routes: Routes = [
    //1. Ruta inicial
    { path: '', component: Home },
    //2. Rutas de navegación
    
    { path: 'login', component: Login },
    { path: 'cuenta', component: FormularioCuenta },
    
    { path: 'consultas', component: Consultas, canActivateChild: [authChildGuard], children: [
        { path: 'ver', component: Consultas } 
        ]
    },

    { path: '', canActivateChild: [authChildGuard], children: [
            { path: 'mascotas', component: Mascotas },
            { path: 'acerca', component: Acerca },
        ]
    },

    { path: 'usuario', component: Usuarios, canActivate: [authGuard] },
];