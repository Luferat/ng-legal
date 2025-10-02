// src/app/app.route.ts

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts';
import { About } from './about/about';
import { New } from './new/new';
import { SeedData } from './seed-data/seed-data';
import { View } from './view/view';

// Nome do site para compor o `title`
const siteName = "NgLegal";

export const routes: Routes = [
    // Rotas vazias redirecionam para a `/home` ← Sempre a primeira
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Páginas { rota, componente, título }
    { path: 'home', component: Home, title: siteName },
    { path: 'contacts', component: Contacts, title: `${siteName} - Faça Contato` },
    { path: 'about', component: About, title: `${siteName} - Sobre` },
    { path: 'new', component: New, title: `${siteName} - Cadastro` },

    // Página "escondida" que adiciona coisas aleatórias ao Firestore
    { path: 'seed-data', component: SeedData, title: `${siteName} - Cadastro de Coisas` },

    // Página de detalhes do thing
    { path: 'view/:id', component: View, title: `${siteName} - Ver Item` },

    // Rota coringa para redirecionar caminhos inválidos ← Sempre a última
    { path: '**', redirectTo: '/home' }
];
