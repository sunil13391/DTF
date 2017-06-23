import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
<<<<<<< HEAD
=======

>>>>>>> d424be05137f04ed2f7d72f00ddfcf537eb29859

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NextpagePage } from '../pages/nextpage/nextpage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber} from '@ionic-native/call-number';
import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NextpagePage
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    IonicModule.forRoot(MyApp)
=======
    IonicModule.forRoot(MyApp),
>>>>>>> d424be05137f04ed2f7d72f00ddfcf537eb29859
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NextpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
