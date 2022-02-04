import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@features/auth/auth.module';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';

import { FormRegisterComponent } from './form-register.component';

describe('FormRegisterComponent', () => {
  let component: FormRegisterComponent;
  let fixture: ComponentFixture<FormRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must issue the form values ​​when the (register) button is clicked', () => {
    // const spy_formChamge = spyOn(component['formChange'], 'emit');
    // component.form.controls.username.setValue('tested');
    // component.form.controls.email.setValue('test@test.com');
    // component.form.controls.password.setValue('1234567890');
    // component.form.controls.password.setValue('1234567890');
    // fixture.detectChanges();
    // const theButton = fixture.debugElement.query(By.css('button'));
    // const button: HTMLButtonElement = theButton.nativeElement;
    // button.dispatchEvent(new Event('click'));
    // expect(spy_formChamge).toHaveBeenCalled();
  });

  it('(D) should show error message when (username) is not available', () => {
    // component.form.controls.username.setValue('testUsername');
  });

  it('(D) should show error message when (email) is not in correct format ', () => {
    component.form.controls.email.setValue('teste@gmail@');
    fixture.detectChanges();

    expect(component.form.controls.email.invalid).toBeTrue();
  });

  it('(D) should show error message when (passwords) do not match ', () => {
    component.form.controls.password.setValue('123456789');
    component.form.controls.confirmPassword.setValue('123456788');

    fixture.detectChanges();

    expect(
      component.form.controls.confirmPassword.errors?.not_match
    ).toBeTrue();
  });
});
