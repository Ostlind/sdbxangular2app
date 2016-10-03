import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpcTagDashboardComponent } from './opc-tag-dashboard'
import { AppComponent } from './app.component'
const routes: Routes = [
{
  path:'',
  redirectTo: '/app',
  pathMatch: 'full'
},
{ path: 'app', component: AppComponent },
{ path: 'opcdashboard', component: OpcTagDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Sdbxangular2appRoutingModule { }
