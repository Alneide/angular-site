import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [{
  path: '', component: LoginComponent
},
{
  path: 'dashboard',
  loadChildren: () => import('./view/dashboard/dashboard.module').then(m => m.DashboardModule),
},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
