import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';
import { CategoryService } from 'src/Services/CategoryService/category.service';
import { HomeService } from 'src/Services/HomeService/home.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categoryId:string=''
  Category:ICategory={} as ICategory;
  Products:any=[]
  public categoryIdSubject:BehaviorSubject<string>;

  constructor(private activatedRoute:ActivatedRoute,private categoryService:CategoryService,private homeService:HomeService) {
    this.categoryIdSubject=new BehaviorSubject('');
    this.categoryIdSubject.subscribe(cateId=>{
      this.categoryService.GetCategoryById(cateId).subscribe(
        category=>{
            this.Category=category;
            this.Products=category.products
            //this.homeService.GetAllProducts()
            // window.fetch('../../../assets/Data/Products.json').then(response=>{
            //   response.json().then(data=>{
            //     this.Products=data.products.filter((product: { cateId: string; })=>product.cateId==cateId) 
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
      this.categoryIdSubject.next(param.get('id')?.toString() as string)
     })
    
   }

  ngOnInit(): void {

 
  

  }

}
