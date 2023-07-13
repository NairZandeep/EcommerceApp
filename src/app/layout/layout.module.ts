import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './dashboard/items/items.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ItemsComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
