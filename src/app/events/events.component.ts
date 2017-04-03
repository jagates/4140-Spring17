import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  myEvents = [
    {title: 'Clemson Annual Color Run', date: '4/6/17', avatar: 'ColorRun.jpg', description: 'The Color Run, also known as the Happiest 5k on the Planet, is a unique paint race that celebrates healthiness, happiness, and individuality.'},

 ];

  events = [

    {title: 'Anderson Annual Charity 5k', date: '4/16/17', avatar: '5k.png', description: 'Come join us as we run for a cause in downtown Anderson!'},
    {title: 'Fike Group Workout', date: '4/20/17', avatar: 'WeightLifting.png',  description: 'Come join us at Fike Recreational Center at 8:00 PM for a group workout! Must have a valid CUID or pay an entry fee.'},
    {title: 'Cooper River Bridge Run - 10k', date: '5/21/17', avatar: 'CooperRiver.jpg', description: 'The Cooper River Bridge Run provides a world-class 10-K foot race. The race promotes continuous physical activity and a healthy lifestyle through education and opportunity.'},
    {title: 'Yoga on Bowman', date: '5/18/17', avatar: 'yoga.jpg', description: 'Come join us for an open sunrise yoga session on Bowman Field!'},
    
  ];
  constructor() { }

  ngOnInit() {
  }
  addEvent(index: number):void{
     this.myEvents.push(this.events[index]);
     this.events.splice(index,1);
  }

  removeEvent(index: number):void{
     this.events.push(this.myEvents[index]);
     this.myEvents.splice(index,1);
  }
}
