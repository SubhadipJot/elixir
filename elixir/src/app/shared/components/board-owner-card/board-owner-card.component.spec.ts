import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOwnerCardComponent } from './board-owner-card.component';

describe('BoardOwnerCardComponent', () => {
  let component: BoardOwnerCardComponent;
  let fixture: ComponentFixture<BoardOwnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOwnerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOwnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
