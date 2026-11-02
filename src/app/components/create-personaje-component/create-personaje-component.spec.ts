import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePersonajeComponent } from './create-personaje-component';

describe('CreatePersonajeComponent', () => {
  let component: CreatePersonajeComponent;
  let fixture: ComponentFixture<CreatePersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePersonajeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePersonajeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
