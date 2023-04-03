import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.scss'],
})
export class ViewDoctorsComponent implements OnInit {
  userData: any;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent | any;
  filterdata: any;

  constructor(private http: HttpRequestService) {}

  ngOnInit(): void {
    this.getUserdata();
  }

  getUserdata() {
    try {
      this.http.request('get', 'users', null).subscribe((response: any) => {
        this.userData = response;
        this.filterdata = this.userData.slice(0, this.pageSize);
      });
    } catch (error) {}
  }

  deleteUser(id: any) {
    try {
      this.http
        .request('delete', 'users/' + id, null)
        .subscribe((response: any) => {
          this.getUserdata();
        });
    } catch (error) {}
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
    this.filterdata = this.userData.slice(firstCut, secondCut);
  }
}
