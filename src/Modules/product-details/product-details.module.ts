import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { DetailsComponent } from './components/details/details.component';
import { AdetianlDetailsComponent } from './components/adetianl-details/adetianl-details.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductImageComponent,
    DetailsComponent,
    AdetianlDetailsComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductDetailsModule { }
