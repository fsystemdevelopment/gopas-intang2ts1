import { Component, OnInit, OnChanges } from "@angular/core";

export interface StudentItem {
  age?: number;
  firstname: string;
  surname: string;
  courses: any;
  detail1?: any;
}

@Component({
  selector: "voting",
  templateUrl: "./voting.component.html",
  styleUrls: ["./voting.component.css"]
})
export class VotingComponent implements OnInit, OnChanges {
  totalVotes: number = 0;
  greeting: any;
  name: string;
  students: StudentItem[];

  constructor() {}

  ngOnInit() {
    this.name = "angular";
    this.students = [
      {
        age: 30,
        firstname: "Milan",
        surname: "Švrlo",
        courses: [
          {
            name: "Angular1"
          },
          {
            name: "Angular2"
          }
        ],
        detail1: {
          detail2: "popis"
        }
      },
      {
        firstname: "Denisa",
        surname: "Lipovská",
        courses: [
          {
            name: "Angular1"
          },
          {
            name: "Node.JS1"
          }
        ]
      }
    ];
  }

  upVote() {
    this.totalVotes = this.totalVotes + 1;
  }

  downVote() {
    this.totalVotes -= 1;
  }

  sendGreeting(greeting) {
    console.log(greeting);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  onSubmit(form) {
    console.log(form);
  }
}
