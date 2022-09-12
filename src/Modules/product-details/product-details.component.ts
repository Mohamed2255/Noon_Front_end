import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/Services/HomeService/home.service';
import {IProduct} from '../../interfaces/CategoryPageInterfaces/IProduct';
import { DetailsComponent } from './components/details/details.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:IProduct={} as IProduct;
  productId:string =''
  show:any;
  constructor(private activatedRoute:ActivatedRoute,private homeService:HomeService) {

    this.activatedRoute.paramMap.subscribe(params=>{
      this.productId=params.get('id') as string;
      this.getProduct();
    })

   }
   private getProduct()
   {
    // window.fetch('../../../assets/Data/Products.json').then(response=>{
    //   response.json().then(data=>{
    //       this.product=data.products.find((product: { id: string; })=>product.id==this.productId) 
    //       console.log(this.product)
    //   })})
    this.homeService.GetProductById(this.productId).subscribe(data=>{
      this.product=data;
      console.log(this.product)
    },error=>{
      alert('المنتج غير موجود')
    })
    }

  ngOnInit(): void {
  }
  handelShowAlert(isShow:any)
  {
    this.show=isShow as boolean;
    setTimeout(()=>{
      this.show=false;
    },3500)
  }

}
