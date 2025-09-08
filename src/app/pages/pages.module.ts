import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { TraderModule } from './trader/trader.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    HomeModule,
    TraderModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {

}
