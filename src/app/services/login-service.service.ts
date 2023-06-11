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

  public GetTestApi(var1:any,var2:any): Observable<any> {
    console.log(`${this.Base_URL}` + `${this.ApiEndPoints.Login.GetTestApi}`+var1+'&var2='+var2);
     return this.http.get(`${this.Base_URL}` + `${this.ApiEndPoints.Login.GetTestApi}`+var1+'&var2='+var2);
    
  }

  public GetTestApi2(var1:any,var2:any): Observable<any> {
    console.log(`${this.Base_URL}` + `${this.ApiEndPoints.Login.GetTestApi2}`+var1+'&var2='+var2);
     return this.http.get(`${this.Base_URL}` + `${this.ApiEndPoints.Login.GetTestApi2}`+var1+'&var2='+var2);
    
  }

}
