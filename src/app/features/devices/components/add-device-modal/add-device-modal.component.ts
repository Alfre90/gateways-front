import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { DeviceModel } from '@features/devices/models/device';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gw-add-device-modal',
  templateUrl: './add-device-modal.component.html',
  styleUrls: ['./add-device-modal.component.scss']
})
export class AddDeviceModalComponent implements OnInit {
  @Input() saving: boolean = false;
  @Input() isEdit: boolean = false;
  @Input() gatewayId: number = -1;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('addDeviceModal') addDeviceModal: any;
  addDeviceForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.addDeviceForm = this.formBuilder.group({
      id: new FormControl(),
      uid: new FormControl(),
      gatewayId: new FormControl(),
      vendor: new FormControl('', Validators.required),
      status: new FormControl()
    });
  }

  get errorControl() {
    return this.addDeviceForm.controls;
  }

  ngOnInit(): void {}

  open(data?: DeviceModel) {
    this.addDeviceForm.reset();
    this.modalService
      .open(this.addDeviceModal, {
        centered: true
      })
      .result.then(
        (result) => {},
        (reason) => {
          this.addDeviceForm.reset();
        }
      );
    if (data) {
      this.addDeviceForm.patchValue(data);
    } else {
      this.addDeviceForm.controls['gatewayId'].setValue(this.gatewayId);
      this.addDeviceForm.controls['status'].setValue(false);
    }
  }
}
