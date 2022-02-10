import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPhotoInfoComponent } from './professional-photo-info.component';

describe('ProfessionalPhotoInfoComponent', () => {
  let component: ProfessionalPhotoInfoComponent;
  let fixture: ComponentFixture<ProfessionalPhotoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalPhotoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalPhotoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
