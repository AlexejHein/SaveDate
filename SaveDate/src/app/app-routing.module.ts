import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Auth/login/login.component";
import {DashboardComponent} from "./Main/dashboard/dashboard.component";
import {AddDateComponent} from "./Management/add-date/add-date.component";
import {EditDateComponent} from "./Management/edit-date/edit-date.component";
import {ShowDateComponent} from "./Management/show-date/show-date.component";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }, {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'add-date', component: AddDateComponent
  },
  {
    path: 'edit-date', component: EditDateComponent
  },
  {
    path: 'show-date', component: ShowDateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
