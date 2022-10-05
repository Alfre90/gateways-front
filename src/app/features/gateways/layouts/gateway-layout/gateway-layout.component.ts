import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatewayModel } from '@features/gateways/models/gateway';
import { GatewaysStoreService } from '@store/services/gateways-store.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'gw-gateway-layout',
  templateUrl: './gateway-layout.component.html',
  styleUrls: ['./gateway-layout.component.scss']
})
export class GatewayLayoutComponent implements OnInit, OnDestroy {
  gatewayId: number = -1;

  destroy$: Subject<boolean> = new Subject<boolean>();
  gateway$ = this.gatewayService.selectedGateway$;

  constructor(
    private route: ActivatedRoute,
    private gatewayService: GatewaysStoreService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((routeParams) => {
        this.gatewayId = +routeParams['id'];
        this.gatewayService.loadGateway(this.gatewayId);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
