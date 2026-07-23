import { Service } from '@angular/core';
import { DadosCadastroPessoaService } from '../DadosCadastroPessoa/dados-cadastro-pessoa-service';

@Service()
export class CadastrarPessoaService {
  add(cadastroPessoa: DadosCadastroPessoaService) {
    console.log(cadastroPessoa);
  }
}
