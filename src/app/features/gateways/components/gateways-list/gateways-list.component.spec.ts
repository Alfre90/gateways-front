import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStoreModule } from '@store/store.module';

import { GatewaysListComponent } from './gateways-list.component';

describe('GatewaysListComponent', () => {
  let component: GatewaysListComponent;
  let fixture: ComponentFixture<GatewaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GatewaysListComponent],
      imports: [AppStoreModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GatewaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
