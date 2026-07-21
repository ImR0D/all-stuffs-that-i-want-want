import { TestBed } from '@angular/core/testing';

import { DadosCadastroPessoaService } from './dados-cadastro-pessoa-service';

describe('DadosCadastroPessoaService', () => {
  let service: DadosCadastroPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCadastroPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
