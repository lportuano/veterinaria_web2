import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { childGuardGuard } from './guards/child-guard-guard';
import { adminMatchGuard, publicmatchGuard } from './guards/match-guard';
import { outAuthGuard } from './guards/outh-guard-guard';


export const routes: Routes = [
    //1. Ruta inicial
    { path: '', component: Home, canMatch:[publicmatchGuard]},
    //2. Rutas de navegación
    
    { path: 'login', component: Login },
    { path: 'cuenta', component: FormularioCuenta },

    //implementacion del CanActivateChild
    
    { path: 'consultas', component: Consultas, canMatch:[adminMatchGuard], canActivateChild: [childGuardGuard], children: [
        { path: 'ver', component: Consultas } 
        ]
    },

    //ocultar componente hija en consultas

    { path: '', canActivateChild: [childGuardGuard], children: [
            { path: 'mascotas', component: Mascotas },
        ]
    },

    { path: 'acerca', component: Acerca, canMatch:[publicmatchGuard] },
    { path: 'usuario', component: Usuarios, canActivate: [authGuard], canDeactivate:[outAuthGuard], canMatch:[adminMatchGuard] },
];