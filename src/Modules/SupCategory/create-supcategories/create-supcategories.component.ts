import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ISupCategory } from 'src/interfaces/SupCategoryIntefaces/SupCategory';
import { SupcategoryServiceService } from 'src/Services/Supcategory/supcategory-service.service';

@Component({
  selector: 'app-create-supcategories',
  templateUrl: './create-supcategories.component.html',
  styleUrls: ['./create-supcategories.component.scss']
})
export class CreateSupcategoriesComponent implements OnInit {
  
  constructor(private service:SupcategoryServiceService,private route:Router, private fb:FormBuilder) { }

  uploadForm!: FormGroup; 
  errormessage:string=""
  categories!:any

  ngOnInit(): void {
    this.uploadForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      image:['',[Validators.required]],
  })}
  get name()
  {
    return this.uploadForm.get("name")
  }
  get image()
  {
    return this.uploadForm.get("image")
  }
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('image')?.setValue(file);
    }
  }
 
  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.uploadForm.get('image')?.value);
    formData.append('name', this.uploadForm.get('name')?.value);

    this.service.create(formData).subscribe(data=>{
      this.route.navigateByUrl('/dashboard/allsup');
    })
  }

}
