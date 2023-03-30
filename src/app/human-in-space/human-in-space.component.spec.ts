import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanInSpaceComponent } from './human-in-space.component';

describe('HumanInSpaceComponent', () => {
  let component: HumanInSpaceComponent;
  let fixture: ComponentFixture<HumanInSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanInSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanInSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
