import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';
import { HomeService } from 'src/Services/HomeService/home.service';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss']
})
export class NavCategoriesComponent implements OnInit {
  Categories:ICategory[]=[]
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.GetAllCategories().subscribe(data=>{
      this.Categories=data;
    },error=>{
      console.log(error);
    });
  }



}
