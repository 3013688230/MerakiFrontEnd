import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPropitariosComponent } from './listar-propitarios.component';

describe('ListarPropitariosComponent', () => {
  let component: ListarPropitariosComponent;
  let fixture: ComponentFixture<ListarPropitariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPropitariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPropitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
