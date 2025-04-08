import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsScreenComponent } from './graphics-screen.component';

describe('GraphicsScreenComponent', () => {
  let component: GraphicsScreenComponent;
  let fixture: ComponentFixture<GraphicsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
