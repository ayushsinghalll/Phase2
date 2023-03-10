import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrusteeComponent } from './create-trustee.component';

describe('CreateTrusteeComponent', () => {
  let component: CreateTrusteeComponent;
  let fixture: ComponentFixture<CreateTrusteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrusteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrusteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
