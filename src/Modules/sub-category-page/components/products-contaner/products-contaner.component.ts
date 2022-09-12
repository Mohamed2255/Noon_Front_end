import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-contaner',
  templateUrl: './products-contaner.component.html',
  styleUrls: ['./products-contaner.component.scss']
})
export class ProductsContanerComponent implements OnInit {

  constructor(private router:Router) { }
@Input('Products')Products:any
  ngOnInit(): void {
  }
  GotoDetails(productId:string)
  {
    this.router.navigate(['product/',productId])
  }
}
