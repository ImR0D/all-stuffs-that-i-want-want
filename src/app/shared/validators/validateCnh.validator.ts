import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function validateCnh(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('Iniciando validação de CNH');
    const isValid = true;
    return isValid ? null : { cpfCnpjInvalido: true };
  };
}
