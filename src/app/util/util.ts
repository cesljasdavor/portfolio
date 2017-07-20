import {ActivatedRoute, UrlSegment, Router} from "@angular/router";
export class Util {
  static scrollToTop() {
    window.scrollTo(0, 0);
  }

  static createScorllimateOptions(percentage: number): any {
    return {
      myScrollimation: {
        currentState: "inactive",
        states: [
          {
            method: "percentElement",
            value: percentage,
            state: "active",
          },
          {
            method: "default",
            state: "inactive"
          }
        ]
      },
    };
  }
}
