import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorage } from './token-storage.service';

@Injectable()
export class UserService {
  private sub2;

  constructor(private httpClient :HttpClient,private token :TokenStorage) { }



  getuser(){
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
   return  this.httpClient.get('http://localhost:8080/user/getcourent' , { headers: headers})

   
  }
  getarticleuser(){
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
   return  this.httpClient.get('http://localhost:8080/projet/getcourentArticles' , { headers: headers})

   
  }
  updatephoto(uploadImageData: FormData){
    let headers = new HttpHeaders({
      'Authorization':this.token.getToken()
    })
   return  this.httpClient.post('http://localhost:8080/user/update' ,uploadImageData, { headers: headers})

   
  }

}
