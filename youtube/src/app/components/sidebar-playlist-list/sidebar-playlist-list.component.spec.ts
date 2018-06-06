import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPlaylistListComponent } from './sidebar-playlist-list.component';

describe('SidebarPlaylistListComponent', () => {
  let component: SidebarPlaylistListComponent;
  let fixture: ComponentFixture<SidebarPlaylistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPlaylistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPlaylistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
