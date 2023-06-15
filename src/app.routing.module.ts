import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app/module/dashboard/dashboard.component';
import { SiteLayoutComponent } from './app/shared/components/site-layout/site-layout.component';

const routes: Routes = [];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
