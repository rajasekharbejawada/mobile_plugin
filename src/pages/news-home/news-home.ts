import { Component } from '@angular/core';
import {App} from 'ionic-angular';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { NewsDetails } from '../news-details/news-details';
import { Searchbar } from 'ionic-angular';
import { Login } from '../login/login'
/**
 * Generated class for the NewsHome page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-home',
  templateUrl: 'news-home.html',
})
export class NewsHome {
  news: any;
  newsItems: any;
  loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, private loadingCtrl: LoadingController, private app:App) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsHome');
  }
  private showLoading() {
    this.loading = this.loadingCtrl.create({
      //spinner: 'hide',
      //showBackdrop: false,
      content: 'loading please wait...',
     // cssClass: ''
      //dismissOnPageChange: false
    });
    this.loading.present();
    //this.loading.dismiss();
  }

  //Hiding the Loader
  private hideLoading() {
    this.loading.dismiss();
  }
  ngOnInit() {
    this.showLoading();
    //alert('home');
    this.http.get('https://newsapi.org/v1/sources?language=en').map(res => res.json()).subscribe(data => {
      this.hideLoading();
      this.news = data.sources;
      this.newsItems = this.news;
      console.log(this.news);
  });
    
  }

  onClick(newsItem){
    this.navCtrl.push(NewsDetails, newsItem);
  }

  initializeItems() {
    this.news = this.newsItems;
    console.log(this.news);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    console.log(ev.target.value);
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log(val);
      this.news = this.news.filter((newsItem) => {
        return (newsItem.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
   
  }
  logout(){
    this.app.getRootNav().setRoot(Login);
  }

}
