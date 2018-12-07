import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutual-area',
  templateUrl: './mutual-area.component.html',
  styleUrls: ['./mutual-area.component.css']
})
export class MutualAreaComponent implements OnInit {

  constructor() { }
  isDisplay: boolean = false;

  ngOnInit() {
  }

  directWorkPosition() {

  }

  //Thiết lập biến active =1 để luôn hiển thị trang hồ sơ
  //Mỗi khi vào màn hình
  active: number = 1;
  activeClass(id: number) {
    this.active = id;
  }

  showChildrenLink() {
    this.isDisplay = true;
  }

}
