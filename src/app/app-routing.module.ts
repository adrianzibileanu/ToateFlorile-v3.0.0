import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./entities/products/product-list/product-list.component";
import {ProductDetailComponent} from "./entities/products/product-detail/product-detail.component";
import {ContactComponent} from "./entities/contact/contact.component";
import {ServicesComponent} from "./entities/services/services.component";
import {ProductUpdateComponent} from "./entities/products/product-update/product-update.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'products/create', component: ProductUpdateComponent},
  {path: 'admin', component: AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
