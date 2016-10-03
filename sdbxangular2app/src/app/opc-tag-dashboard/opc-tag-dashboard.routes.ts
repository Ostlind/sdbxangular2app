import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpcTagComponent } from '../opc-tag/'
const appRoutes: Routes = [

  [  { path: 'opc-tag', component: OpcTagComponent  }]
]

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);