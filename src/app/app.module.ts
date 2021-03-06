import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import {ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

// import { ProductManager } from './product-manager/product-manager.component';
@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,FormsModule , HttpClientModule, NgbModule, ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductComponent, ProductDetailComponent, ProductAddComponent, AboutComponent, HomeComponent, NotFoundComponent, ProductEditComponent, DashboardComponent, IndexAdminComponent, ProductAdminComponent, ProductManagerComponent, MenuComponent, FooterComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
