import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'bearer ' + localStorage.getItem("AccessToken")
    })
  };

  subUrl = 'api/employee';

  /**
   * Hàm gọi tới server lấy về danh sách nhân viên
   * CREATED BY: DNCuong(13/11/2018)
   */
  getAllEmployee(): Observable<any> {
    return this.http.get<any>(this.loginService.urlServer + this.subUrl + '/getAllEmployee', this.httpOptions).pipe(
      tap(data => {
        return data;
      }),
    );
  }

  getEmployeeByID(ID: string): Observable<any> {
    return this.http.post<any>(this.loginService.urlServer + '/getAllEmployee', this.httpOptions).pipe(
      tap(data => {
        return data;
      }),
    );
  }
}