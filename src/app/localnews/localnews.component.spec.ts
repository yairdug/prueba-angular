import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalnewsComponent } from './localnews.component';

describe('LocalnewsComponent', () => {
  let component: LocalnewsComponent;
  let fixture: ComponentFixture<LocalnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
