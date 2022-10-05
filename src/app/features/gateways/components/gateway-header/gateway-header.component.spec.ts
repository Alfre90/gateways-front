import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayHeaderComponent } from './gateway-header.component';

describe('GatewayHeaderComponent', () => {
  let component: GatewayHeaderComponent;
  let fixture: ComponentFixture<GatewayHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
