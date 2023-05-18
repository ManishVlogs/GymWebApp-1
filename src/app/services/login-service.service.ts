import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ApiConstant } from './pipes/global/api-constant';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(protected http: HttpClient, private ApiEndPoints: ApiConstant) { }
  Base_URL = environment.apiUrl;

  public AuthenticateUser(login: any): Observable<any> {
     return this.http.post(`${this.Base_URL}` + `${this.ApiEndPoints.Login.AuthenticateUser}`, login);
    
  }

}
