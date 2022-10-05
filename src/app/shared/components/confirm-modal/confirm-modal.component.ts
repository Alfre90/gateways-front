import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gw-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  id: number = -1;
  @Input() type: string = '';
  @Input() deleting: boolean = false;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('confirmModal') confirmModal: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(id: number) {
    this.id = id;
    this.modalService.open(this.confirmModal, {
      centered: true
    });
  }
}
