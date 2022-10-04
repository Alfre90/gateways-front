import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, HeaderModule, MaterialModule]
})
export class HomePageModule {}
