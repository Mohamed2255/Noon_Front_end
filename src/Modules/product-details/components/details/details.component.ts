import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/Services/CartService/cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 @Output()ShowAlertEmitter:EventEmitter<boolean>=new EventEmitter()
  constructor(private cartService:CartService) { }
@Input('product')product:any
  ngOnInit(): void {

  }

  HandelAddProductToCart(){
    this.ShowAlertEmitter.emit(true)
    this.cartService.AddProductToCart({...this.product});
  }

}
