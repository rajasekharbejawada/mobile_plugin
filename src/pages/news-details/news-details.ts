import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the NewsDetails page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetails {
newsTitle:any;
category: any;
description:any;
url: any;
country: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.newsTitle = this.navParams.get('name');
  this.category = this.navParams.get('category');
  this.description = this.navParams.get('description');
  this.country = this.navParams.get('country');
  this.url = this.navParams.get('url');
  console.log(this.newsTitle);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetails');
  }

}
