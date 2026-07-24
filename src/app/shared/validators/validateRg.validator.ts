import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function validateRg(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('Iniciando validação de RG');
    const isValid = true;
    return isValid ? null : { cpfCnpjInvalido: true };
  };
}
