import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-discounts-container',
  templateUrl: './home-discounts-container.component.html',
  styleUrls: ['./home-discounts-container.component.scss']

})
export class HomeDiscountsContainerComponent implements OnInit {

Discounts:any=[
  {value:'45',imageUrl:'../../../../assets/images/Website-Images/home/discounts/45.webp'},
  {value:'40',imageUrl:'../../../../assets/images/Website-Images/home/discounts/40.webp'},
  {value:'20',imageUrl:'../../../../assets/images/Website-Images/home/discounts/20.webp'},
  {value:'60',imageUrl:'../../../../assets/images/Website-Images/home/discounts/60.webp'},
]
  constructor() { }
  ngOnInit(): void {
  }

}
