import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex01AreaCards } from './ex01-area-cards';

describe('Ex01AreaCards', () => {
  let component: Ex01AreaCards;
  let fixture: ComponentFixture<Ex01AreaCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex01AreaCards],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex01AreaCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
