import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';
import { HomeService } from 'src/Services/HomeService/home.service';

@Component({
  selector: 'app-all-cateories',
  templateUrl: './all-cateories.component.html',
  styleUrls: ['./all-cateories.component.scss']
})
export class AllCateoriesComponent implements OnInit {

  categories:ICategory[]=[]
    constructor(private homeService:HomeService) { 
      this.homeService.GetAllCategories().subscribe(data=>{
        this.categories=data;
      },error=>{console.log(error)})
    }

  ngOnInit(): void {
  }

}
