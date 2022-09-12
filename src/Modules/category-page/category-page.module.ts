import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import {SubcateogriesContainerComponent} from './components/subcateogries-container/subcateogries-container.component'
import { SubcategoryItemComponent } from './components/subcategory-item/subcategory-item.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsContanerComponent } from './components/products-contaner/products-contaner.component';



@NgModule({
  declarations: [
    CategoryPageComponent,
    SubcateogriesContainerComponent,
    SubcategoryItemComponent,
    ProductCardComponent,
    ProductsContanerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryPageModule { }
