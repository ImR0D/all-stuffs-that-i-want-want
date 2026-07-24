import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function validatePassport(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('Iniciando validação de Passaporte');
    const isValid = true;
    return isValid ? null : { cpfCnpjInvalido: true };
  };
}
