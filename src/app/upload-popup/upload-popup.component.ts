import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DogsService } from '../services/all-dogs/dogs.service';



@Component({
  selector: 'app-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadPopupComponent implements OnInit {

  url = '';
  dogForm: FormGroup;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private dogsService: DogsService) { }

  ngOnInit() {
    this.dogForm = new FormGroup({
      'dogPhoto': new FormControl(null),
      'dogTitle': new FormControl(null),
      'dogDescription': new FormControl(null),
      'dogPassword': new FormControl(null),
    })
  }
  dog: {
    title: string,
    description: string,
    src: string,
    pawFive: number 
  }
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result as string;
      }
    }
  }

  onSubmit() {

    if (this.dogForm.value.dogPassword > 1000 && this.dogForm.value.dogPassword < 1000000) {
      var value = this.dogForm.value.dogPassword,
      sum = 0;
      while (value) {
  
          sum += value % 10;
          value = Math.floor(value / 10);
          if(sum >= 10 && value === 0) {
            value = sum;
            sum = 0;
          }
      }
  
      if (sum === 7) {
        this.dog = {
          title: this.dogForm.value.dogTitle,
          description: this.dogForm.value.dogDescription,
          src: this.url,
          pawFive: 0,
        }
        this.dogsService.setDogs(this.dog);
        alert("Sucessfully Submitted");
        this.activeModal.dismiss();
      }
      else {
        alert("Submission failed. Enter valid secred ID.")
      }
    }
  }
}
