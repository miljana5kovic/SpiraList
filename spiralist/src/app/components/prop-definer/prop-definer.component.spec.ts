import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropDefinerComponent } from './prop-definer.component';

describe('PropDefinerComponent', () => {
  let component: PropDefinerComponent;
  let fixture: ComponentFixture<PropDefinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropDefinerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropDefinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
