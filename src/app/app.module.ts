import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveRegComponent } from './reactive-reg/reactive-reg.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderNewComponent } from './header-new/header-new.component';
import { SearchNewComponent } from './search-new/search-new.component';
import { FilterComponent } from './filter/filter.component';
import { NewFilterComponent } from './new-filter/new-filter.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    NewproductsComponent,
    RegisterComponent,
    ReactiveRegComponent,
    CoursesComponent,
    HeaderNewComponent,
    SearchNewComponent,
    FilterComponent,
    NewFilterComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
