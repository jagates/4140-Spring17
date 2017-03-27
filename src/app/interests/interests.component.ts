import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  constructor() { }
  messages = [
    {from: 'Top 10 weight loss tips', subject: '10 easy and affordable ways for you to lose weight'},
    {from: 'Top 10 weight loss tips', subject: '10 easy and affordable ways for you to lose weight'},
    {from: 'Top 10 weight loss tips', subject: '10 easy and affordable ways for you to lose weight'},
    {from: 'Top 10 weight loss tips', subject: '10 easy and affordable ways for you to lose weight'},
    {from: 'Top 10 weight loss tips', subject: '10 easy and affordable ways for you to lose weight'}
  ];
  ngOnInit() {
  }

}
