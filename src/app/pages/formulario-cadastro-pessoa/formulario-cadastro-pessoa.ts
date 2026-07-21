import { Component, inject, input, viewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DadosCadastroPessoaService } from '../../services/DadosCadastroPessoa/dados-cadastro-pessoa-service';
import { DataMaskDirective } from '../../shared/directives/mask/data-mask-directive';

@Component({
  selector: 'app-formulario-cadastro-pessoa',
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    KeyValuePipe,
    TitleCasePipe,
    MatTooltipModule,
    DataMaskDirective,
  ],
  templateUrl: './formulario-cadastro-pessoa.html',
  styleUrl: './formulario-cadastro-pessoa.scss',
})
export class FormularioCadastroPessoa {
  protected cadastroService = inject(DadosCadastroPessoaService);
  protected stepper = viewChild<MatStepper>('stepper');

  protected formInfoType = Object.values(this.cadastroService.formPersonalInfoType);
  protected formContactType = Object.values(this.cadastroService.formPersonalContactType);
  protected formAddressType = Object.values(this.cadastroService.formPersonalAddressType);
  protected formIdentityInfoType = Object.values(this.cadastroService.formPersonalIdentityInfoType);

  constructor() {
    this.cadastroService.socialMediaArrayReset();
    this.cadastroService.resetForm();
    this.cadastroService.form.markAsUntouched();
  }

  registrarPessoa(): void {
    if (this.cadastroService.form.valid) {
      const enviarDados = this.cadastroService.getRawValue();
      console.log('Dados enviados: ', enviarDados);
      this.cadastroService.resetForm();
      this.stepper()?.reset();
    } else {
      this.cadastroService.form.markAllAsTouched();
    }
  }

  addSocialMediaURLItem(): void {
    this.cadastroService.addSocialMediaItem();
  }
  removeSocialMediaURLItem(index: number): void {
    this.cadastroService.removeSocialMediaItem(index);
  }
}
