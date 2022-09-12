import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm:FormGroup;
  constructor(private formGroupBuilder:FormBuilder) {

    this.productForm=this.formGroupBuilder.group({
        'name':['',[Validators.required]],
        'price':['',[Validators.required]],
        'description':['',[Validators.required]],
        'companyName':['',[Validators.required] ],
        'subCategoryName':['',[Validators.required]],
        'productImage':['',[Validators.required]]
    })

   }

  ngOnInit(): void 
  {
    
  }

}
