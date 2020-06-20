import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service.service';
import { Router } from '@angular/router';
import { TokenStorage } from '../../shared/services/token-storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent  {

  constructor(private router :Router, private authService: AuthService, private token: TokenStorage) {
    if(this.token.getToken()!=null){
      this.router.navigateByUrl('products/:category')

    }
   }

  username: string;
  password: string;
 t :token;
  login( f: NgForm  ): void {
      this.authService.login(f.value['username'], f.value['password']).subscribe(
      data => {
       this.t= data as token
        this.token.saveToken(this.t.tokenType+" "+this.t.accessToken);

        location.reload()
        
 


       }
    );
  }
 

}
export class token {
  accessToken : string;
  tokenType:string;

}
