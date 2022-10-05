import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MaterialModule } from '@core/material/material.module';

@NgModule({
  declarations: [ToastComponent, ConfirmModalComponent],
  imports: [CommonModule, NgbToastModule, MaterialModule],
  exports: [ToastComponent, ConfirmModalComponent]
})
export class SharedModule {}
