import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function validateCtps(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('Iniciando validação de CTPS');
    const isValid = true;
    return isValid ? null : { cpfCnpjInvalido: true };
  };
}
