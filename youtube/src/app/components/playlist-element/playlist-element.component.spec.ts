import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistElementComponent } from './playlist-element.component';

describe('PlaylistElementComponent', () => {
  let component: PlaylistElementComponent;
  let fixture: ComponentFixture<PlaylistElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
