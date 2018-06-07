import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { HistoryComponent } from './components/history/history.component';
import { ChannelComponent } from './components/channel/channel.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

const routes: Routes = [
  { path: '', component: VideoListComponent },
  { path: 'videos', component: VideoListComponent },
  { path: 'video/:id', component: VideoViewComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'channel/:id', component: ChannelComponent },
  { path: 'playlist', component: PlaylistListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
