import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAlertComponent } from './pokemon-alert.component';

describe('PokemonAlertComponent', () => {
  let component: PokemonAlertComponent;
  let fixture: ComponentFixture<PokemonAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});