import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrusteeComponent } from './view-trustee.component';

describe('ViewTrusteeComponent', () => {
  let component: ViewTrusteeComponent;
  let fixture: ComponentFixture<ViewTrusteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrusteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTrusteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
