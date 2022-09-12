import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidators } from 'src/CustomValidators/PasswordValidators/ConfirmPassword';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { IRegisterUser } from 'src/interfaces/AuthInterfaces/IRegister';
import { AuthService } from 'src/Services/AuthService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup = {} as FormGroup;
  validatoInputs: any = {
    firstNameIsValid: true,
    lastNameIsValid: true,
    emailIsValid: true,
    userNameIsValid: true,
    phoneNumberIsValid: true,
    passwordIsValid: true,
    confirmPasswordIsValid: true,
    countryIsValid: true,
    cityIsValid: true,
    streetIsValid: true,

  }
  Errors: string[] = []
  AccountCreated: boolean = false;
  constructor(private authService:AuthService,  private registerFormBuilder: FormBuilder, private router: Router) {


  }

  ngOnInit(): void {
    console.log(this.authService.GetAllusers().subscribe(data => {
      console.log(data)
    }, error => console.log(error)))
    this.registerFrom = this.registerFormBuilder.group(
      {
        firstName: ['', [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        lastName: ['', [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        userName: ['', [Validators.required, Validators.minLength(8)]],
        phoneNumber: ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]]
      }, { validator: [ConfirmPasswordValidators] }
    );
  }

  get FirstName() { return this.registerFrom.get('firstName'); }
  get LastName() { return this.registerFrom.get('lastName'); }
  get Email() { return this.registerFrom.get('email') }
  get UserName() { return this.registerFrom.get('userName'); }
  get Password() { return this.registerFrom.get('password'); }
  get ConfirmPassowrd() { return this.registerFrom.get('confirmPassword'); }
  get Country() { return this.registerFrom.get('country') }
  get City() { return this.registerFrom.get('city') }
  get Street() { return this.registerFrom.get('street') }
  get PhoneNumber() { return this.registerFrom.get('phoneNumber') }


  public handelRegistration() {
    if (!this.validatInput!()) {
      return
    }
    // create registeration user
    const registerUser: IRegisterUser = {
      firstName: this.FirstName?.value,
      lastName: this.LastName?.value,
      email: this.Email?.value,
      userName: this.UserName?.value,
      phoneNumber: this.PhoneNumber?.value,
      password: this.Password?.value,
      country: this.Country?.value,
      city: this.City?.value,
      street: this.Street?.value,
    }
    // post new user to backend
    this.Errors = []
    this.authService.Register(registerUser).subscribe(data => {

      // user login by save token in localstorage
      localStorage.setItem(TokenEnum.Token, data.token);
      localStorage.setItem(TokenEnum.Expiration, data.expiration)
      this.authService.isLogged.next(true) 
      // navigate to home page
      this.AccountCreated = true;
      setTimeout(() => {
        this.AccountCreated = false
        this.router.navigate(['/']) // go to home page
      }, 3000);
    }, exception => {
      console.log(exception);
      if (exception.error.errors) {
        for (let key in exception.error.errors) {
          for (let val of exception.error.errors[key])
            this.Errors.push(val)
        }
      } else {
        this.Errors.push(exception.error)
      }

    }, () => {
      // console.log('completed')

    })

  }

  private validatInput() {
    var isValid = true;
    if (this.FirstName?.invalid) {
      this.validatoInputs.firstNameIsValid = false;
      isValid = false
    }
    else {
      this.validatoInputs.firstNameIsValid = true;
    }
    if (this.LastName?.invalid) {
      this.validatoInputs.lastNameIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.lastNameIsValid = true;
    }
    if (this.Email?.invalid) {
      this.validatoInputs.emailIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.emailIsValid = true;
    }
    if (this.UserName?.invalid) {
      this.validatoInputs.userNameIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.userNameIsValid = true;
    }
    if (this.PhoneNumber?.invalid) {
      this.validatoInputs.phoneNumberIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.phoneNumberIsValid = true;
    }
    if (this.Password?.invalid) {
      this.validatoInputs.passwordIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.passwordIsValid = true;
    }
    if (this.ConfirmPassowrd?.invalid) {
      this.validatoInputs.confirmPasswordIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.confirmPasswordIsValid = true;
    }
    if (this.Country?.invalid) {
      this.validatoInputs.countryIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.countryIsValid = true;
    }
    if (this.City?.invalid) {
      this.validatoInputs.cityIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.cityIsValid = true;
    }
    if (this.Street?.invalid) {
      this.validatoInputs.streetIsValid = false;
      isValid = false

    } else {
      this.validatoInputs.streetIsValid = true;
    }

    return isValid;
  }


}
