import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PopUpModalComponent } from '../common-components/pop-up-modal/pop-up-modal.component';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  modalRef!: BsModalRef;
  errorCountArry: any[] = [];
  constructor(private modal: BsModalService) {} //private toaster: ToastrService

  //** error pop-up message */
  popUp(content: string) {
    const initialState = {
      statusMessage: content,
    };

    this.modalRef = this.modal.show(PopUpModalComponent, {
      initialState,
      backdrop: 'static',
      ignoreBackdropClick: false,
      class: 'modal-md modal-dialog-centered',
    });

    this.storeData(this.modalRef);
  }

  //** Storing error message array */
  storeData(data: any) {
    this.errorCountArry.push(data);
  }

  //** Close pop-up */
  closePopUp(val: any) {
    let indexNum = 0;
    this.errorCountArry.map((item: any, index) => {
      if (item.content.statusMessage == val) {
        indexNum = index;
      }
    });
    this.errorCountArry[indexNum].hide();
  }
}
