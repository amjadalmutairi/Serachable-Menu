import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableMenuComponent } from './searchable-menu.component';

describe('SearchableMenuComponent', () => {
  let component: SearchableMenuComponent;
  let fixture: ComponentFixture<SearchableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
