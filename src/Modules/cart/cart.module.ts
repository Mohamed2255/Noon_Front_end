import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartProductItemComponent } from './components/cart-product-item/cart-product-item.component';



@NgModule({
  declarations: [
    CartComponent,
    CartProductItemComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
