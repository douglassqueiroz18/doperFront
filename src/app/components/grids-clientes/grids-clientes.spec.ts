import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsClientes } from './grids-clientes';

describe('GridsClientes', () => {
  let component: GridsClientes;
  let fixture: ComponentFixture<GridsClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridsClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(GridsClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
