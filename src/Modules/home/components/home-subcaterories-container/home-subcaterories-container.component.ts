import { Component, OnInit } from '@angular/core';
import { ISubCategory } from 'src/interfaces/HomeInterfaces/ISubCategory';
import { HomeService } from 'src/Services/HomeService/home.service';

@Component({
  selector: 'app-home-subcaterories-container',
  templateUrl: './home-subcaterories-container.component.html',
  styleUrls: ['./home-subcaterories-container.component.scss']
})
export class HomeSubcateroriesContainerComponent implements OnInit {
  SubCateories:ISubCategory[]=[] 
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.GetAllSubCategories().subscribe(data=>{
      this.SubCateories=data;
    },error=>{
      console.log(error)
    })
  }

}
