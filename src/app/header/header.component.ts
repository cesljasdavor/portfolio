import {Component, OnInit, Input, trigger, style, state, transition, animate} from '@angular/core';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger("fade", [
      state("in", style({
        opacity: 1
      })),
      transition("void => *", [
        style({
          opacity: 0,
        }),
        animate("400ms ease-in")
      ])
    ]),
    trigger("slideFromRight", [
      state("in", style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      transition("void => *", [
          style({
            opacity: 0,
            transform: "translateX(100px)"
          }),
          animate("400ms ease-in")
        ]
      )
    ])
  ]
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
