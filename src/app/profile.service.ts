import {Injectable} from '@angular/core';
import {Profile} from "./model/profile";
import {PersonalInfo} from "./model/personalInfo";
import {Education} from "./model/education";
import {InfoPair} from "./model/infoPair";
import {Project} from "./model/project";

@Injectable()
export class ProfileService {

  private profile: Profile = new Profile(
    new PersonalInfo(
      "Davor",
      "Češljaš",
      "Marina Tartaglie 12, 10090 Zagreb (Croatia)",
      "+385 97 6958 886",
      "cesljasdavor@gmail.com",
      "Male",
      new Date(Date.parse("1995-07-27")),
      "croatian",
      "../../assets/icons/my_photo.jpg"
    ),
    [
      new Education(
        "Student",
        "Faculty of Electrical Engineering and Computing, University of Zagreb, Unska 3, Zagreb(Croatia)\n" +
        "▪ Study programme(module): Computing (Computer science)\n" +
        "▪ Mentor: dr.sc. Ljiljana Brkić",
        [
          "Seminar: Algebra in programming languages\n" +
          "Mentor: dr.sc. Marijana Greblički\n" +
          "Computer algebra systems, math libraries in programming languages Phyton, C++ and Java",
          "Project: Online-Cookbook\n" +
          "Mentor: dr.sc. Ljiljana Brkić\n" +
          "Developing web-application in Ruby on Rails framework",
          "Final assignment: Web-shop\n" +
          "Mentor: dr.sc. Ljiljana Brkić\n" +
          "Developing single-page application using Angular2 platform and Ruby on Rails framework"
        ]
      ),
      new Education(
        "High school education",
        "1st Technical School Tesla, Klaićeva 7, Zagreb(Croatia)\n" +
        "Study programme(module): electrical engineering(computing)"
      )
    ],
    [
      new InfoPair(
        "Mother tongue",
        "croatian"
      ),
      new InfoPair(
        "Other languages",
        "english B2"
      ),
      new InfoPair(
        "Communication skills",
        "Good communication skills acquired in collage while working with\n" +
        "other colleagues and in various student jobs.\n\n" +
        "Experience in teamwork acquired while working with other colleagues on several student projects.\n\n" +
        "Working within Fiskal1 Customer Service"
      ),
      new InfoPair(
        "Organisational / managerial skills",
        "Experience in time and assigments organisation, acquired during my college education,\n" +
        "where I have finished all my projects in given deadline.\n\n" +
        "During that period I have developed sense of responsibility and commitment to my job."
      ),
      new InfoPair(
        "Job-related skills",
        "▪ Developing programs in Java programming language(web, desktop, console)\n" +
        "▪ Developing web-applications in Ruby on Rails framework\n" +
        "▪ Developing front-end applications using Angular2 platform\n" +
        "▪ Developing mobile applications for Android operating system"
      ),
      new InfoPair(
        "Driving licence",
        "B"
      )
    ],
    [
      //nemam zaposlenja
    ],
    [
      new InfoPair(
        "Java",
        "50"
      ),
      new InfoPair(
        "Ruby",
        "25",
      ),
      new InfoPair(
        "JavaScript",
        "20"
      ),
      new InfoPair(
        "TypeScript",
        "40"
      ),
      new InfoPair(
        "Python",
        "35"
      ),
      new InfoPair(
        "C",
        "15"
      ),
    ],

    [
      new InfoPair(
        "Linux",
        "35"
      ),
      new InfoPair(
        "Windows",
        "65",
      ),
      new InfoPair(
        "Android",
        "20"
      )
    ],


    [
      new InfoPair(
        "Databases, SQL",
        "60"
      ),
      new InfoPair(
        "Angular2",
        "50",
      ),
      new InfoPair(
        "Ruby on Rails",
        "40"
      ),
      new InfoPair(
        "Git",
        "50"
      ),
      new InfoPair(
        "OpenGL",
        "20",
      ),
      new InfoPair(
        "Perl",
        "30"
      ),
      new InfoPair(
        "Matlab",
        "10",
      ),
      new InfoPair(
        "Knowledge of algorithms and data structures",
        "60"
      )
    ],
    [
      new Project(
        "Final assignment: Web-shop - front-end",
        "Project created as a front-end application of the final assignment\n" +
        "in Faculty of Electrical Engineering and Computing, University of Zagreb.\n\n" +
        "The project was written using Angular2 platform\n\n" +
        "The project represents user interface for DCWS (Davor Češljaš Web Shop)",
        ["angular2", "web-shop", "front-end application"],
        "https://github.com/cesljasdavor/dcws-fe",
        "../../assets/projects_documentation/Internetski_ducan-Davor_Češljaš-0036486648.pdf"
      ),
      new Project(
        "Final assignment: Web-shop - back-end",
        "Project created as a back-end application of the final assignment\n" +
        "in Faculty of Electrical Engineering and Computing, University of Zagreb.\n\n" +
        "The project was written in the Ruby on Rails version 5 framework\n\n" +
        "The project represents the RESTful service for the DCWS (Davor Češljaš Web Shop)",
        ["ruby on rails 5", "web-shop", "back-end application"],
        "https://github.com/cesljasdavor/dcws-be",
        "../../assets/projects_documentation/Internetski_ducan-Davor_Češljaš-0036486648.pdf"
      ),
      new Project(
        "Java course - all homeworks",
        "A series of relatively small projects developed as homeworks\n" +
        "for a course 'Osnove programskog jezika Java' by doc.dr.sc Marko Čupić\n" +
        "in Faculty of Electrical Engineering and Computing, University of Zagreb.\n\n" +
        "All projects were written in Java programming language using some external APIs like Hibernate, JSTL etc.\n\n" +
        "There is only one exception - homework number 17 is Android application written in Android Studio\n\n" +
        "All documentation is available through javadoc and homework assignments",
        ["java", "homework", "all"],
        "https://github.com/cesljasdavor/java_course-all_homeworks"
      ),
      new Project(
        "Project: Online-Cookbook",
        "Project developed as a web-application for a course 'Projekt' in\n" +
        "Faculty of Electrical Engineering and Computing, University of Zagreb.\n\n" +
        "Project is a web-application that represents an online cookbook which holds registered users recipes.\n" +
        "This application was developed using Ruby on Rails framework.\n\n" +
        "Since this application was developed in a team, my part was creating CRUD operations for recipes, ingredients and users (register, login, profile).\n" +
        "I was also included in front-end development, where I created several JavaScript scripts for adding ingredients to recipes and CSS documents for recipes, ingredients and users",
        ["ruby on rails 4", "cooking", "web-application"],
        "https://github.com/connectthefranky/Online-Kuhaca",
        "../../assets/projects_documentation/Online_kuhaca.pdf"
      ),
      new Project(
        "Project from course 'Oblikovanja programske potpore':\nAppartmani - back-end",
        "Project developed as a back - end application for a course 'Oblikovanja programske potpore' in\n" +
        "Faculty of Electrical Engineering and Computing, University of Zagreb.\n\n" +
        "Project is a RESTful service for 'Appartmani' Android application that is used for reserving apartments in a resort\n" +
        "In the application user can check if there are available apartments of certain type in a selected period.\n" +
        "If there are free apartments user can reserve them and add additional features: TV, Internet and Parking.\n\n" +
        "There is also a small subsystem that optimizes reservations of apartments that are the same type.",
        ["ruby on rails 4", "apartmants", "rental", "back-end application"],
        "https://github.com/cesljasdavor/appartmani",
        "../../assets/projects_documentation/Appartmani.pdf"
      ),
      new Project(
        "Seminar: Algebra in programming languages",
        "Seminar describes algebra and its application in computer algebra systems(CAS).\n\n" +
        "Because each computer algebra system consists of from, among other things, the programming language and its compiler,\n" +
        "in this seminar I described algebra within the programming languages.\n\n" +
        "Because of the large number of programming languages, as a representatives, " +
        "I decided chose Phyton, Java and C ++.\nI chose these three programming languages " +
        "because they have the greatest application and most users.\n\n" +
        "Through those languages I gave a more detailed description of the application of algebra in programming languages.",
        ["java", "python", "c++", "math libraries", "computer algebra system"],
        null,
        "../../assets/projects_documentation/Algebra_u_programskim_jezicima.pdf"
      )
    ]
  );

  constructor() {
  }

  public getProfile(): Profile {
    return this.profile
  }

}
