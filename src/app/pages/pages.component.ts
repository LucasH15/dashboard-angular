import { Component } from '@angular/core';
import {Router} from "@angular/router";

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (this.router.url === '' || this.router.url === '/') {
        this.setActiveMenu('/');
      }
    });
  }

  setActiveMenu(url): void {
    this.menu.forEach(item => {
      item.selected = (item.link === url);
      // gérer aussi les enfants si besoin
      if (item.children) {
        item.children.forEach(child => {
          child.selected = (child.link === url);
        });
      }
    });
  }
}
