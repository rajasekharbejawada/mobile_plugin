import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsHome } from './news-home';

@NgModule({
  declarations: [
    NewsHome,
  ],
  imports: [
    IonicPageModule.forChild(NewsHome),
  ],
})
export class NewsHomeModule {}
