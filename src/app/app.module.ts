import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent  } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ConfirmBoxComponent } from './views/confirm-box/confirm-box.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LeftmenuComponent } from './shared/components/leftmenu/leftmenu.component';
import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiConstant } from './services/pipes/global/api-constant';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConfirmBoxComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
    SiteLayoutComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   

  ],
  providers: [ApiConstant],
  bootstrap: [AppComponent]
}) 
export class AppModule { }