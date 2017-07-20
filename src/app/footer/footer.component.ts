import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {Util} from "../util/util";

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger("fade", [
        state("inactive", style({
          opacity: 0
        })),
        state("active", style({
          opacity: 1
        })),
        transition("inactive => active", animate("400ms ease-in")),
        transition("active => inactive", animate("300ms ease-out"))
      ]
    )
  ]
})
export class FooterComponent implements OnInit {

  footerScrollOpt: any = Util.createScorllimateOptions(40);

  constructor() {
  }

  ngOnInit() {
  }

}
