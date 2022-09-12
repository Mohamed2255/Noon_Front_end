import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartProduct } from 'src/interfaces/CartInterfaces/ICartProduct';
// import { IProduct } from 'src/interfaces/CategoryPageInterfaces/IProduct';
import { IOrder, IOrderProduct } from 'src/interfaces/OrderInterfaces/IOrder';
import { AuthService } from 'src/Services/AuthService/auth.service';
import { CartService } from 'src/Services/CartService/cart.service';
import { OrderService } from 'src/Services/OrderService/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CartProducts: ICartProduct[] = [];
  cartTotalMony: number = 0
  private isLogged:boolean=false
  constructor(private cartService: CartService,private orderService:OrderService,private authService:AuthService,private router :Router) {
    this.cartService.CartStore.subscribe(products => {
      this.CartProducts = products;
      console.log(products, 'cart')
    })
    this.authService.isLogged.subscribe(status=>{
      this.isLogged=status
    })
  }

  ngOnInit(): void {
    this.CalcTotal();
  }

  CalcTotal() {
    this.cartTotalMony = 0;
    this.CartProducts.forEach(cartProduct => {
      this.cartTotalMony += cartProduct.product.price *cartProduct.Quantity;
    })
  }
  HanderOrderNow() {

    if(!this.isLogged)
      {
          alert('يجب عليك تسجيل الدخول اولا')
          this.router.navigate(['/account/login']);
          return
      }
    const order: IOrder = {
      // orderDate: new Date().toLocaleDateString(),
      products: [] as IOrderProduct[]
    }
    this.CartProducts.forEach(cartProduct => {
      order.products.push(
        { 
          productId: cartProduct.product.id,
          quantity: cartProduct.Quantity
        });
      })
      console.log(order)
    //console.log(order,'order')
    this.orderService.AddNewOrder(order).subscribe(response=>{
     alert('تم انشاء الطلب');
     // clear Cart
     this.cartService.CartStore.next([]);
    })
  }

}
