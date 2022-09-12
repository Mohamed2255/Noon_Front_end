import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';


@Component({
  selector: 'app-subcateogries-container',
  templateUrl: './subcateogries-container.component.html',
  styleUrls: ['./subcateogries-container.component.scss']
})
export class SubcateogriesContainerComponent implements OnInit {

  // subCategories:ISubCategory[]=[]
  
  constructor() { }

@Input('Category') Category:ICategory={} as ICategory;
  ngOnInit(): void {
  }
}
