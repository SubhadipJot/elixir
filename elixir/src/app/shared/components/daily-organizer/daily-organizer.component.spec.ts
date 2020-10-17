import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOrganizerComponent } from './daily-organizer.component';

describe('DailyOrganizerComponent', () => {
  let component: DailyOrganizerComponent;
  let fixture: ComponentFixture<DailyOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
