import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStoreModule } from '@store/store.module';

import { GatewayLayoutComponent } from './gateway-layout.component';

describe('GatewayLayoutComponent', () => {
  let component: GatewayLayoutComponent;
  let fixture: ComponentFixture<GatewayLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GatewayLayoutComponent],
      imports: [RouterTestingModule, AppStoreModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GatewayLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
