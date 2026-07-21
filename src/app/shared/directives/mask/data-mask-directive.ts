import { Directive, ElementRef, forwardRef, HostListener, inject, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MaskTypes } from '../../models/mask.type';

@Directive({
  selector: 'input[appMask]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DataMaskDirective),
      multi: true,
    },
  ],
})
export class DataMaskDirective implements ControlValueAccessor {
  private elementRef = inject(ElementRef<HTMLInputElement>);

  public maskType = input<MaskTypes | ''>('', { alias: 'appMask' });

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  private unmask(value: string): string {
    if (!value) return '';

    const type = this.maskType();

    if (type === 'EMAIL' || type === 'URL') {
      return value.trim();
    }

    if (type === 'TEXT') {
      return value.replace(/[^\p{L}\s]/gu, '');
    }

    if (type === 'ALPHANUMERIC') {
      return value.replace(/\W\s/g, '');
    }

    if (type === 'UF') {
      return value
        .replace(/[^\p{L}]/gu, '')
        .slice(0, 2)
        .toUpperCase();
    }

    if (type === 'CNPJ' || type === 'PASSPORT' || type === 'ProfissionalID' || type === 'RNECRNM') {
      return value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    }

    return value.replace(/\D/g, '');
  }

  private applyMask(value: string): string {
    if (!value) return '';

    const type = this.maskType();

    switch (type) {
      case 'CEP':
        return value.slice(0, 8).replace(/(\d{5})(\d{1,3})$/, '$1-$2');

      case 'CPF':
        return value
          .slice(0, 11)
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      case 'CNPJ':
        return value
          .slice(0, 14)
          .toUpperCase()
          .replace(/^([a-zA-Z0-9]{2})([a-zA-Z0-9])/, '$1.$2')
          .replace(/^([a-zA-Z0-9]{2})\.([a-zA-Z0-9]{3})([a-zA-Z0-9])/, '$1.$2.$3')
          .replace(
            /^([a-zA-Z0-9]{2})\.([a-zA-Z0-9]{3})\.([a-zA-Z0-9]{3})([a-zA-Z0-9])/,
            '$1.$2.$3/$4',
          )
          .replace(/\/([a-zA-Z0-9]{4})([a-zA-Z0-9]{1,2})$/, '/$1-$2');

      case 'RG':
        return value
          .slice(0, 9)
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1})$/, '$1-$2');

      case 'CNH':
        return value.slice(0, 11);

      case 'CELLPHONE':
        return value
          .slice(0, 11)
          .replace(/^(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{5})(\d{1,4})$/, '$1-$2');

      case 'LANDLINE':
        return value
          .slice(0, 10)
          .replace(/^(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d{1,4})$/, '$1-$2');

      case 'BIRTHDAY':
        return value
          .slice(0, 8)
          .replace(/^(\d{2})(\d)/, '$1/$2')
          .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');

      case 'ALPHANUMERIC':
        return value.replace(/\W\s/g, '');

      case 'TEXT':
        return value.replace(/[^\p{L}\s]/gu, '');

      case 'DIGITS':
        return value.replace(/\D/g, '');

      case 'UF':
        return value
          .slice(0, 2)
          .replace(/[^\p{L}]/gu, '')
          .toUpperCase();

      default:
        return value;
    }
  }

  writeValue(value: string): void {
    const rawValue = value ? this.unmask(String(value)) : '';
    this.elementRef.nativeElement.value = this.applyMask(rawValue);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.elementRef.nativeElement.disabled = isDisabled;
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input) return;

    const originalSelectionStart = input.selectionStart ?? input.value.length;
    const previousLength = input.value.length;

    const rawValue = this.unmask(input.value);
    const maskedValue = this.applyMask(rawValue);

    this.elementRef.nativeElement.value = maskedValue;

    const lengthDiff = maskedValue.length - previousLength;
    const newCursorPosition = Math.max(0, originalSelectionStart + lengthDiff);
    input.setSelectionRange(newCursorPosition, newCursorPosition);

    this.onChange(rawValue);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }
}
