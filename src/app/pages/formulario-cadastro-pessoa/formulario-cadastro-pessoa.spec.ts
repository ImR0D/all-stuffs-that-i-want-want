import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastroPessoa } from './formulario-cadastro-pessoa';

describe('FormularioCadastroPessoa', () => {
  let component: FormularioCadastroPessoa;
  let fixture: ComponentFixture<FormularioCadastroPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCadastroPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCadastroPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
