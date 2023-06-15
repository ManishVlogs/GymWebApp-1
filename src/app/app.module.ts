import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
import { AppRoutingModule } from 'src/app.routing.module';
import { routing } from './app-routing';
import { GalleryComponent } from './module/gallery/gallery.component';
import { AboutusComponent } from './module/aboutus/aboutus.component';
// import { SlickCarouselModule  } from 'ngx-slick-carousel';

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
    SiteLayoutComponent,
    GalleryComponent,
    AboutusComponent ,
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // SlickCarouselModule

  ],
  providers: [ApiConstant],
  bootstrap: [AppComponent]
}) 
export class AppModule { }