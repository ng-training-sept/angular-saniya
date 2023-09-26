import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesCComponent } from './directives-c.component';

describe('DirectivesCComponent', () => {
  let component: DirectivesCComponent;
  let fixture: ComponentFixture<DirectivesCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DirectivesCComponent]
    });
    fixture = TestBed.createComponent(DirectivesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
