import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuteacherPage } from '../menuteacher/menuteacher';
import { MenuparentPage } from '../menuparent/menuparent';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  loginResult: string;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
 
login(_username, _password) {
  alert('hello ' + _username + _password);
  if (_password == '1234') {
    this.loginResult = "Pass";
    this.navCtrl.push(MenuteacherPage);
  }else if(_password == '3001569'){
    this.loginResult = "Pass";
    this.navCtrl.push(MenuparentPage);
  } 
  else {
    this.loginResult = "Faild";

  }
}

}//end class