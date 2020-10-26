import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";

import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {NavigationRoutesModule} from './navigation.route';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SecurityModule} from "../security/security.module";
import {NotFoundComponent} from './not-found/not-found.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {WelcomeModule} from "../welcome/welcome.module";

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    TopMenuComponent,
    SideMenuComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,

    SecurityModule,
    NavigationRoutesModule,
    MatExpansionModule,
    WelcomeModule
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    TopMenuComponent,
    SideMenuComponent,
    NotFoundComponent
  ]
})
export class NavigationModule {
}
