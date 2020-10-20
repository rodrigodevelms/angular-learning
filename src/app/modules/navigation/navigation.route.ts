import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const navigationRoutes: Routes = [
    { path: '', component: HomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(navigationRoutes)
    ],
    exports: [RouterModule]
})

export class NavigationRoutesModule {}