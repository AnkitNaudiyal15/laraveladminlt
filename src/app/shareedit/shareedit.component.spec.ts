import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareeditComponent } from './shareedit.component';

describe('ShareeditComponent', () => {
  let component: ShareeditComponent;
  let fixture: ComponentFixture<ShareeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
