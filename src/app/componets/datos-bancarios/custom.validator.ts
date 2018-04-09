import { AbstractControl } from '@angular/forms';

export function CustomValidator(control: AbstractControl) {
  if(control.value != 'david')
      return { valido: true };
  return null;
}
