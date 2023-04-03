import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {} //private toaster: ToastrService

  // successfull toaster message..
  sucsessToaster(content: string) {
    // this.toaster.success(content);
  }

  // error toaster message
  errorToaster(content: string) {
    // this.toaster.error(content);
  }
}
