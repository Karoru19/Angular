import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoElementComponent } from './components/video-element/video-element.component';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { DerpiService } from './services/derpi/derpi.service';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { HistoryComponent } from './components/history/history.component';
import { SidebarPlaylistEntryComponent } from './components/sidebar-playlist-entry/sidebar-playlist-entry.component';
import { SidebarPlaylistListComponent } from './components/sidebar-playlist-list/sidebar-playlist-list.component';
import { ChannelComponent } from './components/channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    VideoListComponent,
    VideoElementComponent,
    TestComponent,
    VideoViewComponent,
    HistoryComponent,
    ChannelComponent
    SidebarPlaylistEntryComponent,
    SidebarPlaylistListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DerpiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
