import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/Services/HomeService/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Products:any=[]
  constructor(private homeService:HomeService) { }
  ngOnInit(): void {
  //   window.fetch('../../../assets/Data/Products.json').then(response=>{
  //     response.json().then(data=>{
  //       this.Products=data.products
  //       console.log(this.Products)
  //     })
  // })
  console.log('init')
    this.homeService.GetAllProducts().subscribe(data=>{
      this.Products=data
    },error=>{
      console.log(error)
    })
}

}
