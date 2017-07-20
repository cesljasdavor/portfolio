import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {ProfileService} from "../profile.service";
import {PersonalInfo} from "../model/personalInfo";
import {Education} from "../model/education";
import {InfoPair} from "../model/infoPair";
import {Util} from "../util/util";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
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
    trigger("fadeAndUp", [
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
  ]
})
export class CvComponent implements OnInit {

  personalInfo: PersonalInfo;
  education: Education[];
  personalSkills: InfoPair[];
  scrollOptions: any[] = [];


  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    Util.scrollToTop();

    const profile = this.profileService.getProfile();

    this.personalInfo = profile.personalInfo;
    this.education = profile.education;
    this.personalSkills = profile.personalSkills;

    this.createScrollOptions();
  }

  private createScrollOptions() {
    this.scrollOptions.push(Util.createScorllimateOptions(65));
    this.scrollOptions.push(Util.createScorllimateOptions(65));
    this.scrollOptions.push(Util.createScorllimateOptions(30));
  }

}
