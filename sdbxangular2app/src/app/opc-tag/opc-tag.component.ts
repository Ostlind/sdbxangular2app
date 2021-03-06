import { Input, Component, OnInit, Inject, Injectable } from '@angular/core';

// import * as aflogo from '..\\..\\assets\\img\\AF.png';

@Component({

  selector: 'opc-tag',
  templateUrl: './opc-tag.component.html',
  styleUrls: ['./opc-tag.component.scss'],
})
export class OpcTagComponent {

  // AfLogo = aflogo;

  @Input() TagName: string
  @Input() Value: string
  @Input() Quality: string

  constructor() {

  }

  ngOnInit() {


    console.log('hello `OpcTag` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
}
