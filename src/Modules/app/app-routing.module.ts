import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';
import { AuthGuard } from 'src/Gaurds/auth.guard';
import { AuthComponent } from '../auth/auth.component';
import { AddRolesToUserComponent } from '../auth/components/add-roles-to-user/add-roles-to-user.component';
import { AllusersComponent } from '../auth/components/allusers/allusers.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { CartComponent } from '../cart/cart.component';
import { CategoryPageComponent } from '../category-page/category-page.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SubCategoryPageComponent } from '../sub-category-page/sub-category-page.component';
import { DelivercompanyComponent } from '../delivercompany/delivercompany.component';
import { DelivercompanycreateComponent } from '../delivercompany/delivercompanycreate/delivercompanycreate.component';
import { DelivercompanydetailsComponent } from '../delivercompany/delivercompanydetails/delivercompanydetails.component';
import { DelivercompanyupdateComponent } from '../delivercompany/delivercompanyupdate/delivercompanyupdate.component';
import { SupcategoriesComponent } from '../SupCategory/supcategories/supcategories.component';
import { SupcategorydetailComponent } from '../SupCategory/supcategorydetail/supcategorydetail.component';
import { UpdateComponent } from '../SupCategory/update/update.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { AllCateoriesComponent } from './components/all-cateories/all-cateories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CreateSupcategoriesComponent } from '../SupCategory/create-supcategories/create-supcategories.component';
// import { SigninComponent } from '../auth/components/signin/signin.component';

const routes: Routes = [
  // { path: 'signin', component: LoginComponent },
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  }
  ,
  {
    path: 'account', component: AuthComponent, children: [
          // { path: 'signin', component: SigninComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        {path:'Getallusers', component:AllusersComponent,canActivate:[AuthGuard]},
        {path:'addRoleToUser',component:AddRolesToUserComponent,canActivate:[AuthGuard]}
    ]
  },
  { path:'category/:id',component:CategoryPageComponent},
  {path:'subcategory/:id',component:SubCategoryPageComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  // {path:'header',component:HeaderComponent},
  {path:'sup/:id',component:SupcategorydetailComponent},
    
  {path:'update/:id',component:UpdateComponent},
  {path:'dashboard/allcompnies/create',component:DelivercompanycreateComponent},
  // {path:'dashboard/allcompnies/update/:id',component:DelivercompanyupdateComponent},
  // {path:'dashboard/allcompnies/details/:id',component:DelivercompanydetailsComponent},
  {
      path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],

      children:[ 
            {path:'allsup',component:SupcategoriesComponent,

            },
            {path:'allsup/create',component:CreateSupcategoriesComponent},
            {path:'allcompnies',component:DelivercompanyComponent,
              children:[
                // {path:'create',component:DelivercompanycreateComponent},
                {path:'update/:id',component:DelivercompanyupdateComponent},
                {path:'details/:id',component:DelivercompanydetailsComponent},
              ]
            },
            { path:'products',component:ProductComponent } ,
            {path:'categories',component:CategoryComponent,children:[
              {path:'all',component:AllCateoriesComponent},
              {path:'add',component:AddCategoryComponent},
            ]}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
