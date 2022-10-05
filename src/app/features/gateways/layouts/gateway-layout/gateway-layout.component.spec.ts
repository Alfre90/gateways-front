import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayLayoutComponent } from './gateway-layout.component';

describe('GatewayLayoutComponent', () => {
  let component: GatewayLayoutComponent;
  let fixture: ComponentFixture<GatewayLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
