import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex04Pessoa } from './ex04-pessoa';

describe('Ex04Pessoa', () => {
  let component: Ex04Pessoa;
  let fixture: ComponentFixture<Ex04Pessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex04Pessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex04Pessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
