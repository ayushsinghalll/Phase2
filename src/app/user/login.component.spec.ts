import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login.component';
import {By} from "@angular/platform-browser";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule]    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have type as text',()=>{
    const pass = fixture.debugElement.query(By.css('#userName'))
    expect(pass.nativeElement.getAttribute('type')).toEqual('text')
  })
  it('should have name username',()=>{
    const pass = fixture.debugElement.query(By.css('#userName'))
    expect(pass.nativeElement.getAttribute('name')).toEqual('userName')
  })
  it('should have type as password',()=>{
  const pass = fixture.debugElement.query(By.css('#password'))
    expect(pass.nativeElement.getAttribute('type')).toEqual('password')
  })
  it('should have name as password',()=>{
    const pass = fixture.debugElement.query(By.css('#password'))
    expect(pass.nativeElement.getAttribute('name')).toEqual('password')
  })
});
