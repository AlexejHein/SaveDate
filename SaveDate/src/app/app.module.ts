import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Auth/login/login.component';
import { RegistrierungComponent } from './Auth/registrierung/registrierung.component';
import { ResetpwComponent } from './Auth/resetpw/resetpw.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { SchuelerDashboardComponent } from './Main/schueler-dashboard/schueler-dashboard.component';
import { ShowDateComponent } from './Management/show-date/show-date.component';
import { AddDateComponent } from './Management/add-date/add-date.component';
import { EditDateComponent } from './Management/edit-date/edit-date.component';
import { SchuelerEditComponent } from './Edit/schueler-edit/schueler-edit.component';
import { NavbarComponent } from './Navigation/navbar/navbar.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrierungComponent,
    ResetpwComponent,
    DashboardComponent,
    SchuelerDashboardComponent,
    ShowDateComponent,
    AddDateComponent,
    EditDateComponent,
    SchuelerEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
