import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { NewsHome } from '../news-home/news-home'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loginData: any=[];
  private registerCredentials : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private alertCtrl: AlertController, private auth: AuthService) {
    this.registerCredentials = this.formBuilder.group({
      user_name: ['', Validators.compose([Validators.required])],
       password: ['',Validators.compose([Validators.required])],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  public login() {
    //this.showLoading();
    this.loginData=this.registerCredentials.value;
    this.auth.login(this.registerCredentials.value).subscribe(allowed => {
      if (allowed) { 
        this.navCtrl.setRoot(NewsHome);
      } else {
        this.showError("Invalid Username or Password provided...please try again");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showError(text) {

    let alert = this.alertCtrl.create({
      title: 'Authentication failed',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
