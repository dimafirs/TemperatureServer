import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAlternativeComponent } from './graph-alternative.component';

describe('GraphAlternativeComponent', () => {
  let component: GraphAlternativeComponent;
  let fixture: ComponentFixture<GraphAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphAlternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
