import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoSectionPage } from './video-section';

@NgModule({
  declarations: [
    VideoSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoSectionPage),
  ],
  exports: [
    VideoSectionPage
  ]
})
export class VideoSectionPageModule {}
