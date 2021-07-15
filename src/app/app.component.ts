import { Component, VERSION } from '@angular/core';

export declare interface Candidate {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fName = '';
  lName = '';
  email = '';
  gender = 'Male';
  candidateList: Candidate[] = [];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'gender'];

  addCandidate() {
    const candidate: Candidate = {
      firstName: this.fName,
      lastName: this.lName,
      email: this.email,
      gender: this.gender === '1' ? 'Male' : 'Female'
    };
    this.candidateList.push(candidate);
    console.log(this.candidateList);
  }
}
