import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// Material Design
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule } from '@angular2-material/sidenav'


@NgModule({
    imports: [CommonModule, FormsModule,MdCardModule,MdButtonModule,MdSidenavModule, RouterModule],
    declarations: [],
    exports: [ CommonModule, FormsModule,HttpModule,MdCardModule,MdButtonModule,MdSidenavModule, RouterModule ]
})
export class SharedModule { }