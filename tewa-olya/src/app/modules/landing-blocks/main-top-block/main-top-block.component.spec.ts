import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopBlockComponent } from './main-top-block.component';

describe('MainTopBlockComponent', () => {
  let component: MainTopBlockComponent;
  let fixture: ComponentFixture<MainTopBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTopBlockComponent]
    });
    fixture = TestBed.createComponent(MainTopBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
