import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetails } from './news-details';

@NgModule({
  declarations: [
    NewsDetails,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetails),
  ],
})
export class NewsDetailsModule {}
