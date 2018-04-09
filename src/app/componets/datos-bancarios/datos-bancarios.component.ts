import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators }  from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {
  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup(
      {
        'tipoVia': new FormControl('',
          [Validators.required,
          Validators.minLength(3)]),
          'domicilio': new FormControl('',
            [Validators.required,
            Validators.minLength(3)]),
            'numero': new FormControl('',
              [Validators.required,
              Validators.minLength(3)]),
              'otros': new FormControl('',
                [Validators.required,
                Validators.minLength(3)]),
                'codigoPostal': new FormControl('',
                  [Validators.required,
                  Validators.minLength(3)]),
                    'telMovil': new FormControl('',
                      [Validators.required,
                      Validators.minLength(3)]),
                      'correo': new FormControl('',
                        [Validators.required,
                        Validators.minLength(3)]),
                        'entradaDom': new FormControl('',
                          [Validators.required,
                          Validators.minLength(3)]),
                          'telFijo': new FormControl('',
                            [Validators.required,
                            Validators.minLength(3)]),
                            'contrato': new FormControl('',
                              [Validators.required,
                              Validators.minLength(3)]),
                              'inicioContrato': new FormControl('',
                                [Validators.required,
                                Validators.minLength(3)]),
                                'finContrato': new FormControl('',
                                  [Validators.required,
                                  Validators.minLength(3)]),
                                  'ocupacion': new FormControl('',
                                    [Validators.required,
                                    Validators.minLength(3)]),

                                    'empresa': new FormControl('',
                                      [Validators.required,
                                      Validators.minLength(3)]),
                                      'telEmpresa': new FormControl('',
                                        [Validators.required,
                                        Validators.minLength(3)]),
                                        'cif': new FormControl('',
                                          [Validators.required,
                                          Validators.minLength(3)]),
                                          'dirEmpresa': new FormControl('',
                                            [Validators.required,
                                            Validators.minLength(3)]),
                                            'ingMes': new FormControl('',
                                              [Validators.required,
                                              Validators.minLength(3)]),

                                              'nif': new FormControl('',
                                                [Validators.required,
                                                Validators.minLength(3)]),
                                                'tipDocuconyuge': new FormControl('',
                                                  [Validators.required,
                                                  Validators.minLength(3)]),
                                                  'nombreconyu': new FormControl('',
                                                    [Validators.required,
                                                    Validators.minLength(3)]),
                                                    'primerApellido': new FormControl('',
                                                      [Validators.required,
                                                      Validators.minLength(3)]),
                                                      'segundoApellido': new FormControl('',
                                                        [Validators.required,
                                                        Validators.minLength(3)]),


        'civil': new FormControl('',
          [Validators.required,
          Validators.minLength(3)]),
          'paisnaciment': new FormControl('',
            [Validators.required,
            Validators.minLength(3)]),
            'nacionalidad': new FormControl('',
              [Validators.required,
              Validators.minLength(3)]),

              'sexo': new FormControl('',
                [Validators.required,
                Validators.minLength(3)]),
        'docu': new FormControl('',
          [Validators.required,
          Validators.minLength(3)]),
        'tipdocu': new FormControl('',
            [Validators.required,
            Validators.minLength(3)]),
        'nombre': new FormControl('',
          [Validators.required,
          Validators.minLength(3),
          CustomValidator]),

          'ape1': new FormControl('',
            [Validators.required,
            Validators.minLength(3)]),

          'ape2': new FormControl('',
              [Validators.required,
              Validators.minLength(3)]),

          'fecha': new FormControl('',
                  [Validators.required,
                  Validators.minLength(3)]),

          'mail': new FormControl('',
                          [Validators.required,
                          Validators.minLength(3)]),

           'provincia': new FormControl('',
                    [Validators.required,
                    Validators.minLength(3)]),
           'calle': new FormControl('',
               [Validators.required,
               Validators.minLength(3)]),
          'cp': new FormControl('',
              [Validators.required,
             Validators.minLength(3)])

      }
    );
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.forma.value)
  }

}
