import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';
import { HomeService } from 'src/Services/HomeService/home.service';

@Component({
  selector: 'app-footer-cayegories',
  templateUrl: './footer-cayegories.component.html',
  styleUrls: ['./footer-cayegories.component.scss']
})
export class FooterCayegoriesComponent implements OnInit {
  Url:string=environment.SubCategoriesImagesURL;
  private categories:ICategory[]=[] 
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.GetAllCategories().subscribe(data=>{
      this.categories=data
      console.log(this.categories);
    },error=>console.log(error));
  }
get Categories(){
  return this.categories;
}
}
