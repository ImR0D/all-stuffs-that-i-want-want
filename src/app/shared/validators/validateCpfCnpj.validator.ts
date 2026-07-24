import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function validateCpfCnpj(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('Iniciando validação do CPF/CNPJ');
    const isValid = true;
    return isValid ? null : { cpfCnpjInvalido: true };
  };
}
