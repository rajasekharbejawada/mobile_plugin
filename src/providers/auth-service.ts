import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';

export class User{
  name:string;
  
  constructor(name:string){
    this.name = name;
    
  }
}
@Injectable()
export class AuthService {
Currentuser: User;
  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  public login(credentials) {
    
       
        if (credentials.user_name === null || credentials.password === null) {
          return Observable.throw("Please insert credentials");
        } else {
          return Observable.create(observer => {
            // At this point make a request to your backend to make a real check!
            if(credentials.user_name==='arjun'){
              
              let access = (credentials.user_name === "arjun" && credentials.password === "arjun");
              observer.next(access);
              }
            else {
             
              let access = (credentials.user_name === "miracle" && credentials.password === "miracle");
              observer.next(access);
            }
            //this.currentUser = new User('Mahesh', 'mkarumuri@miraclesoft.com');        
            observer.complete();
          });
        }
      }
    

}
