import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex02Layout } from './ex02-layout';

describe('Ex02Layout', () => {
  let component: Ex02Layout;
  let fixture: ComponentFixture<Ex02Layout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex02Layout],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex02Layout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
