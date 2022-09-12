import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ISubCategory } from 'src/interfaces/HomeInterfaces/ISubCategory';

@Component({
  selector: 'app-subcategory-item',
  templateUrl: './subcategory-item.component.html',
  styleUrls: ['./subcategory-item.component.scss']
})
export class SubcategoryItemComponent implements OnInit {

  constructor(private router:Router) { }
@Input('subcategory')subcategory:ISubCategory={} as ISubCategory
  ngOnInit(): void {
  }

  public gotSubCategoryPage(){
    this.router.navigate([`subcategory/${this.subcategory.subCategoryId}`])
  }

}
