import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-easing',
  templateUrl: './easing.component.html',
  styleUrls: ['./easing.component.css'],
  animations: [
    // trigger name is openClose
    trigger('openClose',
      [
        //stypes when state is open
        state('open', style({
          opacity: 1,
          backgroundColor: 'yellow',
          color: 'black'
        })),
        //stypes when state is closed
        state('closed', style({
          opacity: 0.5,
          color: 'white',
          backgroundColor: 'green'
        })),
        // how the styles changes when state changes from open to closed
        transition('open => closed', [
          animate('5s 1s ease-out')
        ]),
        // how the styles changes when state changes from closed to open
        transition('closed => open', [
          animate('1s 1s ease-in')
        ]),
      ]),
    // trigger name is flyInOut
    trigger('flyInOut',
      [
        // transition name is void=<any or :enter
        transition(':enter', [
          //already had this style before animation is completed
          style({
            transform: 'translateX(-100%)',
            backgroundColor: 'white',
            color: 'black'
          }),
          animate('3s 0s ease-in-out')
        ]),
        // transition name is any=>void or :leave
        transition(':leave', [
          animate('2s 0s ease-out',
            //will achieve the style animation is completed
            style({
              transform: 'translateX(100%)',
              backgroundColor: 'green',
              color: 'white'
            }))
        ])
      ])]
})
export class EasingComponent implements OnInit {

  isOpen: boolean;
  isIn: boolean;

  constructor() { }

  ngOnInit() {
    this.isOpen = true;
    this.isIn = true;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.isIn = this.isOpen;
  }

}
