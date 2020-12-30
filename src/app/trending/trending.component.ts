import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { DogDetailPopupComponent } from '../dog-detail-popup/dog-detail-popup.component';
import { DogsService } from '../services/all-dogs/dogs.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  dogs = []

  constructor(private modalService: NgbModal, private dogsService: DogsService) {
    this.dogs = this.dogsService.getDogs();
  }


  ngOnInit(): void {
  }

  open(dog) {
    const modalRef = this.modalService.open(DogDetailPopupComponent, {backdropClass: 'darker', centered: true});
    modalRef.componentInstance.dog = dog;
  }
  onDelete(i) {
    const modalRefDelete = this.modalService.open(ConfirmPopupComponent, {backdropClass: 'darker', centered: true});
    modalRefDelete.componentInstance.confirmed.subscribe((receivedEntry) => {
      if(receivedEntry) {
        this.dogs.splice(i, 1);
      }
    });

  }

}
