import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelhComponent } from './homelh.component';

describe('HomelhComponent', () => {
  let component: HomelhComponent;
  let fixture: ComponentFixture<HomelhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
