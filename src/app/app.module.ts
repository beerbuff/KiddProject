import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuteacherPage } from '../pages/menuteacher/menuteacher';
import { MenuparentPage } from '../pages/menuparent/menuparent';
import { QrScanPage } from '../pages/qr-scan/qr-scan';
import { SaveSickPage } from '../pages/save-sick/save-sick';
import { StudentviewPage } from '../pages/studentview/studentview';
import { ActivityviewPage } from '../pages/activityview/activityview';
import { QrCodePaPage } from '../pages/qr-code-pa/qr-code-pa';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { BmiviewPage } from '../pages/bmiview/bmiview';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { CheckstudyPage } from '../pages/checkstudy/checkstudy';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuteacherPage,
    MenuparentPage,
    QrScanPage,
    SaveSickPage,
    StudentviewPage,
    ActivityviewPage,
    QrCodePaPage,
    LoginPage,
    WelcomePage,
    BmiviewPage,
    CheckstudyPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      NgxDatatableModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuteacherPage,
    MenuparentPage,
    QrScanPage,
    SaveSickPage,
    StudentviewPage,
    ActivityviewPage,
    QrCodePaPage,
    LoginPage,
    WelcomePage,
    BmiviewPage,
    CheckstudyPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}