import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import { SliderComponent } from '../app/components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeSubcateroriesContainerComponent } from './components/home-subcaterories-container/home-subcaterories-container.component';
import { NoonGiftComponent } from './components/noon-gift/noon-gift.component';
import { HomeDiscountsContainerComponent } from './components/home-discounts-container/home-discounts-container.component';
import { HomeDiscountItemComponent } from './components/home-discount-item/home-discount-item.component';
import { HomeSubcategoryItemComponent } from './components/home-subcategory-item/home-subcategory-item.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsContanerComponent } from './components/products-contaner/products-contaner.component';
import{SliderComponent} from './components/slider/slider.component'


@NgModule({
  declarations: [
    HomeComponent,
 
    HomeSubcateroriesContainerComponent,
    HomeSubcategoryItemComponent,
    NoonGiftComponent,
    HomeDiscountsContainerComponent,
    HomeDiscountItemComponent,
    ProductCardComponent,
    ProductsContanerComponent,
    SliderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
