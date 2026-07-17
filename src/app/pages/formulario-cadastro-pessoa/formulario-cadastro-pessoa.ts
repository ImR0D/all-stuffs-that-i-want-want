import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import SocialMediaType from '../../shared/models/social-media.models';
import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

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
  ],
  templateUrl: './formulario-cadastro-pessoa.html',
  styleUrl: './formulario-cadastro-pessoa.scss',
})
export class FormularioCadastroPessoa {
  private _formBuilder = inject(FormBuilder);

  readonly personalFirstname = new FormControl<string>('', [Validators.required]);
  readonly personalMiddlename = new FormControl<string>('', [Validators.nullValidator]);
  readonly personalLastname = new FormControl('', [Validators.required]);
  readonly personalNickname = new FormControl('', [Validators.nullValidator]);
  readonly personalBirthday = new FormControl('', [Validators.nullValidator]);
  readonly personalFatherName = new FormControl('', [Validators.nullValidator]);
  readonly personalMotherName = new FormControl('', [Validators.nullValidator]);

  readonly identityRG = new FormControl<string>('');
  readonly identityCPF = new FormControl<string>('');
  readonly identityCNH = new FormControl<string>('');
  readonly identityPassport = new FormControl<string>('');
  readonly identityCTPS = new FormControl<string>(''); // Carteira de trabalho
  readonly identityProfissionalIdentity = new FormControl<string>(''); // OAB, CREA, CRM, etc...
  readonly identityMilitaryDocument = new FormControl<string>('');
  readonly identityRneCrnm = new FormControl<string>(''); // Estrangeiros

  readonly contactEmail = new FormControl<string>('');
  readonly contactLandline = new FormControl<string>(''); // Telefone fixo
  readonly contactCellphone = new FormControl<string>(''); // Celular
  readonly contactSocialMedia = new FormControl<{ typeMedia: string; url: string } | undefined>(
    undefined,
  ); // Armazenar como Tipo e URL

  readonly addressStreet = new FormControl<string>('');
  readonly addressNumber = new FormControl<number | undefined>(undefined);

  readonly socialMediaList = SocialMediaType;

  personalInfo = this._formBuilder.group({
    firstName: this.personalFirstname,
    middleName: this.personalMiddlename,
    lastName: this.personalLastname,
    nickName: this.personalNickname,
    birthday: this.personalBirthday,
    fatherName: this.personalFatherName,
    motherName: this.personalMotherName,
  });

  personalContact = this._formBuilder.group({
    email: this.contactEmail,
    landline: this.contactLandline,
    cellphone: this.contactCellphone,
    socialMedia: this.contactSocialMedia,
  });

  personalAddress = this._formBuilder.group({
    street: this.addressStreet,
    number: this.addressNumber,
  });

  personalIdentityInfo = this._formBuilder.group({
    RG: this.identityRG,
    CPF: this.identityCPF,
    CNH: this.identityCNH,
    Passport: this.identityPassport,
    CTPS: this.identityCTPS,
    ProfissionalIdentity: this.identityProfissionalIdentity,
    MilitaryDocument: this.identityMilitaryDocument,
    RNE_CRNM: this.identityRneCrnm,
  });

  dadosCadastroPessoa = this._formBuilder.group({
    personalInfo: this.personalInfo,
    personalContact: this.personalContact,
    personalAddress: this.personalAddress,
    personalIdentityInfo: this.personalIdentityInfo,
  });
}
