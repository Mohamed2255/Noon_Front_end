import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISupCategory } from 'src/interfaces/SupCategoryIntefaces/SupCategory';
import { SupcategoryServiceService } from 'src/Services/Supcategory/supcategory-service.service';


@Component({
  selector: 'app-supcategorydetail',
  templateUrl: './supcategorydetail.component.html',
  styleUrls: ['./supcategorydetail.component.scss']
})
export class SupcategorydetailComponent implements OnInit {
id:any;
data!:ISupCategory;
URL:any="https://localhost:5200/images/subCategoryImages/";
  constructor(private service:SupcategoryServiceService,private active:ActivatedRoute) {
  this.id=active.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.service.details(this.id).subscribe(data=>{
      this.data=data;
    })
  }

}
