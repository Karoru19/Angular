import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoElementComponent } from './components/video-element/video-element.component';

import { DerpiService } from './services/derpi/derpi.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    VideoListComponent,
    VideoElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DerpiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
