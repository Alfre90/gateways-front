import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MaterialModule } from '@core/material/material.module';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MainHeaderComponent]
})
export class HeaderModule {}
