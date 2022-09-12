import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICartProduct } from 'src/interfaces/CartInterfaces/ICartProduct';
import { IProduct } from 'src/interfaces/CategoryPageInterfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public CartStore :BehaviorSubject<ICartProduct[]>=new BehaviorSubject([] as ICartProduct[]);
  constructor() { 

  }

  RemoveProductFromCart(product:IProduct)
  {
    const index=this.CartStore.value.findIndex(pro=>pro.product.id==product.id)
    if(index>=0)
    {
        this.CartStore.value.splice(index,1)
        this.CartStore.next([...this.CartStore.value])
    }
  }

  AddProductToCart(newproduct:IProduct)
  {
      const index=this.CartStore.value.findIndex(pro=>pro.product.id==newproduct.id)
      if(index<0)
      {
          this.CartStore.next([...this.CartStore.value,{product:newproduct,Quantity:1}]);
      }
      else
      {
          this.CartStore.value[index].Quantity++;// 
          this.CartStore.next([...this.CartStore.value]);
      }
 
  }

  HandelProductQunatity(cartProduct:ICartProduct)
  {
    const index=this.CartStore.value.findIndex(pro=>pro.product.id==cartProduct.product.id)
    if(index<0)return
    this.CartStore.value[index].Quantity=cartProduct.Quantity
    this.CartStore.next([...this.CartStore.value])
  }
  

}
