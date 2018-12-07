import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  public urlServer = 'http://localhost:50133/';

  // options={
  //   headers: new HttpHeaders({
  //     'Content-type':'application/json',
  //     ''
  //   })
  // }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };


  /**
   * Phương thức lấy accesstoken và lưu vào localstorage
   * CREATED BY: DNCuong(13/11/2018)
   * @param user tài khoản người dùng
   */
  getAccessToken(user: User): Observable<any> {
    let body = "username=" + user.username + "&password=" + window.btoa(encodeURI(user.password)) + "&grant_type=password";
    return this.http.post<any>(this.urlServer + 'token', body, this.httpOptions).pipe(
      tap(data => {
        localStorage.setItem("AccessToken", data.access_token);
        return data;
      })
    )
  }

  /**
   * Hàm kiểm tra nếu như người dùng chưa đăng nhập thì không thể tự chuyển tới các component bên trong được
   * CREATED BY: DNCuong(13/11/2018)
   */
  checkingRedirectLogin() {
    if (localStorage.getItem("AccessToken") === null) {
      this.router.navigate(['/login']);
    }
  }
}
