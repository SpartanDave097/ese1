import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAttaccoComponent } from './pokemon-attacco.component';

describe('PokemonAttaccoComponent', () => {
  let component: PokemonAttaccoComponent;
  let fixture: ComponentFixture<PokemonAttaccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAttaccoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAttaccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
