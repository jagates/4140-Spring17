import { Component, OnInit } from '@angular/core';

export class User {
  name: string;
  username: string;
}

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  user: User = {name: "John Doe", username: "jdoe45"};

  constructor() {
  }

  ngOnInit() {
  }

}
