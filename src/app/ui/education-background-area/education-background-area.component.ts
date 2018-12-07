import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Salary } from 'src/app/models/salary';
import { EducationBackground } from 'src/app/models/education';



@Component({
  selector: 'app-education-background-area',
  templateUrl: './education-background-area.component.html',
  styleUrls: ['./education-background-area.component.css']
})
export class EducationBackgroundAreaComponent implements OnInit {

  ELEMENT_DATA: EducationBackground[] = [
    { EducationalBackgroundCode: "ĐH2",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
    { EducationalBackgroundCode: "ĐH1",EducationalBackgroundName:"đại học", Description: "Văn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nướcăn bằng nước ngoài + tiến sỹ trong nước"},
  ];

  constructor(private loginService: LoginService) {
    this.loginService.checkingRedirectLogin();
   }

  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['select', 'EducationalBackgroundCode', 'EducationalBackgroundName','Description'];
  dataSource = new MatTableDataSource<EducationBackground>(this.ELEMENT_DATA);
  selection = new SelectionModel<EducationBackground>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // workPositionArray: WorkPosition[] = [
  //   { ID: "111", PositionName: "Nhân viên", WorkingPositionName: "Tổng giám đốc", WorkTitle: "Lãnh đạo", WorkPositionDescription: "Quản lí dự án của công ty", SalaryLevel: 4 },
  //   { ID: "112", PositionName: "Nhân viên", WorkingPositionName: "Phó tổng giám đốc", WorkTitle: "Lãnh đạo", WorkPositionDescription: "Quản lí dự án của công ty", SalaryLevel: 4 },
  //   { ID: "113", PositionName: "Nhân viên", WorkingPositionName: "Giám đốc", WorkTitle: "Lãnh đạo", WorkPositionDescription: "Quản lí dự án của công ty", SalaryLevel: 4 },
  // ];

  formTitle: string = "";

  // /**
  //  * Hàm xử lí sự kiện người dùng lưu vị trí việc làm
  //  * CREATED BY: DNCuong(13/11/2018)
  //  */
  // workPosition: WorkPosition = {
  //   PositionID: null,
  //   PositionCode: null,
  //   PositionName: null,
  //   PositionDescription: null,
  //   SalaryID: null,
  //   CreatedDate: null,
  //   ModifiedDate: null,
  //   CreatedBy: null,
  // };
  // saveWorkPosition() {
  //   console.log(this.workPosition);
  // }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.formTitle = "Thêm vị trí công việc";
  }
  PositionID: string;
  onClickedRow(row) {
    this.PositionID = row.position;
    this.selection.toggle(row);
  }


  isDisplay: boolean = false;
  openDialog() {
    this.isDisplay = !this.isDisplay;
    console.log(this.PositionID);
  }

}
