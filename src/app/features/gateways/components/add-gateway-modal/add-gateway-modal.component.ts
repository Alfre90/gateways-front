import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { GatewayModel } from '@features/gateways/models/gateway';
import { CustomValidators } from '@features/gateways/validators/custom-validators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gw-add-gateway-modal',
  templateUrl: './add-gateway-modal.component.html',
  styleUrls: ['./add-gateway-modal.component.scss']
})
export class AddGatewayModalComponent implements OnInit {
  @Input() saving: boolean = false;
  @Input() isEdit: boolean = false;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('addGatewayModal') addGatewayModal: any;
  addGatewayForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.addGatewayForm = this.formBuilder.group({
      id: new FormControl(),
      serialNumber: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      iPv4: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          CustomValidators.validateIpV4()
        ])
      )
    });
  }

  get errorControl() {
    return this.addGatewayForm.controls;
  }

  ngOnInit(): void {}

  open(data?: GatewayModel) {
    this.modalService
      .open(this.addGatewayModal, {
        centered: true
      })
      .result.then(
        (result) => {},
        (reason) => {
          this.addGatewayForm.reset();
        }
      );
    if (data) {
      this.addGatewayForm.patchValue(data);
    }
  }
}
