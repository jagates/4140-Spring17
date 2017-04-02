import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  templateUrl: './interestsBox.component.html',
  styleUrls: ['./interestsBox.component.scss']
})
export class InterestsBox implements OnInit {
  newInterest: string = '';

  constructor(public dialogRef: MdDialogRef<InterestsBox>) {}

  ngOnInit() {
  }

  interests:string[] = [
      "Weight Loss",
      "Paleo Diet",
      "Cardio"
  ]

  addNewInterest():void {
    if(this.newInterest.length > 0) {
      this.interests.push(this.newInterest);
      this.newInterest = '';
    }
  }
  removeInterest(index: number):void {
    console.log("Interest: " + this.interests[index]);
    this.interests.splice(index,1);
    console.log(this.interests);
  }

}
