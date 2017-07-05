import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { BusRegistration } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NextpagePage } from '../pages/nextpage/nextpage';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber} from '@ionic-native/call-number';
import { DatePicker } from '@ionic-native/date-picker';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    BusRegistration,
    ListPage,
    NextpagePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BusRegistration,
    ListPage,
    NextpagePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
