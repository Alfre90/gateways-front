import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { MaterialModule } from '@core/material/material.module';
import { HeaderModule } from '@features/header/header.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, HeaderModule, MaterialModule]
})
export class HomePageModule {}
