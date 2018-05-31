import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoViewComponent } from './components/video-view/video-view.component';

const routes: Routes = [
  { path: '', component: VideoListComponent },
  { path: 'videos', component: VideoListComponent },
  { path: 'video/:id', component: VideoViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
