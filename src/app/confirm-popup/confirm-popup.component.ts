import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  @Output() confirmed: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  verifyConfirm() {
    this.confirmed.emit(true);
    this.activeModal.dismiss();
  }

}
