import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {ProfileService} from "../profile.service";
import {Profile} from "../model/profile";
import {InfoPair} from "../model/infoPair";
import {Util} from "../util/util";

@Component({
  selector: 'app-dev-skills',
  templateUrl: './dev-skills.component.html',
  styleUrls: ['./dev-skills.component.css'],
  animations: [
    trigger("fadeAndUp", [
      state("inactive", style({
        opacity: 0,
        transform: "translateY(50px)"
      })),
      state("active", style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      transition("inactive => active", animate("300ms ease-in")),
      transition("active => inactive", animate("200ms 0.2s ease-out"))
    ])
  ]
})
export class DevSkillsComponent implements OnInit {

  skillCategories: {categoryTitle: string, skills: InfoPair[], scrollOpt: any}[] = [];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    Util.scrollToTop();

    const profile: Profile = this.profileService.getProfile();

    this.addSkillCategory("Programming languages", profile.programmingLanguages);
    this.addSkillCategory("Operating systems", profile.operatingSystems);
    this.addSkillCategory("Other technical skills", profile.other);
  }

  private addSkillCategory(title: string, skills: InfoPair[]) {
    this.skillCategories.push({
      categoryTitle: title,
      skills: skills,
      scrollOpt: Util.createScorllimateOptions(45)
    });
  }

  determineClass(value: string): string {
    const num: number = +value;

    let generatedClass: string = "progress-bar ";

    if (num >= 0 && num < 25) {
      return generatedClass + "bg-danger";
    } else if (num >= 25 && num < 50) {
      return generatedClass + "bg-warning";
    } else if (num >= 50 && num < 75) {
      return generatedClass + "bg-info";
    } else if (num >= 75 && num <= 100) {
      return generatedClass + "bg-success";
    }

    return null;
  }

}
