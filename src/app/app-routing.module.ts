import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  // { path: "add", component: ProductAddComponent }
  { path: "product-list", component: ProductListComponent },
  { path: "productDetail", component: ProductDetailComponent },
  { path: "product-add", component: ProductAddComponent },
  { path: "**", component: AboutComponent },
  { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '/404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
