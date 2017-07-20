export class Education {
  constructor(
    public title: string,
    public description: string,
    public courses?: string[]
  ) {}
}

/*
  [
    new Education(
      "Student",
      "Fakultet elektrotehnike i računarstva, Sveučilište u Zagrebu, Unska 3, Zagreb(Hrvatska)\n
      ▪ Smjer(modul): Računarstvo (Računarska znanost)\n
      ▪ Mentor: dr.sc. Ljiljana Brkić",
      [
        "Seminar: Algebra u programskim jezicima\n
        Mentor: dr.sc. Marijana Greblički\n
        Računalni algebarski sustavi, matematičke biblioteke unutar programskih jezika Phyton, C++ i Java",
        "Projekt: Online kuharica\n
        Mentor: dr.sc. Ljiljana Brkić\n
        Izrada web-aplikacije u programskom okviru Ruby on Rails",
        "Završni rad: Internetski dućan\n
        Mentor: dr.sc. Ljiljana Brkić\n
        Izrada single-page aplikacije koristeći Angular2 platformu te Ruby on Rails programski okvir"
      ]
    ),
    new Education(
      "Srednja stručna sprema",
      "I. tehnička škola Tesla, Klaićeva 7, Zagreb(Hrvatska)\n
       Smjer(podsmjer): elektrotehnika(računarstvo)"
    )

  ]
 */
