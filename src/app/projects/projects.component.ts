import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {ProfileService} from "../profile.service";
import {Project} from "../model/project";
import {Util} from "../util/util";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger("projectAnimation", [
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
export class ProjectsComponent implements OnInit {

  projects: Project[];
  scrollOptions: any[];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
    Util.scrollToTop();

    this.projects = this.profileService.getProfile().projects;

    this.loadScrollOptions();
  }

  private loadScrollOptions() {
    const percentage: number = 15;

    this.scrollOptions = [];
    for (let i = 0; i < this.projects.length; i++) {
      this.scrollOptions.push(Util.createScorllimateOptions(percentage));
    }
  }
}
