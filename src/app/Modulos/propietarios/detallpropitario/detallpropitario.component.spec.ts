import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallpropitarioComponent } from './detallpropitario.component';

describe('DetallpropitarioComponent', () => {
  let component: DetallpropitarioComponent;
  let fixture: ComponentFixture<DetallpropitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallpropitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallpropitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
