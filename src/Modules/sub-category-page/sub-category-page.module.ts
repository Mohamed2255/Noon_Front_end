import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryPageComponent } from './sub-category-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsContanerComponent } from './components/products-contaner/products-contaner.component';



@NgModule({
  declarations: [
    SubCategoryPageComponent,
    ProductCardComponent,
    ProductsContanerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubCategoryPageModule { }
