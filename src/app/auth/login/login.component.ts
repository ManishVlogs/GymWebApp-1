import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  data: any;
  constructor(private http: HttpClient, private _loginService: LoginServiceService) {
  }

  ngOnInit() {
    this.test()
  }

  test() {
    console.log('method click');
    this._loginService.GetTestApi('test1', 'tets2').subscribe(res => {
      if (res != null) {
        alert(res[0].name
        )
      } else {
        alert('Error Occured')
      }
    })
  }

  fetchData() {
    console.log('method click');
    this._loginService.GetTestApi2('test1', 'tets2').subscribe(res => {
      if (res != null) {
        alert(res[0].name
        )
      } else {
        alert('Error Occured')
      }
    })
  }
}