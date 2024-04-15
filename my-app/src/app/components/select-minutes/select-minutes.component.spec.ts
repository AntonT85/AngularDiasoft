import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMinutesComponent } from './select-minutes.component';

describe('SelectMinutesComponent', () => {
  let component: SelectMinutesComponent;
  let fixture: ComponentFixture<SelectMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMinutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
