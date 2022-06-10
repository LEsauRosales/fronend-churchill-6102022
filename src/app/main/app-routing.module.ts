import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { LogisticTransportationComponent } from './logistic-transportation/logistic-transportation.component';

import { SecurityAlarmsPanicButtonsComponent } from './security-alarms-panic-buttons/security-alarms-panic-buttons.component';
import { EmergencyEmployeeNumberComponent } from './emergency-employee-number/emergency-employee-number.component';
import { VehicleTrackingSystemComponent } from './vehicle-tracking-system/vehicle-tracking-system.component';
import { IncidentsManagementAlertsComponent } from './incidents-management-alerts/incidents-management-alerts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CctvComponent } from './cctv/cctv.component';
import { LossPreventionComponent } from './loss-prevention/loss-prevention.component';
import { InfohubComponent } from './infohub/infohub.component';

const routes: Routes = [
    // {
    //     path:'dashboard', component: DashboardComponent
    // },
    {
        path:'infohub', component: InfohubComponent
    },
    {
        path:'logistic-transportation', component: LogisticTransportationComponent
    },
    {
        path:'vehicle-tracking-system', component: VehicleTrackingSystemComponent
    },
    {
        path:'security-alarms-panic-buttons', component: SecurityAlarmsPanicButtonsComponent
    },
    {
        path:'emergency-employee-number', component: EmergencyEmployeeNumberComponent
    },
    {
        path:'incidents-management-alerts', component: IncidentsManagementAlertsComponent
    },
    {
        path:'cctv', component: CctvComponent
    },
    {
        path:'loss-prevention', component: LossPreventionComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        TranslateModule,
        FuseSharedModule],
    exports: [RouterModule]
  })

export class AppRoutingModule
{
}
