import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasYEducacionComponent } from './experiencias-yeducacion.component';

describe('ExperienciasYEducacionComponent', () => {
  let component: ExperienciasYEducacionComponent;
  let fixture: ComponentFixture<ExperienciasYEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciasYEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciasYEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
