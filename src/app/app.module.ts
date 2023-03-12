import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './entities/products/product-list/product-list.component';
import {ProductDetailComponent} from './entities/products/product-detail/product-detail.component';
import {ProductUpdateComponent} from './entities/products/product-update/product-update.component';
import {ServicesComponent} from './entities/services/services.component';
import {ContactComponent} from './entities/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from "@angular/common/http";
import {FileUploadModule} from "ng2-file-upload";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserComponent } from './entities/user/user.component';
import {AuthGuardService} from "./auth/auth-guard.service";
import { AdmDashboardComponent } from './dashboard/adm-dashboard/adm-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReviewsComponent } from './entities/reviews/reviews.component';
import { ShopDashboardComponent } from './e-shop/shop-dashboard/shop-dashboard.component';
import { EshopProductListComponent } from './e-shop/eshop-product-list/eshop-product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ServicesComponent,
    ContactComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserComponent,
    AdmDashboardComponent,
    DashboardComponent,
    ReviewsComponent,
    ShopDashboardComponent,
    EshopProductListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        FileUploadModule,
        NgbModule,
        NgbCarousel,
        NgbCarouselModule,
        NgIf
    ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})



export class AppModule {



}
