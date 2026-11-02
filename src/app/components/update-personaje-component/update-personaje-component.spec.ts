import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePersonajeComponent } from './update-personaje-component';

describe('UpdatePersonajeComponent', () => {
  let component: UpdatePersonajeComponent;
  let fixture: ComponentFixture<UpdatePersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePersonajeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePersonajeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
