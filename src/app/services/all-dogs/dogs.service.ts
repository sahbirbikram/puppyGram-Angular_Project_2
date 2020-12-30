import { Injectable } from '@angular/core';
import { AllDogs } from './allDogs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor() { }

  getDogs() {
    return AllDogs;
  }
  setDogs(dogs) {
    AllDogs.unshift(dogs);
  }
}
