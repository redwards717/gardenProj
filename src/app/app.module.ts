import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductsComponent } from './products/products.component';
=======
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
>>>>>>> 49c76b613d9cd26f02318641aef51ceaa801589d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductsComponent
=======
    AboutComponent
>>>>>>> 49c76b613d9cd26f02318641aef51ceaa801589d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
