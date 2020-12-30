import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailPopupComponent } from './dog-detail-popup.component';

describe('DogDetailPopupComponent', () => {
  let component: DogDetailPopupComponent;
  let fixture: ComponentFixture<DogDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
