import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegComponent } from './reactive-reg.component';

describe('ReactiveRegComponent', () => {
  let component: ReactiveRegComponent;
  let fixture: ComponentFixture<ReactiveRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
