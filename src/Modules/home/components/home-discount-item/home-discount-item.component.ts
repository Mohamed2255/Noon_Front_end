import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-discount-item',
  templateUrl: './home-discount-item.component.html',
  styleUrls: ['./home-discount-item.component.scss']
})
export class HomeDiscountItemComponent implements OnInit {

  constructor() { }
@Input('DiscountData') DiscountData:any 
  ngOnInit(): void {
  }

}
