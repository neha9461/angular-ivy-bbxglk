import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Candidate } from './app.component';

@Component({
  selector: 'candidate-table',
  templateUrl: './hello.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      .example-section {
        display: flex;
        align-content: center;
        align-items: center;
        height: 60px;
      }

      .example-margin {
        margin: 0 10px;
      }
    `
  ]
})
export class HelloComponent implements OnChanges {
  @Input() candidateList: Candidate[];
  list: Candidate[];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'gender'];
  searchTerm = '';
  male = false;
  female = false;
  constructor() {
    this.list = this.candidateList;
  }
  ngOnChanges() {
    this.list = this.candidateList;
  }
  search() {
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLocaleLowerCase();
      this.list = this.candidateList.filter(a => {
        return (
          a.firstName.toLocaleLowerCase() == term ||
          a.lastName.toLocaleLowerCase() == term ||
          a.email == term
        );
      });
    } else {
      this.list = this.candidateList;
    }
  }

  OnChange() {
    if (this.male && this.female) {
      this.list = this.candidateList.filter(a => {
        return a.gender == 'Male' || a.gender == 'Female';
      });
      this.list = [...this.list];
    } else if (this.male) {
      this.list = this.candidateList.filter(a => {
        return a.gender == 'Male';
      });
      this.list = [...this.list];
    } else if (this.female) {
      this.list = this.candidateList.filter(a => {
        return a.gender == 'Female';
      });
      this.list = [...this.list];
    } else if (!this.male && !this.female) {
      this.list = this.candidateList.filter(a => {
        return a.gender == 'Male' || a.gender == 'Female';
      });
      this.list = [...this.list];
    }
  }
}
