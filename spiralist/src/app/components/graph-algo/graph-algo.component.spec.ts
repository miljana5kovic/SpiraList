import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAlgoComponent } from './graph-algo.component';

describe('GraphAlgoComponent', () => {
  let component: GraphAlgoComponent;
  let fixture: ComponentFixture<GraphAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphAlgoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
