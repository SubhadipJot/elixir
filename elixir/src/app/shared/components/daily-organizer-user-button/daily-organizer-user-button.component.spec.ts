import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOrganizerUserButtonComponent } from './daily-organizer-user-button.component';

describe('DailyOrganizerUserButtonComponent', () => {
  let component: DailyOrganizerUserButtonComponent;
  let fixture: ComponentFixture<DailyOrganizerUserButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyOrganizerUserButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyOrganizerUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
