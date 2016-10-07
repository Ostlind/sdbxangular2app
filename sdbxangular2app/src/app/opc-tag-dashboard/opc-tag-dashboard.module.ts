import { NgModule } from '@angular/core';
import { OpcTagDashboardComponent }   from './opc-tag-dashboard.component';
import { OpcTagModule, OpcTagService } from '../opc-tag/shared';
import { SharedModule } from '../shared';

@NgModule({
  imports: [ OpcTagModule, SharedModule ],
  exports: [ OpcTagDashboardComponent],
  declarations: [OpcTagDashboardComponent],
  providers: [OpcTagService],
})

export class OpcTagDashboardModule { }
