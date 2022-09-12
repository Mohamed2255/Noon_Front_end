import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ISubCategory } from 'src/interfaces/HomeInterfaces/ISubCategory';
import { ProductService } from 'src/Services/ProductService/product.service';
import { ICategory } from '../../../../interfaces/HomeInterfaces/ICategory';
// import { ICompany } from '../../../../interfaces/ProductInterfaces/ICompany';
import { IProductAdd } from '../../../../interfaces/ProductInterfaces/IProductAdd';
import { IProductupdateordel } from '../../../../interfaces/ProductInterfaces/IProductUpdateorDel';

// import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Categories: ICategory[] = []
  SupCategories: ISubCategory[] = []  as ISubCategory[]
  Companies: any
  file:File={} as File
  constructor(private productservice: ProductService, private fb: FormBuilder, private http: HttpClient, private productService: ProductService) {

    this.getCompanies();
    this.getCategories();
    // this.getSupCategories();
  }

  productForm = this.fb.group({
    name: [''],
    price: [''],
    Description: [''],
    companyName: [''],
    categoryName: [''],
    supCategoryName: [''],
    
  })
  ngOnInit(): void {
  }
  getCompanies() {
    this.http.get('https://localhost:5200/api/Company/allCompanies').subscribe(data => this.Companies = data)
  }
  get productImage() {
    return this.productForm.get('productimage') ;
  }

  // getSupCategories() {
  //   this.http.get<ISupCategory[]>('https://localhost:5200/api/SubCategory/getall').subscribe(data => this.SupCategories = data)
  // }
  getCategories() {
    this.http.get<ICategory[]>('https://localhost:5200/api/Category/All').subscribe(data => this.Categories = data)
  }
  product: IProductAdd = {} as IProductAdd
  get productName() {
    return this.productForm.get('name');
  }
  productList: IProductupdateordel[] = []

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {

      // const myevent=event.target as HTMLInputElement
      let file = event.target.files[0];
      // this.productForm.get('productimage')?.setValue(file);
      this.file=file
      this.productForm.patchValue({
        productimage:file
      })
      this.productForm.get('productimage')?.updateValueAndValidity();
    }
  }


  handelCategoryChange(){
    const Category=this.Categories.find(cate=>cate.id==this.productForm.get('categoryName')?.value.toString())
    if(Category)
    this.SupCategories=Category.subCategories 
    console.log(this.SupCategories)
  }

  postData() {
    // this.product.Name = this.productName?.value;
    // this.product.Price = this.productForm.get('price')?.value;
    // this.product.Description = this.productForm.get('Description')?.value;
    // this.product.CompanyName = this.productForm.get('companyName')?.value;
    // this.product.CategoryName = this.productForm.get('categoryName')?.value;
    // this.product.SupCategoryName = this.productForm.get('supCategoryName')?.value;
    // this.product.ProductImage=this.productImage?.value;


    // this.product.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJFYnJhaGVtIiwianRpIjoiZTAzNWQyMjUtYjYwYy00OWEyLWExMzgtYTgxMDYwODJmNDBjIiwiZW1haWwiOiJlZUBnbS5jb20iLCJyb2xlcyI6WyJVU0VSIiwiQWRtaW4iXSwiZXhwIjoxNjYwNjkzMzk5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MjAwLztodHRwczovL2xvY2FsaG9zdDo0NDAzOS8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAvIn0.mLWn40Zsmq_tnKwm5Kit0eqLxv3zVLQRBg6m7iGkVVk'
    const formData = new FormData();
    // formData.append('image', this.productForm.get('productimages')?.value,this.file.name);
    formData.append('Productimage', this.file,this.file.name);
    formData.append('Name', this.productForm.get('name')?.value);
    formData.append('Price', this.productForm.get('price')?.value);
    formData.append('Description', this.productForm.get('Description')?.value);
    formData.append('CompanyId', this.productForm.get('companyName')?.value);
    formData.append('CategoryId', this.productForm.get('categoryName')?.value);
    formData.append('SupCategoryId', this.productForm.get('supCategoryName')?.value)
    // formData.forEach((vale,key)=>console.log(vale,key))
    // console.log(this.productForm.value)
    // console.log(formData)
    this.productService.AddProduct(formData).subscribe(
      data => {
         console.log(data)
         alert('تم اضافه المنتج بنجاح')
         },
    error=>{
      console.log(error)
    },()=>{
    })
  }
  getAllProducts() {
    this.productservice.getAll().subscribe(data => this.productList = data, err => console.log(err));
  }
  // item: IProductAdd ={} as  IProductAdd
  // update(id: any) {
  //   this.item.Name = this.productName?.value;
  //   this.item.Price = this.productForm.get('price')?.value;
  //   this.item.Description = this.productForm.get('description')?.value;
  //   this.item.CompanyName = this.productForm.get('companyName')?.value;
  //   this.item.CategoryName = this.productForm.get('categoryName')?.value;
  //   this.item.SupCategoryName = this.productForm.get('supCategoryName')?.value;
  //   this.productservice.updateProduct(id, this.item).subscribe(data => { console.log(data) }, err => console.log(err))
  // }
  dalete(id: any) {
    this.productservice.deleteProduct(id).subscribe(data => { console.log(data) }, err => console.log(err))
  }
}
