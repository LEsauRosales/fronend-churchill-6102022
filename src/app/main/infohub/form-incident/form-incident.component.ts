import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncidentsNewIncidentReportRegister } from 'app/interfaces/twitter-accounts';
import { ChIncidentsApiService } from 'app/services/ch-incidents-api.service';
import * as moment from 'moment';

const hoy = moment ();

export const MY_FORMATS = {
  
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

interface Names {
  value: string;
  viewValue: string;
}

interface Tipo {
  value: string;
  viewValue: string;
}
                  
interface Origen {
  value: string;
  viewValue: string;
}

interface personalAsociado {
  value: string;
  viewValue: string;
}

interface Ubicacion {
  value: string;
  viewValue: string;
}

interface Causa {
  value: string;
  viewValue: string;
}

interface Protocolo {
  value: string;
  viewValue: string;
}

interface Modules {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-incident',
  templateUrl: './form-incident.component.html',
  styleUrls: ['./form-incident.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class FormIncidentComponent implements OnInit {

  IncidentsReportRegister: IncidentsNewIncidentReportRegister = new IncidentsNewIncidentReportRegister();
  formIncidentsReportRegister: FormGroup

  date = new FormControl(moment());

    tipo: Tipo[] = [
        {value: 'steak-0', viewValue: 'Volcadura'},
        {value: 'pizza-1', viewValue: 'Impacto'},
        {value: 'tacos-2', viewValue: 'Sismos'},
      ];

      origen: Origen[] = [
        {value: 'steak-0', viewValue: 'Lista de ubicaciones'},
      ];

      personalAsociado: personalAsociado[] = [
        {value: 'steak-0', viewValue: 'Juan Gómez'},
        {value: 'pizza-1', viewValue: 'Ana Perez'},
        {value: 'tacos-2', viewValue: 'Roberto Gonzalez'},
      ];

      ubicacion: Ubicacion[] = [
        {value: 'steak-0', viewValue: 'Lista de ubicaciones'},
      ];

      causa: Causa[] = [
        {value: 'steak-0', viewValue: 'Naturales'},
        {value: 'pizza-1', viewValue: 'Sociales'},
        {value: 'tacos-2', viewValue: 'Errores'},
      ];

      protocolo: Protocolo[] = [
        {value: 'steak-0', viewValue: 'Lista de protocolos'},
      ];

      divisiondeNegocio: string[] = ['Comercialización', 'Helado', 'Logística'];

  constructor(private fb: FormBuilder,
    private incidentsService: ChIncidentsApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createForm();
     }

     createForm() {
      this.formIncidentsReportRegister = this.fb.group({
        rol    : ['', Validators.required],
        name    : ['', Validators.required],
        business_division    : ['', Validators.required],
        incident_type    : ['', Validators.required],
        incident_origin    : ['', Validators.required],
        incident_date    : ['', Validators.required],
        incident_hour    : ['', Validators.required],
        incident_ubication    : ['', Validators.required],
        protocolo    : ['', Validators.required],
        incident_description    : ['', Validators.required],
        incident_cause    : ['', Validators.required],
        incident_solution    : ['', Validators.required],
        phone_number    : ['', Validators.required],
        seguimiento    : ['', Validators.required],
        validation_solution :  ['', Validators.required],
      });
    }

  ngOnInit(): void {
    console.log(this.data)
    console.log(this.data.value)
  }

  createrNewIncidentsReport(){  
      console.log("creando reporte de incidente nuevo")
      console.log(this.formIncidentsReportRegister)

      console.log("esta es la division de negocio")
      console.log(this.formIncidentsReportRegister.value.business_division[0])

      this.formIncidentsReportRegister.value.business_division = this.formIncidentsReportRegister.value.business_division[0]
      console.log("luego de darle el valor")
      console.log(this.formIncidentsReportRegister)
      this.incidentsService.postNewInfoHubReport(this.formIncidentsReportRegister.value)
      .subscribe(data=>{
          console.log(data);
      });    
    }
}
