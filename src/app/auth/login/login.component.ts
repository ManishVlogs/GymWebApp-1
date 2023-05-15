import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private _loginServiceService: LoginServiceService) { }

  ngOnInit(): void {
  }

  login() {
    var login = {
      UserName: "Pooja Sawant",
      PassWord: "Pooja@123"
    }
    var Auth = this._loginServiceService.AuthenticateUser(login);
  }

}
