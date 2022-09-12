import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISubCategory } from 'src/interfaces/HomeInterfaces/ISubCategory';

@Component({
  selector: 'app-home-subcategory-item',
  templateUrl: './home-subcategory-item.component.html',
  styleUrls: ['./home-subcategory-item.component.scss']
})
export class HomeSubcategoryItemComponent implements OnInit {

  constructor(private router:Router) { }
@Input('subcategory') Subcategory:ISubCategory={} as ISubCategory;
  ngOnInit(): void {
  }
  GotoSubCategory()
  {
    this.router.navigate([`/subcategory/${this.Subcategory.subCategoryId}`]);

  }
}
