import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/AuthService/auth.service';
import { CartService } from 'src/Services/CartService/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogged:boolean=false;
  productsCount:number=0
  constructor(private authService:AuthService,private cartService:CartService) {
    this.authService.isLogged.subscribe(status=>{this.islogged=status})
    this.cartService.CartStore.subscribe(data=>{
      this.productsCount=0;
      data.forEach(product=>{
        this.productsCount+=product.Quantity
      })
      console.log(data)
      // this.productsCount=data.length
    })
   }

  ngOnInit(): void {
  }

  LogOut(){
    this.authService.LogOut();
  }

}
