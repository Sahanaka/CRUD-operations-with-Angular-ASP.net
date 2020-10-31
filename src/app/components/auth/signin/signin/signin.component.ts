import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { SignIn } from '../../../../interfaces/userSignIn.model';
import { RepositoryService } from '../../../../shared/services/repository.service';
import { ErrorHandlerService } from '../../../../shared/services/error-handler.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public errorMessage: string = '';
  public signinForm: FormGroup;
  
  constructor(private router: Router, private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup(
      {
        email: new FormControl(""),
        password: new FormControl(""),
      });
  }

  public signIn() {
    const user: SignIn = {
      email: this.signinForm.value.email,
      password: this.signinForm.value.password
    }

    const URL = 'api/user/login';
    this.repository.create(URL, user)
      .subscribe(res => {
      },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        if (error.status == 200)
        {
            alert("Login Success");
            this.router.navigate(['/home']);
        }
        else
          alert(error.error);
      }))
  }

  public redirectToSignUp() {
    this.router.navigate(['/signup']);
  }

}
