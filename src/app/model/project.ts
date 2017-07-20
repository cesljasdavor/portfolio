export class Project {
  constructor(
    public name: string,
    public description: string,
    public tags: string[],
    public gitLink?: string,
    public docLink?: string
  ){}
}

/*
  [
    new Project(
      "Završni rad: Internetski dućan - front-end",
      "https://github.com/cesljasdavor/dcws-fe"
      "../../assets/projects_documentation/Internetski_ducan-Davor_Češljaš-0036486648.pdf"
    ),
    new Project(
      "Završni rad: Internetski dućan - back-end",
      "https://github.com/cesljasdavor/dcws-be"
      "../../assets/projects_documentation/Internetski_ducan-Davor_Češljaš-0036486648.pdf"
    ),
    new Project(
      "Java tečaj - sve domaće zadaće",
      "https://github.com/cesljasdavor/java_course-all_homeworks"
    ),
    new Project(
      "Projekt: Online-Kuhača",
      "https://github.com/connectthefranky/Online-Kuhaca"
    ),
    new Project(
      "Projekt iz oblikovanja programske potpore: Appartmani - back-end",
      "https://github.com/cesljasdavor/appartmani"
    ),
    new Project(
      "Seminar: Algebra u programskim jezicima",
      null,
      "postavi lokaciju"
    )
  ]
*/
