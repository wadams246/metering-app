import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmeterCardComponent } from './submeter-card/submeter-card.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { SubmeterListComponent } from './submeter-list/submeter-list.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { SubmeterFormComponent } from './submeter-form/submeter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmeterCardComponent,
    ToggleSwitchComponent,
    SubmeterListComponent,
    DeviceListComponent,
    SubmeterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
