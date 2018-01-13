import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatListModule,
  MatButtonModule,
  } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class MaterialModule { }
