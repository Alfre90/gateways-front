import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDeviceModalComponent } from './components/add-device-modal/add-device-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@core/material/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AddDeviceModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [AddDeviceModalComponent]
})
export class DevicesModule {}
