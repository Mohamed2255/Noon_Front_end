import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RolesArray } from 'src/Enums/AuthEnums/AuthEnums';
import { IUser } from 'src/interfaces/AuthInterfaces/IUser';
import { IUserRole } from 'src/interfaces/AuthInterfaces/IUserRole';
import { AuthService } from 'src/Services/AuthService/auth.service';

@Component({
  selector: 'app-add-roles-to-user',
  templateUrl: './add-roles-to-user.component.html',
  styleUrls: ['./add-roles-to-user.component.scss']
})
export class AddRolesToUserComponent implements OnInit {

  users: IUser[] = []
  selectedUser: IUser = {} as IUser
  selectedRole: string = ''
  Roles: string[] = []
  Errors: any = []
  validator: any = {
    validUser: false,
    validRole: false
  }
  completeMessage:string=''
  isAdded: boolean = false
  constructor(private authService: AuthService, private route: ActivatedRoute) {
    console.log(route)
    this.Roles = RolesArray
  }

  ngOnInit(): void {

    this.authService.GetAllusers().subscribe(data => {
      this.users = data
    }, exceptions => {
      if (exceptions.status == 401 || exceptions.status == 403) {
        this.Errors.push('ليس لديك الصلاحيه للاضافه');
     }
      console.log(exceptions)
    }, () => console.log('completed'))
  }

  handelSelect(userId: any) {
    this.selectedUser = this.users.find(searchUser => searchUser.id == userId) as IUser
    console.log(this.selectedUser)
    if (userId == '') {
      this.validator.validUser = false
      console.log(this.validator)
      return
    }
    this.validator.validUser = true

  }
  handelSelectRole(Role: string) {
    if (Role == '') {
      this.validator.validRole = false
      console.log(this.validator)

      return
    }
    this.validator.validRole = true
    this.selectedRole = this.Roles.find(role => role == Role) as string
    console.log(this.selectedRole)
  }

  private DataIsCompleted() {
    if (this.selectedRole == '' || this.selectedUser.id == '') {
      this.validator.validRole = this.selectedRole == '' ? false : true;
      this.validator.validUser = this.selectedUser.id == '' ? false : true;
      return false;
    }
    return true;
  }
  private get UserRoleAsObject(): IUserRole {
    return {
      userId: this.selectedUser.id,
      role: this.selectedRole
    }
  }
  addRoleToUserHandeller()
   {

    if (!this.DataIsCompleted()) return;
    const userRole: IUserRole = this.UserRoleAsObject;
    // send request
    this.authService.AddRoleToUser(userRole).subscribe(data => {
      console.log(data)
    }, exptions => {
      if (exptions.status == 401 || exptions.status == 403) {
         this.Errors.push('ليس لديك الصلاحيه للاضافه');
      }
      else 
      {
          if (exptions.error.errors) 
          {
              for (var key in exptions.error.errors)
               {
                  for (var error of exptions.error.errors[key])
                  {
                      this.Errors.push(error);
                  }
              }
          }
          else 
          {
            this.Errors.push(exptions.error)
          }
      }
    }, 
    () => {
      this.Errors=[];
        this.isAdded = true;
        this.completeMessage='تم اضافه الوظيفه '
        setTimeout(() => {
          this.isAdded = false;
          this.completeMessage=''
        }, 3000);
    })

  }

  /// this action for remove role from user

  RemoveRoleFromUserHandeller()
  {
      if(!this.DataIsCompleted())
      {
        return
      }

      const userRole: IUserRole = this.UserRoleAsObject;
      this.authService.RemoveRoleFromUser(userRole).subscribe(data => {
        // console.log(data,'data')
      }, exptions => {
        if (exptions.status == 401 || exptions.status == 403) {
           this.Errors.push('ليس لديك الصلاحيه للاضافه');
        }
        else 
        {
          console.log(exptions)
            if (exptions.error.errors) 
            {
                for (var key in exptions.error.errors)
                 {
                    for (var error of exptions.error.errors[key])
                    {
                        this.Errors.push(error);
                    }
                }
            }
            else 
            {
              this.Errors.push(exptions.error)
            }
        }
      }, 
      () => {
          this.isAdded = true;
        this.completeMessage='تم حذف الوظيفه '
          
          setTimeout(() => {
            this.isAdded = false;
            this.Errors=[];
            this.completeMessage=''
          }, 3000);
      })
  }

}
