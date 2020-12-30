import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dog-detail-popup',
  templateUrl: './dog-detail-popup.component.html',
  styleUrls: ['./dog-detail-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DogDetailPopupComponent implements OnInit {

  @Input() dog;
  showDescription: boolean = true;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
