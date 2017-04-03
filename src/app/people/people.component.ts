import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people = [
   { first: 'Jack', last: 'Venable', avatar: 'JackProfile.jpg'},
   { first: 'Sai', last: 'Chaganti', avatar: 'SaiProfile.jpg'},
   { first: 'Joshua', last: 'Gates', avatar: 'JoshProfile.jpeg'},
   { first: 'Bryan', last: 'Pyle', avatar: 'BryanProfile.jpg'},
   { first: 'Tyler', last: 'Mccall', avatar: 'TylerProfile.jpeg'},
   { first: 'Kevin', last: 'Price', avatar: 'KevinProfile.jpg'},
   { first: 'Arnold', last: 'Cunningham', avatar: 'ArnoldProfile.jpg'},
   { first: 'Nick', last: 'Bottom', avatar: 'NickProfile.jpg'},
   { first: 'Monty', last: 'Python', avatar: 'MontyProfile.jpg'},
   { first: 'Shamar', last: 'Collins', avatar: 'ShamarProfile.jpg'},
   { first: 'Emma', last: 'Watson', avatar: 'EmmaProfile.jpg'},
   { first: 'Lim', last: 'Jahey', avatar: 'LimProfile.jpg'},
   { first: 'Madison', last: 'Woschkolup', avatar: 'MadisonProfile.jpg'},
   { first: 'Simon', last: 'Democko', avatar: 'SimonProfile.jpg'},

   ];

  myConnections = [
   { first: 'Darius', last: 'McMillan', avatar: 'DariusProfile.jpg'},
   { first: 'Susan', last: 'Thomson', avatar: 'SusanProfile.jpg'},

    ];

  constructor() { }

  ngOnInit() {
  }
   addPerson(index: number):void{
     this.myConnections.push(this.people[index]);
     this.people.splice(index,1);
   }

   removePerson(index: number):void{
      this.people.push(this.myConnections[index]);
      this.myConnections.splice(index,1);
   }
}
