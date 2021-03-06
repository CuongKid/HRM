import { Component, OnInit, ViewChild } from '@angular/core';

import { WorkPosition } from '../../models/workposition';

import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';

export class PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },

];


@Component({
  selector: 'app-work-position-area',
  templateUrl: './work-position-area.component.html',
  styleUrls: ['./work-position-area.component.css']
})

export class WorkPositionAreaComponent implements OnInit {

  constructor(private loginService: LoginService) {
    this.loginService.checkingRedirectLogin();
  }

  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
  workPosition: WorkPosition = {
    PositionID: null,
    PositionCode: null,
    PositionName: null,
    PositionDescription: null,
    SalaryID: null,
    CreatedDate: null,
    ModifiedDate: null,
    CreatedBy: null,
  };
  // saveWorkPosition() {
  //   console.log(this.workPosition);
  // }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.formTitle = "Thêm vị trí công việc";
  }
  positionID: number;
  onClickedRow(row) {
    this.selection.toggle(row);
    this.positionID = row.position;
  }

  deleteRow() {
    if (this.positionID !== undefined) {
      this.dataSource.data = this.dataSource.data.filter(x=> x.position!==this.positionID);
    }
  }

  isDisplay: boolean = false;
  openDialog() {
    this.isDisplay = !this.isDisplay;
  }
}
