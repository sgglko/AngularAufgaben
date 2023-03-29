import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingCharactersComponent } from './counting-characters.component';

describe('CountingCharactersComponent', () => {
  let component: CountingCharactersComponent;
  let fixture: ComponentFixture<CountingCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
