/* tslint:disable:no-unused-variable */

import { inject, async } from '@angular/core/testing';
import {InitHelper} from './init-helper';

describe('InitHelper', () => {

  it('should create an instance', () => {
    expect(new InitHelper()).toBeTruthy();
  });

  it('should return config list', () => {

       let sut = new InitHelper();
       let configList = sut.GetInitConfig();

       expect(configList).toBeTruthy();
  });

});
