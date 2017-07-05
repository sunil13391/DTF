import { Component } from '@angular/core';

import { BusRegistration } from '../home/home';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BusRegistration;
  tab2Root = ListPage;

  constructor() {

  }
}
