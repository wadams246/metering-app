import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { SubmeterListComponent } from './submeter-list/submeter-list.component';

const routes: Routes = [
  { path: '', component: DeviceListComponent },
  { path: 'submeterlist', component: SubmeterListComponent },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
