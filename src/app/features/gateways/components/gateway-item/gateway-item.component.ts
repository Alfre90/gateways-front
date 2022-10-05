import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GatewayModel } from '@features/gateways/models/gateway';

@Component({
  selector: 'gw-gateway-item',
  templateUrl: './gateway-item.component.html',
  styleUrls: ['./gateway-item.component.scss']
})
export class GatewayItemComponent implements OnInit {
  @Input() gateway: GatewayModel = new GatewayModel();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
