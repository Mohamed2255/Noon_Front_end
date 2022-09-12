import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISupCategory } from 'src/interfaces/SupCategoryIntefaces/SupCategory';
import { SupcategoryServiceService } from 'src/Services/Supcategory/supcategory-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {
  id:any;
  constructor(private service:SupcategoryServiceService,private active:ActivatedRoute,private route:Router) {
    this.id=active.snapshot.paramMap.get("id");
   }
   updatedForm!: FormGroup;  
  ngOnInit(): void {
    this.service.details(this.id).subscribe(data=>{
      this.updatedForm = new FormGroup({
        subCategoryName:new FormControl(data['subCategoryName'],[Validators.required,Validators.minLength(3)]),
        subCategoryImage:new FormControl(data['subCategoryImage']),
      })
  })
  console.log(this.id)    
  }
  get subCategoryName()
  {
    return this.updatedForm.get("subCategoryName");
  }
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.updatedForm.get('subCategoryImage')?.setValue(file);
    }
  }
  onupdated(){
 
    
      const formData = new FormData();
      formData.append('subCategoryImage', this.updatedForm.get('subCategoryImage')?.value);
      formData.append('subCategoryName', this.updatedForm.get('subCategoryName')?.value);
     
    this.service.update(this.id,formData).subscribe(data=>{
      this.route.navigateByUrl('dashboard/allsup');
    })    
    
  }
}
