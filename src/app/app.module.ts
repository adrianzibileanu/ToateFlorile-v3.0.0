import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        FileUploadModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
