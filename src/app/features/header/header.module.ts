import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainHeaderComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MainHeaderComponent]
})
export class HeaderModule {}
