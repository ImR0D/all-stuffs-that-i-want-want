import { inject, Service } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import SocialMediaTypes from '../../shared/models/social-media.models';

@Service()
export class DadosCadastroPessoaService {
  private _fb = inject(FormBuilder);

  public readonly socialMediaList = SocialMediaTypes;

  public readonly formPersonalInfoType = {
    firstName: {
      id: 'formPersonalInfoFirstName',
      label: 'Firstname',
      formControlName: 'firstName',
      mask: 'TEXT',
    },
    middleName: {
      id: 'formPersonalInfoMiddleName',
      label: 'Middlename',
      formControlName: 'middleName',
      mask: 'TEXT',
    },
    lastName: {
      id: 'formPersonalInfoLastName',
      label: 'Lastname',
      formControlName: 'lastName',
      mask: 'TEXT',
    },
    nickName: {
      id: 'formPersonalInfoNickname',
      label: 'Nickname',
      formControlName: 'nickName',
      mask: 'TEXT',
    },
    birthday: {
      id: 'formPersonalInfoBirthday',
      label: 'Birthday',
      formControlName: 'birthday',
      mask: 'BIRTHDAY',
    },
    fatherName: {
      id: 'formPersonalInfoFatherName',
      label: "Father's Name",
      formControlName: 'fatherName',
      mask: 'TEXT',
    },
    motherName: {
      id: 'formPersonalInfoMotherName',
      label: "Mother's Name",
      formControlName: 'motherName',
      mask: 'TEXT',
    },
  } as const;

  public readonly formPersonalContactType = {
    email: {
      id: 'formPersonalContactEmail',
      label: 'E-mail',
      formControlName: 'email',
      mask: 'EMAIL',
    },
    landline: {
      id: 'formPersonalContactLandline',
      label: 'Landline',
      formControlName: 'landline',
      mask: 'LANDLINE',
    },
    cellphone: {
      id: 'formPersonalContactCellphone',
      label: 'Cellphone',
      formControlName: 'cellphone',
      mask: 'CELLPHONE',
    },
  } as const;

  public readonly formPersonalAddressType = {
    street: {
      id: 'formPersonalAddressStreet',
      label: 'Street',
      formControlName: 'street',
      mask: 'TEXT',
    },
    number: {
      id: 'formPersonalAddressNumber',
      label: 'Number',
      formControlName: 'number',
      mask: 'DIGITS',
    },
    complement: {
      id: 'formPersonalAddressComplement',
      label: 'Complement',
      formControlName: 'complement',
      mask: 'ALPHANUMERIC',
    },
    cep: {
      id: 'formPersonalAddressCep',
      label: 'CEP',
      formControlName: 'cep',
      mask: 'CEP',
    },
    neighborhood: {
      id: 'formPersonalAddressNeighborhood',
      label: 'Neighborhood',
      formControlName: 'neighborhood',
      mask: 'ALPHANUMERIC',
    },
    city: {
      id: 'formPersonalAddressCity',
      label: 'City',
      formControlName: 'city',
      mask: 'TEXT',
    },
    country: {
      id: 'formPersonalAddressCountry',
      label: 'Country',
      formControlName: 'country',
      mask: 'TEXT',
    },
    uf: {
      id: 'formPersonalAddressUF',
      label: 'UF',
      formControlName: 'uf',
      mask: 'UF',
    },
  } as const;

  public readonly formPersonalIdentityInfoType = {
    rg: {
      id: 'formPersonalIdentityInfoRG',
      label: 'RG',
      formControlName: 'RG',
      mask: 'RG',
    },
    cnpj: {
      id: 'formPersonalIdentityInfoCnpj',
      label: 'CNPJ',
      formControlName: 'CNPJ',
      mask: 'CNPJ',
    },
    cpf: {
      id: 'formPersonalIdentityInfoCpf',
      label: 'CPF',
      formControlName: 'CPF',
      mask: 'CPF',
    },
    cnh: {
      id: 'formPersonalIdentityInfoCnh',
      label: 'CNH',
      formControlName: 'CNH',
      mask: 'CNH',
    },
    passport: {
      id: 'formPersonalIdentityInfoPassport',
      label: 'Passport',
      formControlName: 'passport',
      mask: 'PASSPORT',
    },
    ctps: {
      id: 'formPersonalIdentityInfoCTPS',
      label: 'CTPS',
      formControlName: 'CTPS',
      mask: 'CTPS',
    },
    proid: {
      id: 'formPersonalIdentityInfoProid',
      label: 'ProfissionalIdentity',
      formControlName: 'profissionalIdentity',
      mask: 'ProfissionalID',
    },
    military: {
      id: 'formPersonalIdentityInfoMilitary',
      label: 'Military',
      formControlName: 'militaryDocument',
      mask: 'Military',
    },
    rnecrnm: {
      id: 'formPersonalRneCrnm',
      label: 'RNE/CRNM',
      formControlName: 'RNE_CRNM',
      mask: 'RNECRNM',
    },
  } as const;

  readonly form = this._fb.group({
    personalInfo: this._fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      nickName: [''],
      birthday: [''],
      fatherName: [''],
      motherName: [''],
    }),
    personalContact: this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      landline: [''],
      cellphone: [''],
      socialMedia: this._fb.array([this.criarGrupoSocialMedia()]),
    }),
    personalAddress: this._fb.group({
      street: [''],
      number: this._fb.control<number | undefined>(undefined),
      complement: [''],
      cep: [''],
      neighborhood: [''],
      city: [''],
      country: [''],
      uf: [''],
    }),
    personalIdentityInfo: this._fb.group({
      RG: [''],
      CPF: [''],
      CNPJ: [''],
      CNH: [''],
      passport: [''],
      CTPS: [''],
      profissionalIdentity: [''],
      militaryDocument: [''],
      RNE_CRNM: [''],
    }),
  });

  get personalInfo() {
    return this.form.controls.personalInfo;
  }
  get personalContact() {
    return this.form.controls.personalContact;
  }
  get personalAddress() {
    return this.form.controls.personalAddress;
  }
  get personalIdentityInfo() {
    return this.form.controls.personalIdentityInfo;
  }

  getRawValue() {
    return this.form.getRawValue();
  }

  resetForm() {
    this.form.reset();
  }

  get socialMediaArray(): FormArray<FormGroup> {
    return this.personalContact.controls.socialMedia as FormArray<FormGroup>;
  }
  socialMediaArrayReset(): void {
    this.personalContact.controls.socialMedia.clear();
    this.addSocialMediaItem();
  }

  criarGrupoSocialMedia(): FormGroup {
    return this._fb.group({
      mediaType: [''],
      mediaURL: [''],
    });
  }

  addSocialMediaItem(): void {
    this.socialMediaArray.push(this.criarGrupoSocialMedia());
  }

  removeSocialMediaItem(index: number): void {
    if (this.socialMediaArray.length > 1) {
      this.socialMediaArray.removeAt(index);
    }
  }
}
