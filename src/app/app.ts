import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioCadastroPessoa } from './pages/formulario-cadastro-pessoa/formulario-cadastro-pessoa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioCadastroPessoa],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
