import { NgModule } from '@angular/core';
import { OpcTagComponent } from '../opc-tag.component';
import { SharedModule } from '../../shared/shared.module';

// Material Design

@NgModule({
    imports: [SharedModule],
    exports: [OpcTagComponent],
    declarations: [OpcTagComponent]
})
export class OpcTagModule { }
