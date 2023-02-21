import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./entities/products/product-list/product-list.component";
import {ProductDetailComponent} from "./entities/products/product-detail/product-detail.component";
import {ContactComponent} from "./entities/contact/contact.component";
import {ServicesComponent} from "./entities/services/services.component";
import {ProductUpdateComponent} from "./entities/products/product-update/product-update.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProfileComponent} from "./auth/profile/profile.component";
import {AuthGuardService} from "./auth/auth-guard.service";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'products/create', component: ProductUpdateComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
