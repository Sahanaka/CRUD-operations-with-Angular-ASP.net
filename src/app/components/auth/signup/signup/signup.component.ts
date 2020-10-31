import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { SignUp } from '../../../../interfaces/userSignUp,model';
import { RepositoryService } from '../../../../shared/services/repository.service';
import { ErrorHandlerService } from '../../../../shared/services/error-handler.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public errorMessage: string = '';
  public signupForm: FormGroup;
  
  constructor(private router: Router, private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        email: new FormControl(""),
        password: new FormControl(""),
        username: new FormControl("")
      });
  }

  public signUp() {
    const user: SignUp = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      username: this.signupForm.value.username
    }

    const URL = 'api/user/signup';
    this.repository.create(URL, user)
      .subscribe(res => {
      },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        if (error.status == 200)
        {
            alert("Successfully created the account");
            this.router.navigate(['/home']);
        }
        else
          alert(error);
      }))

  }

  public redirectToSignIn() {
    this.router.navigate(['/']);
  }


}
