import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User"
import {catchError, first, Observable} from "rxjs";
import {ErrorHandlerService} from "./error-handler.service";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = "http://localhost:3000/auth/signup"
  httpOptions:{headers:HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };
  constructor(private http:HttpClient, private errorHandlerService:ErrorHandlerService) {
  }

  signup(user:Omit<User,"id">):Observable<User>{
    return this.http.post<User>(this.url,user,).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    )
  }
}
