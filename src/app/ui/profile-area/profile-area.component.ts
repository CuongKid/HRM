import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Employee } from 'src/app/models/employee';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile-area',
  templateUrl: './profile-area.component.html',
  styleUrls: ['./profile-area.component.css']
})
export class ProfileAreaComponent implements OnInit {

  constructor(private profileService: ProfileService,
    private loginService: LoginService) {
    this.loginService.checkingRedirectLogin();
  }

  listEmployee: Employee[];

  isDisplay: boolean = false;
  activeID = "";

  clickedRow(_employeeID: string) {
    this.activeID = _employeeID;
  }

  ngOnInit() {

    /**
     * Gọi service lấy tất cả danh sách nhân viên
     */
    this.profileService.getAllEmployee().subscribe(
      data => {
        this.listEmployee = data;
      }
    )
  }

  openFormAdd() {
    this.isDisplay = true;
  }

  closeFormAdd() {
    this.isDisplay = false;
  }
}
