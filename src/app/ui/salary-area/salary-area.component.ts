import { Component, OnInit, ViewChild } from '@angular/core';

import { Title } from 'src/app/models/title';
import { LoginService } from 'src/app/services/login.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Salary } from 'src/app/models/salary';


@Component({
  selector: 'app-salary-area',
  templateUrl: './salary-area.component.html',
  styleUrls: ['./salary-area.component.css']
})
export class SalaryAreaComponent implements OnInit {

  ELEMENT_DATA: Salary[] = [
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
    { SalaryCode: "1", SalaryName: "Giáo sư toán", SalaryLevel: 2, SalaryBasic: 4000000, Salarycoefficient: 1.2 },
  ];

  constructor(private loginService: LoginService) {
    this.loginService.checkingRedirectLogin();
  }

  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['select', 'SalaryCode', 'SalaryName', 'SalaryLevel', 'SalaryBasic', 'Salarycoefficient'];
  dataSource = new MatTableDataSource<Salary>(this.ELEMENT_DATA);
  selection = new SelectionModel<Salary>(true, []);

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
    this.selection.onChange.subscribe((a) => {
      if (a.added[0])   // will be undefined if no selection
      {
       console.log(a);
      }
      else{
        console.log(a.added[0].SalaryBasic);
      }
    });
  }
  positionID: string;
  onClickedRow(row) {
    this.selection.toggle(row);
    this.positionID = row.SalaryCode;
    console.log(row)
  }


  isDisplay: boolean = false;
  openDialog() {
    this.isDisplay = !this.isDisplay;
    if (this.positionID) {
      this.formTitle = "Sửa mức lương"
    }
    else {
      this.formTitle = "Thêm mức lương mới";
    }
  }

}
