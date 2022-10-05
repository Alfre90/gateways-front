import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddGatewayModalComponent } from './add-gateway-modal.component';

describe('AddGatewayModalComponent', () => {
  let component: AddGatewayModalComponent;
  let fixture: ComponentFixture<AddGatewayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGatewayModalComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGatewayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
