import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDebolezzeComponent } from './pokemon-debolezze.component';

describe('PokemonDebolezzeComponent', () => {
  let component: PokemonDebolezzeComponent;
  let fixture: ComponentFixture<PokemonDebolezzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDebolezzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDebolezzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
