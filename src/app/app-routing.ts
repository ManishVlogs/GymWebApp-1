import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutusComponent } from './module/aboutus/aboutus.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { GalleryComponent } from './module/gallery/gallery.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component';

const URLPrefix: string = 'GymManagement/';
const DefaultRoute: string = 'GymManagement/dashboard';
const routes: Routes = [
  { path: '', redirectTo: URLPrefix + 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: URLPrefix + 'dashboard', pathMatch: 'full' },
  { path: URLPrefix, redirectTo: URLPrefix + 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AboutusComponent,
    children: [
        // {
        //   path: 'dashboard', redirectTo: URLPrefix + 'dashboard', pathMatch: 'full'
        // },
      {
        path: URLPrefix + 'dashboard', component: DashboardComponent
      }
      
     
    ]
  },
  {
    path: '**', redirectTo: DefaultRoute
  }
];

export const routing = RouterModule.forRoot(routes);

