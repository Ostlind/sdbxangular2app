import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from'./shared';
import { AppComponent } from './app.component';
import { Sdbxangular2appRoutingModule } from './app-routing.module';
import { OpcTagDashboardModule } from './opc-tag-dashboard';
import { OpcConfig, SignalrWindow, OpcTag, OpcTagModule } from './opc-tag/shared';
import { TestComponent } from './test/test.component';


let opcConfig = new OpcConfig();
opcConfig.clientName = 'signalrclient1';
opcConfig.hubName = 'OpcTagHub';
opcConfig.url = 'http://127.0.0.1:53211/signalr';

let opctagItem = new OpcTag('Simulation Examples.Functions.Ramp1', 1000, '0', 'good', 1);
let opctagItem1 = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem2 = new OpcTag('Simulation Examples.Functions.Ramp1', 250, '0', 'good', 1);
let opctagItem3 = new OpcTag('Simulation Examples.Functions.Ramp1', 2500, '0', 'good', 1);
let opctagItem4 = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem5  = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem6  = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem7  = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem8  = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem9  = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem10 = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem11 = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem12 = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
let opctagItem13 = new OpcTag('Simulation Examples.Functions.Ramp1', 5000, '0', 'good', 1);
opcConfig.opcTagList = [
  opctagItem,
  opctagItem1,
  opctagItem2,
  opctagItem3,
  opctagItem4,
  opctagItem5,
  opctagItem6,
  opctagItem7,
  opctagItem8,
  opctagItem9,
  opctagItem10,
  opctagItem11,
  opctagItem12,
  opctagItem13,
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    SharedModule,
    OpcTagModule,
    OpcTagDashboardModule,
    Sdbxangular2appRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{ provide: SignalrWindow, useValue: window }, { provide: 'opc.config', useValue: opcConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
