import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({});

  constructor(public router: Router,private formBuilder: FormBuilder,private authService: LoginService ){
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    //console.log(this.loginForm.value)
    //console.log(this.loginForm.valid)
    if(this.loginForm.valid){
      const userAuth = this.loginForm.value;
      this.authService.login(userAuth).subscribe({
       next: (data : any) => {
          // console.log(data)
          sessionStorage.setItem('logged', 'true');
          this.router.navigateByUrl('/home');
       },
       error(err) {
        if(err.name == 'HttpErrorResponse'){
          Swal.fire({
            confirmButtonColor: '#60A5FA',
            icon: 'error',
            title: 'Oops...',
            text: 'Something has gone wrong. Check your email and/or password!',
            //text: 'Something went wrong!',
          })
        }
       },
      });
       
    }else{
      Swal.fire({
        confirmButtonColor: '#60A5FA',
        icon: 'error',
        title: 'Oops...',
        text: 'Enter valid values!',
        
      })
    }
  }

  togglePasswordMode(input: any): any{
    input.type = input.type === 'password' ? 'text' : 'password';
  
  }
}
