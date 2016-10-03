/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from'./shared';
import { AppComponent } from './app.component';
import { Sdbxangular2appRoutingModule } from './app-routing.module';
import { OpcTagDashboardModule } from './opc-tag-dashboard';
import { OpcTagService, OpcConfig, SignalrWindow, OpcTag, OpcTagModule } from './opc-tag/shared';


describe('App: Sdbxangular2app', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
        imports: [
    SharedModule,
    OpcTagModule,
    OpcTagDashboardModule,
    Sdbxangular2appRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
