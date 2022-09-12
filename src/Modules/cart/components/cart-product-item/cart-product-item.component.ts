import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartProduct } from 'src/interfaces/CartInterfaces/ICartProduct';
import { CartService } from 'src/Services/CartService/cart.service';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss']
})
export class CartProductItemComponent implements OnInit {
@Output()changeQuantityEmmiter:EventEmitter<any>=new EventEmitter();
  constructor(private cartService:CartService) { }
@Input('CartProduct')CartProduct:ICartProduct={} as ICartProduct
  ngOnInit(): void {
  }

  HandelQuantityChange(quantity:any)
  {

    const quantityNumber=parseInt(quantity.value)
    if(quantityNumber==0)
    {
      if(confirm('هل انت متاكد انك تريد ازاله العنصر')){
        this.cartService.RemoveProductFromCart(this.CartProduct.product);
       }else{
        quantity.value='1'
       }

    }
    if(quantityNumber>1){
      this.CartProduct.Quantity=quantityNumber
      this.cartService.HandelProductQunatity(this.CartProduct)
    }
     
      this.changeQuantityEmmiter.emit();
      
  }
  HandelCancel()
  {
    if(confirm('هل فعلا تريد حذف المنتج من السله!'))
    {
      this.cartService.RemoveProductFromCart(this.CartProduct.product); 
      this.changeQuantityEmmiter.emit();
    }
  }

}
