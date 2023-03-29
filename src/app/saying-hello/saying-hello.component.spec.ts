import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayingHelloComponent } from './saying-hello.component';

describe('SayingHelloComponent', () => {
  let component: SayingHelloComponent;
  let fixture: ComponentFixture<SayingHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayingHelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayingHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
