import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { User } from '../../models/user';

import { LoginService } from '../../services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) { }
  /**
   * Khai báo đối tượng người dùng
   * CREATED BY: DNCuong(29/10/2018)
   */
  user: User = { username: "", password: "" };

  isRequiredUsername = false;
  isRequiredPassword = false;

  /**
   * Hàm xử lí sự kiện người dùng xác nhận login
   * CREATED BY: DNCuong(29/10/2018)
   */
  confirmLogin() {
    //Kiểm tra điều kiện người dùng đã nhập cả username và password
    if (this.user.username === "") {
      this.isRequiredUsername = true;
    } else {
      this.isRequiredUsername = false;
    };
    if (this.user.password === "") {
      this.isRequiredPassword = true;
    }
    else {
      this.isRequiredPassword = false;
    }

    //Nếu cả username và password được nhập đầy đủ thì mới thực hiện chức năng đăng nhập
    if (this.isRequiredUsername === false && this.isRequiredPassword === false) {
      this.loginService.getAccessToken(this.user).subscribe(
        data => {
          /**
           * Kiểm tra trong localStorage có Access_token thì mới đăng nhập được
           */
          if(localStorage.getItem("AccessToken")===data.access_token){
            this.router.navigate(['/human-resource']);
          }
        }
      )
    }
  }

  ngOnInit() {
  }
}
