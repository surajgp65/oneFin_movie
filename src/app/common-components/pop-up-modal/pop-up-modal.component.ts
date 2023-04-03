import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common-services/common.service';

@Component({
  selector: 'app-pop-up-modal',
  templateUrl: './pop-up-modal.component.html',
  styleUrls: ['./pop-up-modal.component.scss'],
})
export class PopUpModalComponent implements OnInit {
  //** shows Error message in pop-up */
  statusMessage: string = '';
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  //** Close popup function */
  close(val: any) {
    this.commonService.closePopUp(val);
  }
}
