import { Injectable } from '@angular/core';

//show witch module is injected
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  CheckEmail(){
    return 'true';
  }
  constructor() { }
}
