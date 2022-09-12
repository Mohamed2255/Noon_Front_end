import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from 'src/Services/HomeService/home.service';
import { SupcategoryServiceService } from 'src/Services/Supcategory/supcategory-service.service';

@Component({
  selector: 'app-sub-category-page',
  templateUrl: './sub-category-page.component.html',
  styleUrls: ['./sub-category-page.component.scss']
})
export class SubCategoryPageComponent implements OnInit {
  private subCateId:string=''
  Products:any=[]
  public subCategoryIdSubject:BehaviorSubject<string>;
  constructor(private activatedRoute:ActivatedRoute,private subCateService:HomeService) { 
    this.subCategoryIdSubject=new BehaviorSubject('');

    
  }

  ngOnInit(): void {

    this.subCategoryIdSubject.subscribe(subcateId=>{
      this.subCateService.GetSubCategoryById(subcateId).subscribe(
        category=>{
            this.Products=category.products;
            // window.fetch('../../../assets/Data/Products.json').then(response=>{
            //   response.json().then(data=>{
            //     this.Products=data.products.filter((product: { subCateId: string; })=>product.subCateId==subcateId) 
            //     console.log(this.Products)
            //   })
            //   // console.log(,'response')
            // },error=>{
            //   console.log(error,'error')
            // })
        },error=>{
          console.log(error)
        })
    })
    this.activatedRoute.paramMap.subscribe(param=>{
      // console.log(param.get('id'))
      this.subCategoryIdSubject.next(param.get('id')?.toString() as string)
     })
  }

}
