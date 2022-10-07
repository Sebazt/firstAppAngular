import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFuegoComponent } from './pokemon-fuego.component';

describe('PokemonFuegoComponent', () => {
  let component: PokemonFuegoComponent;
  let fixture: ComponentFixture<PokemonFuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
