import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayDetailsPageComponent } from './gateway-details-page.component';

describe('GatewayDetailsPageComponent', () => {
  let component: GatewayDetailsPageComponent;
  let fixture: ComponentFixture<GatewayDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
