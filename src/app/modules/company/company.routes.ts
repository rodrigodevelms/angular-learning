import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./new-account/employee/main-page/main-page.component";

const navigationRoutes: Routes = [
  {path: 'new-account', component: MainPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(navigationRoutes)
  ],
  exports: [RouterModule]
})

export class CompanyRoutes {
}
