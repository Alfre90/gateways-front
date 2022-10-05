import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayModel } from '@features/gateways/models/gateway';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions } from '@ngrx/effects';
import { GatewaysStoreService } from '@store/services/gateways-store.service';
import { filter, take } from 'rxjs';
import * as GatewaysActions from '@store/states/gateways/gateways.actions';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';
import { AddGatewayModalComponent } from '../add-gateway-modal/add-gateway-modal.component';

@Component({
  selector: 'gw-gateways-list',
  templateUrl: './gateways-list.component.html',
  styleUrls: ['./gateways-list.component.scss']
})
export class GatewaysListComponent implements OnInit {
  gatewaysList$ = this.gatewaysService.allGateways$;
  totalItems$ = this.gatewaysService.totalItems$;
  loading$ = this.gatewaysService.loading$;
  page: number = 1;
  pageSize: number = 5;
  saving: boolean = false;
  isEdit: boolean = false;
  deleting: boolean = false;
  filters: string = '';
  timeout: any;
  sortBy: string = '';
  sortOrder: string = '';

  @ViewChild('confirmModal') confirmModal!: ConfirmModalComponent;
  @ViewChild('addGatewayModal') addGatewayModal!: AddGatewayModalComponent;

  constructor(
    private gatewaysService: GatewaysStoreService,
    private router: Router,
    private modalService: NgbModal,
    private actions$: Actions
  ) {}

  ngOnInit(): void {
    this.loadGateways(1);
  }

  loadGateways(page: number) {
    this.page = page;
    this.gatewaysService.loadGateways(
      (this.sortOrder == 'asc' ? '' : this.sortOrder == 'desc' ? '-' : '') +
        this.sortBy,
      '(Name|SerialNumber|IPv4)@=' + this.filters,
      page,
      this.pageSize
    );
  }

  // TrackBy function to allow specify the changes separately
  trackByFn(index: number, item: GatewayModel) {
    return item.id;
  }

  searchGateway() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.loadGateways(1);
    }, 500);
  }

  addGateway() {
    this.isEdit = false;
    this.addGatewayModal.open();
  }

  saveGateway(formData: any) {
    this.saving = true;
    if (!this.isEdit) {
      this.gatewaysService.addGateway(formData.value);
    } else {
      this.gatewaysService.editGateway(formData.value);
    }
    this.actions$
      .pipe(
        filter(
          (action) =>
            action.type === GatewaysActions.addGatewaySuccess.type ||
            action.type === GatewaysActions.addGatewayFailure.type ||
            action.type === GatewaysActions.editGatewaySuccess.type ||
            action.type === GatewaysActions.editGatewayFailure.type
        ),
        take(1)
      )
      .subscribe((action) => {
        if (
          action.type === GatewaysActions.addGatewaySuccess.type ||
          action.type === GatewaysActions.editGatewaySuccess.type
        ) {
          if (this.saving) {
            this.saving = false;
          }
          this.addGatewayModal.addGatewayForm.reset();
          this.modalService.dismissAll();
          this.loadGateways(this.page);
        } else if (
          action.type === GatewaysActions.addGatewayFailure.type ||
          action.type === GatewaysActions.editGatewayFailure.type
        ) {
          if (this.saving) {
            this.saving = false;
          }
        }
      });
  }

  gatewayClick(gateway: GatewayModel) {
    this.router.navigateByUrl('/gateways/' + gateway.id);
  }

  gatewayEdit(gateway: GatewayModel) {
    this.isEdit = true;
    this.addGatewayModal.open(gateway);
  }

  gatewayDelete(gateway: GatewayModel) {
    this.confirmModal.open(gateway.id);
  }

  deleteGateway(id: number) {
    this.gatewaysService.deleteGateway(id);
    this.actions$
      .pipe(
        filter(
          (action) =>
            action.type === GatewaysActions.deleteGatewaySuccess.type ||
            action.type === GatewaysActions.deleteGatewayFailure.type
        ),
        take(1)
      )
      .subscribe((action) => {
        if (action.type === GatewaysActions.deleteGatewaySuccess.type) {
          if (this.deleting) {
            this.deleting = false;
          }
          this.modalService.dismissAll();
          this.loadGateways(this.page);
        } else if (action.type === GatewaysActions.deleteGatewayFailure.type) {
          if (this.saving) {
            this.deleting = false;
          }
        }
      });
  }
}
