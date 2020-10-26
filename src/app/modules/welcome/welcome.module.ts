import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";

import {NotLoggedInComponent} from './not-logged-in/not-logged-in.component';

@NgModule({
  declarations: [NotLoggedInComponent],
  imports: [
    CommonModule,

    MatCardModule,
    MatTabsModule
  ],
  exports: [
    NotLoggedInComponent
  ]
})
export class WelcomeModule {
}
