import { inject, Service } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import SocialMediaTypes from '../../shared/models/social-media.models';

@Service()
export class DadosCadastroPessoaService {
  private _fb = inject(FormBuilder);

  public readonly socialMediaList = SocialMediaTypes;

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
      email: [''],
      landline: [''],
      cellphone: [''],
      socialMedia: this._fb.array([this.criarGrupoSocialMedia()]),
    }),
    personalAddress: this._fb.group({
      street: [''],
      number: this._fb.control<number | undefined>(undefined),
    }),
    personalIdentityInfo: this._fb.group({
      RG: [''],
      CPF: [''],
      CNH: [''],
      Passport: [''],
      CTPS: [''],
      ProfissionalIdentity: [''],
      MilitaryDocument: [''],
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
