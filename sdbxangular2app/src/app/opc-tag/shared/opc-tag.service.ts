import { Injectable, Inject } from '@angular/core';
import { SignalrWindow, OpcConfig, OpcTag } from './opc-tag.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import 'jquery';

import  'ms-signalr-client';

@Injectable()
export class OpcTagService {

  private hubConnection: any;

  private hubProxy: any;

  public OpcTagList: Array<OpcTag>;

  constructor( @Inject(SignalrWindow) private window: SignalrWindow, @Inject('opc.config') private opcConfig: OpcConfig) {

    if (this.window.$ === undefined || this.window.$.hubConnection === undefined) {

      throw new Error(`The variable '$' or the .hubConnection() function are not defined...please check the SignalR scripts have 
      been loaded properly`);

    }


    this.hubConnection = this.window.$.hubConnection();

    this.hubConnection.url = opcConfig.url;

    this.hubProxy = this.hubConnection.createHubProxy(opcConfig.hubName);

    this.hubConnection.qs = { 'name': opcConfig.clientName };

    this.hubConnection.qs['tagNameList'] = JSON.stringify(opcConfig.opcTagList);

    this.OpcTagList =   opcConfig.opcTagList;

  }

  getOpcTagList(): Observable<OpcTag[]> {

    return Observable.from(this.OpcTagList).toArray();
  };

  start(): void {

    this.hubConnection.start();
  };

  sub(): Observable<OpcTag> {


    return Observable.fromEvent<OpcTag>(this.hubProxy, 'UpdateTagValue')
    .do((opcTagItem: OpcTag) => {  console.log('Tag Name: ' + opcTagItem.TagName +
     ' Value: ' + opcTagItem.Value + ' Scan Time: ' + opcTagItem.ScanTime + ' Quality: ' + opcTagItem.Quality); });
    // Try to find an observable that we already created for the requested
    //  channel

  };

}
