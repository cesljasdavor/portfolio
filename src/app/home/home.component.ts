import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {ProfileService} from "../profile.service";
import {Util} from "../util/util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("fade", [
      state("in", style({
        opacity: 1
      })),
      transition("void => *", [
        style({
          opacity: 0
        }),
        animate("400ms ease-in")
      ])
    ]),
    trigger("cvAnimation", [
      state("inactive", style({
        opacity: 0,
        transform: "translateY(50px)"
      })),
      state("active", style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      transition("inactive => active", animate("300ms 0.1s ease-in")),
      transition("active => inactive", animate("200ms ease-out"))
    ]),
    trigger("devSkillsAnimation", [
      state("inactive", style({
        opacity: 0,
        transform: "translateY(50px)"
      })),
      state("active", style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      transition("inactive => active", animate("300ms 0.2s ease-in")),
      transition("active => inactive", animate("200ms ease-out"))
    ]),
    trigger("projectsAnimation", [
      state("inactive", style({
        opacity: 0,
        transform: "translateY(50px)"
      })),
      state("active", style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      transition("inactive => active", animate("300ms 0.3s ease-in")),
      transition("active => inactive", animate("200ms ease-out"))
    ])
  ]
})
export class HomeComponent implements OnInit {

  cvScrollOpt: any;
  devSkillsScrollOpt: any;
  projectsScrollOpt: any;

  name: string;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    Util.scrollToTop();

    const personalInfo = this.profileService.getProfile().personalInfo;

    this.name = personalInfo.firstName + " " + personalInfo.lastName;

    const percentage: number = 65;

    this.cvScrollOpt = Util.createScorllimateOptions(percentage);
    this.devSkillsScrollOpt = Util.createScorllimateOptions(percentage);
    this.projectsScrollOpt = Util.createScorllimateOptions(percentage);
  }

}
