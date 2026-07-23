import { Routes } from '@angular/router';
import { FormularioCadastroPessoa } from './pages/formulario-cadastro-pessoa/formulario-cadastro-pessoa';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Página inicial',
  },
  {
    path: 'cadastro-pessoa',
    component: FormularioCadastroPessoa,
    title: 'Formulário de Cadastro',
  },
];
