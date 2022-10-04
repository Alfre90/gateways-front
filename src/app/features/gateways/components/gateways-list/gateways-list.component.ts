import { Component, OnInit } from '@angular/core';
import { GatewayModel } from '@features/gateways/models/gateway';
import { GatewaysStoreService } from '@store/services/gateways-store.service';

@Component({
  selector: 'gw-gateways-list',
  templateUrl: './gateways-list.component.html',
  styleUrls: ['./gateways-list.component.scss']
})
export class GatewaysListComponent implements OnInit {
  gatewaysList$ = this.gatewasService.allGateways$;
  totalItems$ = this.gatewasService.totalItems$;
  totalItems: number = 0;
  page: number = 1;

  constructor(private gatewasService: GatewaysStoreService) {}

  ngOnInit(): void {
    this.loadGateways(1);
    this.totalItems$.subscribe((data) => (this.totalItems = data));
  }

  loadGateways(page: number) {
    this.page = page;
    this.gatewasService.loadGateways('', '', page);
  }

  // TrackBy function to allow specify the changes separately
  trackByFn(index: number, item: GatewayModel) {
    return item.id;
  }
}
