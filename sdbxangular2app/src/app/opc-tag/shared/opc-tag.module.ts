import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { OpcTagComponent } from '../opc-tag.component';
import { SharedModule } from '../../shared/shared.module';

// Material Design
  

@NgModule({
    imports: [SharedModule],
    exports: [OpcTagComponent],
    declarations: [OpcTagComponent],
    providers: [],
})
export class OpcTagModule { }
