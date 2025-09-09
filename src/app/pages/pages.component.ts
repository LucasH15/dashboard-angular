import { Component } from '@angular/core';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-header>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class PagesComponent {

}
