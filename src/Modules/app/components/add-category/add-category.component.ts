import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryForm:FormGroup={} as FormGroup 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
