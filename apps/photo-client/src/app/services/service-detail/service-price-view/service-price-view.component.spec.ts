import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePriceViewComponent } from './service-price-view.component';

describe('ServicePriceViewComponent', () => {
  let component: ServicePriceViewComponent;
  let fixture: ComponentFixture<ServicePriceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePriceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePriceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
