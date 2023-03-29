import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularRoomComponent } from './rectangular-room.component';

describe('RectangularRoomComponent', () => {
  let component: RectangularRoomComponent;
  let fixture: ComponentFixture<RectangularRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangularRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangularRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
