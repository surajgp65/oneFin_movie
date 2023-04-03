import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @Input() data: any;
  @Output() deleteUser: EventEmitter<any> = new EventEmitter();
  filterdata: any;

  constructor() {}

  ngOnInit(): void {
    this.filterdata = this.data;
  }

  delete(data: any) {
    this.deleteUser.emit(data);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  onPageChanged(e: any) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.filterdata = this.data.slice(firstCut, secondCut);
  }
}
