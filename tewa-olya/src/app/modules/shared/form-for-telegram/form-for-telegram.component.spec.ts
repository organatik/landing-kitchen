import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForTelegramComponent } from './form-for-telegram.component';

describe('FormForTelegramComponent', () => {
  let component: FormForTelegramComponent;
  let fixture: ComponentFixture<FormForTelegramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormForTelegramComponent]
    });
    fixture = TestBed.createComponent(FormForTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
