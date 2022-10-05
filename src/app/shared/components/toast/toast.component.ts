import { Component, TemplateRef } from '@angular/core';
import { AppToastService } from '@core/services/toast.service';

@Component({
  selector: 'gw-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  constructor(public toastService: AppToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
