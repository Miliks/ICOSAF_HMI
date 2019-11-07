
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {TrackingComponent} from './tracking/tracking.component';
import {WmsGetDataComponent} from './wms-get-data/wms-get-data.component';
import {WmsInsertDataComponent} from './wms-insert-data/wms-insert-data.component';
import {IcosafMenuComponent} from './icosaf-menu/icosaf-menu.component';
import {LoginDTWINComponent} from './login-dtwin/login-dtwin.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Tracking', component: TrackingComponent},
  { path: 'WmsInsert', component: WmsInsertDataComponent},
  { path: 'WmsGet', component: WmsGetDataComponent},
  { path: 'IcosafHome', component: IcosafMenuComponent},
  { path: 'LoginDTWIN', component: LoginDTWINComponent},
  { path: '', redirectTo: '/Login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
